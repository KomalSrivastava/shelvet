import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, itemIndex) => itemIndex !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Your Cart
      </h1>
      <div className="container mx-auto">
        {cart.length === 0 ? (
          <p className="text-xl text-center text-gray-500">
            Your cart is empty.{" "}
            <Link to="/" className="text-blue-500 underline">
              Continue Shopping
            </Link>
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
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

                {/* Quantity Controls */}
                <div className="flex items-center mt-4 sm:mt-0 space-x-2">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    disabled={item.quantity === 1}
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-lg font-bold ${
                      item.quantity === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    -
                  </button>
                  <p className="w-10 text-center text-lg font-semibold">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="w-10 h-10 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-lg font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm text-red-500 hover:text-red-700 mt-4 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-8 text-center">
          <Link
            to="/checkout"
            className="px-6 py-3 bg-[#b3876f] text-white rounded-lg shadow-md hover:bg-[#a2765b] transition duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
