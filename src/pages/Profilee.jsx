import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png"; // Add your profile image here

const Profilee = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    orders: 5, // Replace with dynamic data
    wishlist: 3, // Replace with dynamic data
  });

  useEffect(() => {
    // Fetch user data from API or context (for demonstration, we're using static data)
    // Example: fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Account Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium">Orders</h4>
            <p className="text-2xl font-semibold">{user.orders}</p>
            <Link to="/orders" className="text-blue-500 hover:underline">
              View Orders
            </Link>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium">Wishlist</h4>
            <p className="text-2xl font-semibold">{user.wishlist}</p>
            <Link to="/wishlist" className="text-blue-500 hover:underline">
              View Wishlist
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Settings</h3>
        <ul>
          <li className="mb-4">
            <Link to="/profile/edit" className="text-blue-500 hover:underline">
              Edit Profile
            </Link>
          </li>
          <li>
            <Link
              to="/profile/change-password"
              className="text-blue-500 hover:underline"
            >
              Change Password
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilee;
