import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams(); // Get product ID from the URL

  // Sample product data (replace this with actual API data)
  const product = {
    id: productId,
    name: "Classic Denim Jacket",
    image: "path/to/jacket.jpg",
    description: "A stylish classic denim jacket with a modern fit.",
    price: "$49.99",
    discount: "30% OFF",
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["Blue", "Black", "White"],
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover"
          />
          <div className="ml-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-500">{product.discount}</p>
            <p className="text-lg font-semibold text-blue-600">
              {product.price}
            </p>
            <p className="mt-4">{product.description}</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium">Available Sizes:</h3>
              <ul className="flex gap-4 mt-2">
                {product.availableSizes.map((size, index) => (
                  <li
                    key={index}
                    className="border px-4 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
                  >
                    {size}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-medium mt-6">Available Colors:</h3>
              <div className="flex gap-4 mt-2">
                {product.availableColors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${color.toLowerCase()} border cursor-pointer`}
                  />
                ))}
              </div>
            </div>

            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
