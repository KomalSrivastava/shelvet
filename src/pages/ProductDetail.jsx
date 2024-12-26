import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pista from "../assets/pista.webp";
import DarkGreen from "../assets/darkgreen.webp";
import DarkBlue from "../assets/Darkblue.webp";

const ProductDetail = () => {
  const products = {
    "casual-wear": [
      {
        id: "1",
        title: "Stylish Casual Shirt",
        price: "$30",
        images: [Pista, DarkGreen, DarkBlue],
        description:
          "A stylish casual shirt perfect for work from home or casual outings.",
        colors: ["Red", "Blue", "Green"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "2",
        title: "Casual Pants",
        price: "$35",
        images: [Pista, DarkGreen, DarkBlue],
        description: "Comfortable pants for everyday wear.",
        colors: ["Black", "Gray", "Navy"],
        sizes: ["S", "M", "L", "XL"],
      },
    ],
    "ethnic-wear": [
      {
        id: "1",
        title: "Traditional Kurta",
        price: "$40",
        images: [Pista, DarkGreen, DarkBlue],
        description: "A traditional kurta perfect for festivals and weddings.",
        colors: ["White", "Red", "Blue"],
        sizes: ["M", "L", "XL"],
      },
      {
        id: "2",
        title: "Ethnic Pants",
        price: "$45",
        images: [Pista, DarkGreen, DarkBlue],
        description: "Stylish ethnic pants for formal occasions.",
        colors: ["Black", "Beige", "Maroon"],
        sizes: ["S", "M", "L"],
      },
    ],
    "western-wear": [
      {
        id: "1",
        title: "Western Blazer",
        price: "$50",
        images: [Pista, DarkGreen, DarkBlue],
        description: "A stylish Western Blazer perfect for formal events.",
        colors: ["Black", "Navy", "Gray"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "2",
        title: "Western Jeans",
        price: "$45",
        images: [Pista, DarkGreen, DarkBlue],
        description: "Comfortable Western jeans suitable for casual outings.",
        colors: ["Blue", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
      },
    ],
    "sleep-wear": [
      {
        id: "1",
        title: "Cozy Pajama Set",
        price: "$25",
        images: [Pista, DarkGreen, DarkBlue],
        description: "A soft and cozy pajama set for a good night's sleep.",
        colors: ["Pink", "Blue", "Gray"],
        sizes: ["S", "M", "L"],
      },
      {
        id: "2",
        title: "Sleep Shorts",
        price: "$20",
        images: [Pista, DarkGreen, DarkBlue],
        description: "Lightweight sleep shorts for a comfortable night.",
        colors: ["White", "Black", "Red"],
        sizes: ["S", "M", "L"],
      },
    ],
  };

  const { category, id } = useParams();
  const product = products[category]?.find((prod) => prod.id === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); 

  
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 4000);
  };

  const handleAddToCart = () => {
    const item = { ...product, selectedColor, selectedSize, quantity };
    console.log("Adding to cart:", item); 
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    showPopup("Added to Cart!");
  };

  const handleAddToWishlist = () => {
    const item = { ...product, selectedColor, selectedSize };
    console.log("Adding to wishlist:", item); 
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); 
    showPopup("Added to Wishlist!");
  };

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  
  useEffect(() => {
    if (isNaN(quantity)) {
      setQuantity(1); 
    }
  }, [quantity]);

  return (
    <div className="container py-10 px-4">
      {popupVisible && (
        <div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#b3876f] text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-500 opacity-100"
          style={{
            animation:
              "fadeIn 0.5s ease-out, fadeOut 0.5s ease-out 3.5s forwards",
          }}
        >
          <div className="flex justify-between items-center">
            <span>{popupMessage}</span>
            <button
              onClick={() => setPopupVisible(false)}
              className="text-white ml-4 focus:outline-none"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-8">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <div className="relative mb-4">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              onClick={handlePreviousImage}
            >
              <FaChevronLeft />
            </button>
            <img
              src={product.images[selectedImageIndex]}
              alt={`${product.title} main`}
              className="w-full h-[500px] object-contain"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              onClick={handleNextImage}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex gap-4 mt-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer border-2 transition duration-300 ${
                  selectedImageIndex === index
                    ? "border-[#b3876f]"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <p className="text-xl text-[#b3876f] font-semibold">
            {product.price}
          </p>
          <p className="mt-4 text-lg">{product.description}</p>

          <div className="mt-4">
            <label className="block text-lg mb-2">Select Color:</label>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === color
                      ? "border-[#b3876f] scale-110 shadow-md"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "Red"
                        ? "#FF0000"
                        : color === "Blue"
                        ? "#0000FF"
                        : color === "Green"
                        ? "#008000"
                        : "gray",
                  }}
                >
                  <span className="sr-only">{color}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-lg">Select Size:</label>
            <div className="flex gap-4 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-lg ${
                    selectedSize === size
                      ? "bg-[#b3876f] text-white"
                      : "bg-white text-[#b3876f]"
                  } hover:bg-[#a2765b] transition duration-300`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-gray-200 rounded-full text-xl"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-gray-200 rounded-full text-xl"
            >
              +
            </button>
          </div>

          <div className="flex mt-6 gap-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-[#b3876f] text-white rounded-lg shadow-md hover:bg-[#a2765b] transition duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="px-6 py-3 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
            >
              Add to Wishlist
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/cart" className="text-blue-500 hover:underline">
              Go to Cart ({cart.length})
            </Link>{" "}
            |{" "}
            <Link to="/wishlist" className="text-blue-500 hover:underline">
              Go to Wishlist ({wishlist.length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
