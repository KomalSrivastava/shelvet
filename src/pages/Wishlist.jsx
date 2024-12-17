import React from "react";
import { Link } from "react-router-dom";
import wishlistImage from "../assets/wishlist.png"; // Add your image for wishlist

const Wishlist = () => {
  const wishlistItems = [
    // Sample items (replace with actual data from state or API)
    { id: 1, name: "Item 1", image: wishlistImage, price: "$20.00" },
    { id: 2, name: "Item 2", image: wishlistImage, price: "$15.00" },
    { id: 3, name: "Item 3", image: wishlistImage, price: "$25.00" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <Link
                to={`/product/${item.id}`}
                className="mt-4 text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
