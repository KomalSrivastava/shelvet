import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/home.png";
import collection from "../assets/collection.png";
import brand from "../assets/brand.png";
import clothing from "../assets/clothing.png";

const brandsData = [
  {
    name: "Zara",
    description: "Trendy fashion for the modern woman.",
    image: new URL("../assets/zara.webp", import.meta.url).href,
    link: "/brand/zara",
  },
  {
    name: "H&M",
    description: "Affordable and stylish women's clothing.",
    image: new URL("../assets/h&m.webp", import.meta.url).href,
    link: "/brand/hm",
  },
  {
    name: "Forever 21",
    description: "Young and stylish fashion for all women.",
    image: new URL("../assets/forever21.webp", import.meta.url).href,
    link: "/brand/forever21",
  },
  {
    name: "Mango",
    description: "Chic fashion inspired by Mediterranean lifestyle.",
    image: new URL("../assets/mango.webp", import.meta.url).href,
    link: "/brand/mango",
  },
  {
    name: "ASOS",
    description: "Wide variety of trendy styles for every woman.",
    image: new URL("../assets/asos.webp", import.meta.url).href,
    link: "/brand/asos",
  },
  {
    name: "Uniqlo",
    description: "Simple, comfortable, and well-made clothes.",
    image: new URL("../assets/uniqlo.webp", import.meta.url).href,
    link: "/brand/uniqlo",
  },
];

const Brands = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Top Women's Clothing Brands
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brandsData.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {brand.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{brand.description}</p>
              <a
                href={brand.link}
                className="block text-[#b3876f] mt-4 text-center"
              >
                Explore {brand.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md lg:hidden z-40">
        <nav className="flex justify-around py-3">
          {[
            { img: home, label: "Home", path: "/" },
            { img: collection, label: "Collections", path: "/collections" },
            { img: brand, label: "Brands", path: "/brands" },
            { img: clothing, label: "About Us", path: "/aboutus" },
          ].map(({ img, label, path }) => (
            <Link to={path} key={label} className="flex flex-col items-center">
              <button className="flex flex-col items-center text-gray-700 hover:bg-[#b3876f] hover:rounded-lg p-2">
                <img src={img} alt={label} className="w-6 h-6 mb-1" />
                <span className="text-xs">{label}</span>
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Brands;
