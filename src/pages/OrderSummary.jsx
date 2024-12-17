import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const orderDetails = {
    id: "ORD12345",
    items: [
      { name: "Classic Denim Jacket", price: "$49.99", quantity: 2 },
      { name: "Leather Handbag", price: "$79.99", quantity: 1 },
    ],
    total: "$179.97",
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

        <div className="space-y-6">
          <p className="text-lg">Order ID: {orderDetails.id}</p>

          <div>
            <h3 className="text-2xl font-bold mb-4">Items:</h3>
            <div className="space-y-4">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <p>
                    {item.name} (x{item.quantity})
                  </p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Total:</h3>
            <p className="text-2xl font-bold">{orderDetails.total}</p>
          </div>

          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
