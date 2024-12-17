import React from "react";

// Sample images (replace these paths with actual image URLs or imports)
import casualWear from "../assets/casual-wear.webp";
import ethnicWear from "../assets/casual-wear.webp";
import westernWear from "../assets/casual-wear.webp";
import sleepWear from "../assets/casual-wear.webp";
import activeWear from "../assets/casual-wear.webp";
import beautyMakeup from "../assets/casual-wear.webp";
import kidsWear from "../assets/casual-wear.webp";
import footwear from "../assets/casual-wear.webp";
import handbags from "../assets/casual-wear.webp";
import watches from "../assets/casual-wear.webp";
import jewellery from "../assets/casual-wear.webp";
import homeFurnishings from "../assets/casual-wear.webp";

const Collections = () => {
  const shopByCategory = [
    {
      img: casualWear,
      title: "WFH Casual Wear",
      discount: "40-80% OFF",
      link: "#",
    },
    {
      img: ethnicWear,
      title: "Ethnic Wear",
      discount: "50-70% OFF",
      link: "#",
    },
    {
      img: westernWear,
      title: "Western Wear",
      discount: "50-70% OFF",
      link: "#",
    },
    {
      img: sleepWear,
      title: "Innerwear & Sleepwear",
      discount: "UP TO 70% OFF",
      link: "#",
    },
    { img: activeWear, title: "Activewear", discount: "30-70% OFF", link: "#" },
    {
      img: beautyMakeup,
      title: "Beauty & Makeup",
      discount: "UP TO 80% OFF",
      link: "#",
    },
    { img: kidsWear, title: "Kids Wear", discount: "40-70% OFF", link: "#" },
    { img: footwear, title: "Footwear", discount: "40-80% OFF", link: "#" },
    {
      img: handbags,
      title: "Handbags & Bags",
      discount: "40-80% OFF",
      link: "#",
    },
    { img: watches, title: "Watches", discount: "UP TO 70% OFF", link: "#" },
    {
      img: jewellery,
      title: "Jewellery",
      discount: "UP TO 80% OFF",
      link: "#",
    },
    {
      img: homeFurnishings,
      title: "Home Furnishings",
      discount: "40-70% OFF",
      link: "#",
    },
  ];

  const topDeals = [
    {
      img: beautyMakeup,
      title: "Makeup Essentials",
      discount: "UP TO 50% OFF",
      link: "#",
    },
    {
      img: watches,
      title: "Luxury Watches",
      discount: "UP TO 60% OFF",
      link: "#",
    },
    {
      img: handbags,
      title: "Designer Bags",
      discount: "UP TO 70% OFF",
      link: "#",
    },
    {
      img: footwear,
      title: "Branded Footwear",
      discount: "40-70% OFF",
      link: "#",
    },
  ];

  const newArrivals = [
    {
      img: westernWear,
      title: "Spring Collection",
      discount: "NEW ARRIVALS",
      link: "#",
    },
    {
      img: ethnicWear,
      title: "Festive Collection",
      discount: "JUST IN",
      link: "#",
    },
    {
      img: kidsWear,
      title: "Kids' New Arrivals",
      discount: "UP TO 30% OFF",
      link: "#",
    },
    { img: activeWear, title: "Gym Wear", discount: "NEW IN", link: "#" },
  ];

  return (
    <div className="py-10 px-4 bg-[#fdf4ee] ">
      {/* SHOP BY CATEGORY SECTION */}
      <h1 className="text-4xl font-bold text-center mb-8">
        SHOP BY <span className="text-[#b3876f]">CATEGORY</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {shopByCategory.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }} // Ensures image space even without image
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </a>
        ))}
      </div>

      {/* TOP DEALS SECTION */}
      <h1 className="text-4xl font-bold text-center mb-8">
        TOP <span className="text-[#b3876f]">DEALS</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {topDeals.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }} // Ensures image space even without image
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </a>
        ))}
      </div>

      {/* NEW ARRIVALS SECTION */}
      <h1 className="text-4xl font-bold text-center mb-8">
        NEW <span className="text-[#b3876f]">ARRIVALS</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="block text-center shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              className="w-full h-56 object-cover mb-4"
              style={{ minHeight: "200px" }} // Ensures image space even without image
            />
            <p className="font-medium">{item.title}</p>
            <h3 className="font-bold text-lg text-[#9a6e5b] mb-2">
              {item.discount}
            </h3>
            <p className="text-[#b3876f] font-semibold mb-4">Shop Now</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Collections;
