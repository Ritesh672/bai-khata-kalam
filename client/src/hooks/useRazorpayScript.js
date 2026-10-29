import { useEffect } from 'react';

const SRC = 'https://checkout.razorpay.com/v1/checkout.js';

// Loads Razorpay Checkout only on pages that take payments (instead of on every page),
// which keeps third-party scripts and cookies off the rest of the site.
export default function useRazorpayScript() {
  useEffect(() => {
    if (window.Razorpay || document.querySelector(`script[src="${SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
