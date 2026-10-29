// Server-only Razorpay helpers. Files under api/_lib are not exposed as endpoints by Vercel.
// The key secret is read from environment variables and never sent to the browser.
const crypto = require('crypto');

const RAZORPAY_API = 'https://api.razorpay.com/v1';

function getCredentials() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    throw new Error('RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are not set');
  }
  return { keyId, keySecret };
}

async function razorpayRequest(method, path, body) {
  const { keyId, keySecret } = getCredentials();
  const response = await fetch(`${RAZORPAY_API}${path}`, {
    method,
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error?.description || `Razorpay API responded ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return data;
}

// Razorpay signs `${order_id}|${payment_id}` with the key secret (HMAC-SHA256, hex).
function isValidPaymentSignature(orderId, paymentId, signature) {
  if (typeof signature !== 'string' || !/^[a-f0-9]{64}$/.test(signature)) return false;
  const expected = crypto
    .createHmac('sha256', getCredentials().keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest();
  return crypto.timingSafeEqual(expected, Buffer.from(signature, 'hex'));
}

function sendJson(res, status, payload) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(payload);
}

function rejectNonPost(req, res) {
  if (req.method === 'POST') return false;
  res.setHeader('Allow', 'POST');
  sendJson(res, 405, { error: 'Method not allowed' });
  return true;
}

module.exports = { getCredentials, razorpayRequest, isValidPaymentSignature, sendJson, rejectNonPost };
