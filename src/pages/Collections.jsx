import React from "react";
import { Link } from "react-router-dom";
import casualWear from "../assets/casual-wear.webp";
import ethnicWear from "../assets/casual-wear.webp";
import westernWear from "../assets/casual-wear.webp";
import sleepWear from "../assets/casual-wear.webp";
import home from "../assets/home.png";
import collection from "../assets/collection.png";
import brand from "../assets/brand.png";
import clothing from "../assets/clothing.png";

const shopByCategory = [
  {
    img: casualWear,
    title: "WFH Casual Wear",
    discount: "40-80% OFF",
    link: "/casual-wear",
  },
  {
    img: ethnicWear,
    title: "Ethnic Wear",
    discount: "50-70% OFF",
    link: "/ethnic-wear",
  },
  {
    img: westernWear,
    title: "Western Wear",
    discount: "50-70% OFF",
    link: "/western-wear",
  },
  {
    img: sleepWear,
    title: "Innerwear & Sleepwear",
    discount: "UP TO 70% OFF",
    link: "/sleep-wear",
  },
];

const topDeals = [
  {
    img: casualWear,
    title: "Stylish Casuals",
    discount: "40-80% OFF",
    link: "/casual-wear",
  },
  {
    img: ethnicWear,
    title: "Trending Ethnic Wear",
    discount: "50-70% OFF",
    link: "/ethnic-wear",
  },
  {
    img: westernWear,
    title: "Modern Western Wear",
    discount: "UP TO 50% OFF",
    link: "/western-wear",
  },
  {
    img: sleepWear,
    title: "Comfortable Sleepwear",
    discount: "UP TO 70% OFF",
    link: "/sleep-wear",
  },
];

const newArrivals = [
  {
    img: casualWear,
    title: "Latest Casual Wear",
    discount: "NEW ARRIVAL",
    link: "/casual-wear",
  },
  {
    img: ethnicWear,
    title: "New Ethnic Collection",
    discount: "NEW ARRIVAL",
    link: "/ethnic-wear",
  },
  {
    img: westernWear,
    title: "Trendy Western Styles",
    discount: "NEW ARRIVAL",
    link: "/western-wear",
  },
  {
    img: sleepWear,
    title: "Soft & Cozy Sleepwear",
    discount: "NEW ARRIVAL",
    link: "/sleep-wear",
  },
];

const Collections = () => {
  return (
    <div className="py-10 px-4 bg-[#fdf4ee]">
      <h1 className="text-4xl font-bold text-center mb-8">
        SHOP BY <span className="text-[#b3876f]">CATEGORY</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {shopByCategory.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }}
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </Link>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        TOP <span className="text-[#b3876f]">DEALS</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {topDeals.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }}
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </Link>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        NEW <span className="text-[#b3876f]">ARRIVALS</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }}
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </Link>
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
            <Link key={label} to={path} className="text-center">
              <img src={img} alt={label} className="w-6 mx-auto" />
              <p className="text-xs">{label}</p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Collections;
