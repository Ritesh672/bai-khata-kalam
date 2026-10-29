// POST /api/verify-payment
// Confirms a payment really succeeded before the site shows the success page:
// 1) checks Razorpay's signature with the key secret, 2) fetches the payment from Razorpay
// and checks it belongs to the order and is captured (capturing it if only authorized).
const { razorpayRequest, isValidPaymentSignature, sendJson, rejectNonPost } = require('./_lib/razorpay');

const ID_PATTERN = /^[A-Za-z0-9_]{1,40}$/;

async function captureIfAuthorized(payment) {
  if (payment.status !== 'authorized') return payment;
  try {
    return await razorpayRequest('POST', `/payments/${payment.id}/capture`, {
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    // Auto-capture may have captured it in the meantime; re-read the real status.
    return razorpayRequest('GET', `/payments/${payment.id}`);
  }
}

module.exports = async function handler(req, res) {
  if (rejectNonPost(req, res)) return;

  const {
    razorpay_order_id: orderId,
    razorpay_payment_id: paymentId,
    razorpay_signature: signature,
  } = req.body || {};

  if (!ID_PATTERN.test(orderId || '') || !ID_PATTERN.test(paymentId || '')) {
    return sendJson(res, 400, { verified: false, error: 'Invalid payment details.' });
  }

  try {
    if (!isValidPaymentSignature(orderId, paymentId, signature)) {
      console.warn('verify-payment: signature mismatch', { orderId, paymentId });
      return sendJson(res, 400, { verified: false, error: 'This payment could not be verified.' });
    }

    let payment = await razorpayRequest('GET', `/payments/${paymentId}`);
    if (payment.order_id !== orderId) {
      console.warn('verify-payment: order mismatch', { orderId, paymentId });
      return sendJson(res, 400, { verified: false, error: 'This payment could not be verified.' });
    }

    payment = await captureIfAuthorized(payment);
    if (payment.status !== 'captured') {
      return sendJson(res, 409, {
        verified: false,
        status: payment.status,
        error: `Your payment is still being processed (status: ${payment.status}). Please keep your payment ID ${paymentId} and contact us if it is not confirmed soon.`,
      });
    }

    return sendJson(res, 200, {
      verified: true,
      paymentId: payment.id,
      orderId,
      amount: payment.amount / 100, // rupees
      currency: payment.currency,
      method: payment.method,
      createdAt: payment.created_at,
    });
  } catch (error) {
    console.error('verify-payment failed:', error.message, { orderId, paymentId });
    return sendJson(res, 502, {
      verified: false,
      error: `We could not confirm your payment right now. If money was deducted, please contact us with payment ID ${paymentId}.`,
    });
  }
};
