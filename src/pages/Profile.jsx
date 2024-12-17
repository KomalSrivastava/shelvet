import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    orderHistory: [
      { id: "ORD12345", date: "2024-12-10", total: "$179.97" },
      { id: "ORD12346", date: "2024-12-05", total: "$99.99" },
    ],
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">Email: {user.email}</p>

        <h2 className="text-2xl font-bold mt-8">Order History</h2>
        <div className="space-y-4 mt-4">
          {user.orderHistory.map((order, index) => (
            <div key={index} className="flex justify-between">
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: {order.total}</p>
              <Link
                to={`/order-summary/${order.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
