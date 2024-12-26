// Header.jsx
import React from "react";
import Rectangle109 from "../assets/Rectangle 109.png";
import Rectangle111 from "../assets/Rectangle 111.png";
import Rectangle110 from "../assets/Rectangle110.png";
import home from "../assets/home.png";
import brand from "../assets/brand.png";
import clothing from "../assets/clothing.png";
import collection from "../assets/collection.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      
      <div className="bg-[#fdf4ee] flex flex-col items-center justify-center px-4 lg:flex-row lg:justify-between lg:px-20 py-8 lg:py-12">
        <div className="relative mt-4 lg:mt-0 flex items-center justify-center w-full max-w-md h-96 order-1 lg:order-2 z-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={Rectangle111}
              alt="Hero Main"
              className="absolute w-72 h-280 object-cover rounded-lg z-20 mt-62 sm:mt-64"
            />
            <img
              src={Rectangle109}
              alt="Hero Right"
              className="absolute w-42 h-[430px] object-cover z-30 mt-2 ml-0 sm:h-[460px] sm:mt-44 sm:ml-28"
            />
            <img
              src={Rectangle110}
              alt="Hero Left"
              className="absolute w-94 h-380 object-cover rounded-lg z-30 mt-7 md:mt-0"
            />
          </div>
        </div>

        <div className="max-w-lg text-center lg:text-left mt-10 lg:mt-0 order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug font-wilkysta">
            Elevate Style, <br /> Embrace Story
          </h2>
          <p className="mt-4 text-gray-600">
            We provide the largest clothing collection for any season. Choose
            trendy or classy designs with super-fast updates within 24 hours.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#b3876f] text-white rounded-md shadow hover:bg-[#9a6e5b]">
            Explore →
          </button>
        </div>
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
    </header>
  );
};

export default Header;
