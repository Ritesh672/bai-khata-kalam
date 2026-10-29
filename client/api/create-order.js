// POST /api/create-order
// Validates the donation form and creates a Razorpay Order on the server, so the amount
// can't be changed in the browser and payments can be verified and auto-captured.
const { getCredentials, razorpayRequest, sendJson, rejectNonPost } = require('./_lib/razorpay');

const MIN_AMOUNT_INR = 1;
const MAX_AMOUNT_INR = Number(process.env.DONATION_MAX_INR) || 500000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?\d{10,15}$/;

const text = (value, maxLength) => (typeof value === 'string' ? value.trim().slice(0, maxLength) : '');

module.exports = async function handler(req, res) {
  if (rejectNonPost(req, res)) return;

  const body = req.body || {};
  const amount = Number(body.amount);
  const name = text(body.name, 100);
  const email = text(body.email, 254);
  const phone = text(body.phone, 20).replace(/[\s-]/g, '');
  const isCorporate = body.isCorporate === true;

  if (!Number.isInteger(amount) || amount < MIN_AMOUNT_INR || amount > MAX_AMOUNT_INR) {
    return sendJson(res, 400, {
      error: `Please enter a whole amount between ₹${MIN_AMOUNT_INR} and ₹${MAX_AMOUNT_INR.toLocaleString('en-IN')}. For larger donations, please contact us directly.`,
    });
  }
  if (!name) return sendJson(res, 400, { error: 'Please enter your full name.' });
  if (!EMAIL_PATTERN.test(email)) return sendJson(res, 400, { error: 'Please enter a valid email address.' });
  if (!PHONE_PATTERN.test(phone)) return sendJson(res, 400, { error: 'Please enter a valid phone number.' });

  try {
    const { keyId } = getCredentials();
    const order = await razorpayRequest('POST', '/orders', {
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: `bkk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, // ≤ 40 chars
      // Notes appear against the order and payment in the Razorpay Dashboard (max 15 keys, 256 chars each).
      notes: {
        donor_name: name,
        donor_email: email,
        donor_phone: phone,
        message: text(body.message, 250),
        company: isCorporate ? text(body.companyName, 120) || 'Not given' : 'Individual',
        business_email: isCorporate ? text(body.businessEmail, 254) : '',
        is_corporate: isCorporate ? 'yes' : 'no',
        is_csr: isCorporate && body.isCsr === true ? 'yes' : 'no',
      },
    });

    return sendJson(res, 200, {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error) {
    console.error('create-order failed:', error.message);
    return sendJson(res, 502, { error: 'We could not start the payment. Please try again in a moment.' });
  }
};
