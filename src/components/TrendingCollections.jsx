import React from "react";
import Maskgroup from "../assets/Mask group.png";
import Maskgroup1 from "../assets/Mask group1.png";
import Maskgroup2 from "../assets/Mask group2.png";
import BagIcon from "../assets/Bag.png";
import BookmarkIcon from "../assets/Bookmark.png";

const TrendingCollections = () => {
  const products = [
    {
      title: "Formal Shirt For Woman",
      price: "$25.38",
      originalPrice: null,
      img: Maskgroup,
    },
    {
      title: "Black and Gray Exercise Outfit",
      price: "$08.50",
      originalPrice: "$12.28",
      img: Maskgroup1,
    },
    {
      title: "Yellow Jacket For Winter",
      price: "$14.55",
      originalPrice: null,
      img: Maskgroup2,
    },
  ];

  return (
    <section className="bg-[#fbf4ee] px-8 py-16 md:px-16 lg:px-24 mt-[-80px] sm:mt-0">
      
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-wilkysta font-semibold text-gray-800 underline">
          Trending <span className="text-[#b3876f]">Collections</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg md:text-xl font-PlayfairDisplay">
          Have a look at what's trending now!
        </p>
      </div>

      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-white border-[1px] border-[#8B5E3C] rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col justify-between max-w-[90%] mx-auto font-wilkysta ${
              index === 1 ? "h-[400px]" : "h-[320px]"
            }`}
          >
            <img
              src={product.img}
              alt={product.title}
              className={`w-full ${
                index === 1 ? "h-[250px]" : "h-[200px]"
              } object-contain rounded-lg`}
            />
            <div className="mt-4 flex flex-col justify-between h-full">
              <h3 className="text-lg md:text-xl font-serif font-medium text-gray-800">
                {product.title}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-[#b3876f] font-bold text-lg">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-gray-400">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <img
                      src={BookmarkIcon}
                      alt="Bookmark"
                      className="w-5 h-5"
                    />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <img src={BagIcon} alt="Bag" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-12 flex justify-center md:justify-end">
        <button className="flex items-center font-PlayfairDisplay justify-center px-6 py-3 bg-[#b3876f] text-white text-lg rounded-lg shadow hover:bg-[#9a6e5b] transition">
          View All
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default TrendingCollections;
