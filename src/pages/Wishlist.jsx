import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter(
      (_, itemIndex) => itemIndex !== index
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Your Wishlist
      </h1>
      <div className="container mx-auto">
        {wishlist.length === 0 ? (
          <p className="text-xl text-center text-gray-500">
            Your wishlist is empty.{" "}
            <Link to="/" className="text-blue-500 underline">
              Continue Shopping
            </Link>
          </p>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4"
              >
                {/* Product Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Color: {item.selectedColor}
                    </p>
                    <p className="text-sm text-gray-500">
                      Size: {item.selectedSize}
                    </p>
                    <p className="text-lg font-semibold text-[#b3876f] mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(index)}
                  className="text-sm text-red-500 hover:text-red-700 mt-4 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="px-6 py-3 bg-[#b3876f] text-white rounded-lg shadow-md hover:bg-[#a2765b] transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
