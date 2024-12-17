import React from "react";

// Example brand data for Women’s Clothing
const brandsData = [
  {
    name: "Zara",
    description: "Trendy fashion for the modern woman.",
    image: "/images/zara.jpg", // Make sure the image is placed in the public/images folder
    link: "/brand/zara",
  },
  {
    name: "H&M",
    description: "Affordable and stylish women's clothing.",
    image: "/images/h&m.jpg", // Image path relative to the public folder
    link: "/brand/h&m",
  },
  {
    name: "Forever 21",
    description: "Young and stylish fashion for all women.",
    image: "/images/forever21.jpg", // Image path relative to the public folder
    link: "/brand/forever21",
  },
  {
    name: "Mango",
    description: "Chic fashion inspired by Mediterranean lifestyle.",
    image: "/images/mango.jpg", // Image path relative to the public folder
    link: "/brand/mango",
  },
  {
    name: "ASOS",
    description: "Wide variety of trendy styles for every woman.",
    image: "/images/asos.jpg", // Image path relative to the public folder
    link: "/brand/asos",
  },
  {
    name: "Uniqlo",
    description: "Simple, comfortable, and well-made clothes.",
    image: "/images/uniqlo.jpg", // Image path relative to the public folder
    link: "/brand/uniqlo",
  },
];

const Brands = () => {
  return (
    <div className="container mx-auto py-10">
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
    </div>
  );
};

export default Brands;
