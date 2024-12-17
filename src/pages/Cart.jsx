import React from "react";
import { Link } from "react-router-dom";

// Sample cart items (replace this with actual cart data)
const cartItems = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$49.99",
    quantity: 2,
    image: "path/to/jacket.jpg",
  },
  {
    id: 2,
    name: "Leather Handbag",
    price: "$79.99",
    quantity: 1,
    image: "path/to/handbag.jpg",
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link to="/" className="text-[#b3876f]">
              Shop now
            </Link>
          </p>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b pb-6 mb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="ml-6">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-lg">{item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <button className="ml-auto text-red-500">Remove</button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                Total Price: ${totalPrice.toFixed(2)}
              </h3>
              <Link
                to="/checkout"
                className="bg-[#b3876f] text-white py-2 px-6 rounded-md hover:bg-[#9a6e5b]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
