import React from "react";
import { Link } from "react-router-dom";
import casualWearImage from "../assets/casual-wear.webp"; // Image imported

const CasualWearPage = () => {
  const products = [
    {
      id: 1,
      name: "Stylish Casual Shirt", // Updated name
      price: "$30",
      img: casualWearImage, // Using imported image
    },
    {
      id: 2,
      name: "Casual Pants", // Updated name
      price: "$35",
      img: casualWearImage, // Using imported image
    },
  ];

  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Casual Wear</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-md border border-gray-200 p-4"
          >
            <Link to={`/casual-wear/${product.id}`}>
              <img
                src={product.img} // Using imported image here
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-[#b3876f] font-medium">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasualWearPage;
