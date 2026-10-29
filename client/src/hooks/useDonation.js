import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJson } from '../lib/api';

// Razorpay donation flow (moved unchanged from the old Donate page):
// 1. create the order on the server, 2. open Razorpay Checkout,
// 3. verify the payment on the server before showing the success page.
export default function useDonation() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const pay = async ({ amount, name, email, phone, message, isCorporate, companyName, businessEmail, isCsr }) => {
    if (isProcessing) return;

    const rupees = Number(amount);
    if (!Number.isInteger(rupees) || rupees < 1) {
      alert("Please enter a valid donation amount in whole rupees.");
      return;
    }
    if (!name || !email || !phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }
    if (!window.Razorpay) {
      alert("Payment gateway is temporarily unavailable. Please try again later.");
      return;
    }

    setIsProcessing(true);

    // 1. Create the order on the server (the amount is fixed there, not in the browser).
    let order;
    try {
      const { ok, data } = await postJson('/api/create-order', {
        amount: rupees,
        name,
        email,
        phone,
        message,
        isCorporate,
        companyName,
        businessEmail,
        isCsr: isCorporate && isCsr,
      });
      if (!ok || !data.orderId) {
        alert(data.error || "We could not start the payment. Please try again in a moment.");
        setIsProcessing(false);
        return;
      }
      order = data;
    } catch (error) {
      console.error("create-order request failed:", error);
      alert("We could not reach the payment service. Please check your connection and try again.");
      setIsProcessing(false);
      return;
    }

    const options = {
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount, // paise, as set by the server
      currency: order.currency,
      name: "Bai Khata Kalam",
      description: "Donation for Education",
      image: "https://www.baikhatakalam.com/favicon.jpg", // Optional logo
      // 2. Verify the payment on the server before showing the success page.
      handler: async function (response) {
        try {
          const { ok, data } = await postJson('/api/verify-payment', response);
          if (ok && data.verified) {
            navigate('/donation-success', {
              state: {
                paymentId: data.paymentId,
                amount: String(data.amount),
                name: name,
                email: email,
                date: new Date(data.createdAt * 1000).toLocaleString()
              }
            });
          } else {
            alert(data.error || `We could not confirm your payment yet. If money was deducted, please contact us with payment ID ${response.razorpay_payment_id}.`);
          }
        } catch (error) {
          console.error("verify-payment request failed:", error);
          alert(`We could not confirm your payment right now. If money was deducted, please contact us with payment ID ${response.razorpay_payment_id}.`);
        } finally {
          setIsProcessing(false);
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#2563eb", // Primary blue
      },
      modal: {
        ondismiss: () => setIsProcessing(false),
      },
    };

    try {
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(`Payment failed: ${response.error?.description || 'please try again.'}`);
        console.error("Payment failure response:", response.error);
      });
      rzp1.open();
    } catch (error) {
      console.error("Razorpay script not loaded or error opening modal:", error);
      alert("Payment gateway is temporarily unavailable. Please try again later.");
      setIsProcessing(false);
    }
  };

  return { pay, isProcessing };
}
