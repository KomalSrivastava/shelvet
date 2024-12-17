import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission (e.g., send data to the server, update order status)
    history.push("/order-summary"); // Redirect to Order Summary page after checkout
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg">Shipping Address:</label>
            <input
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#b3876f] text-white py-3 rounded-md hover:bg-[#9a6e5b]"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
