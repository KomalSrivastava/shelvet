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
          "A stylish casual shirt perfect for work from home or casual outings. It's made from high-quality cotton and comes in multiple colors. This shirt offers a comfortable fit, ideal for both work and casual outings. Whether you're attending a meeting or relaxing with friends, this shirt is the perfect choice for any occasion. The fabric is soft and breathable, ensuring you stay comfortable all day long. Available in multiple sizes and colors.",
        colors: ["Red", "Blue", "Green"],
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "2",
        title: "Casual Pants",
        price: "$35",
        images: [Pista, DarkGreen, DarkBlue],
        description:
          "Comfortable pants for everyday wear. These pants are made with stretchy fabric, offering maximum comfort and flexibility. They come with an elastic waistband for an easy fit and are perfect for casual outings or lounging at home. Available in different colors to match your style.",
        colors: ["Black", "Gray", "Navy"],
        sizes: ["S", "M", "L", "XL"],
      },
    ],
    
    // Other categories here...
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

  // Feedback state
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);

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
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showPopup("Added to Cart!");
  };

  const handleAddToWishlist = () => {
    const item = { ...product, selectedColor, selectedSize };
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

  const handleReviewImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmitReview = () => {
    if (reviewText && rating > 0) {
      // Submit review logic (could be saved to local storage or sent to an API)
      console.log("Review Submitted:", { reviewText, rating, reviewImage });
      setReviewText("");
      setRating(0);
      setReviewImage(null);
      showPopup("Review submitted!");
    } else {
      showPopup("Please fill out all fields!");
    }
  };

  const openMoreDetails = () => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head><title>${product.title} - More Details</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>${product.title}</h1>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> ${product.description}</p>
          <p><a href="javascript:window.history.back();" style="color: #b3876f; text-decoration: none;">Go Back</a></p>
        </body>
      </html>
    `);
  };

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
          <button
            onClick={openMoreDetails}
            className="mt-4 text-[#b3876f] underline"
          >
            More
          </button>

          <div className="mt-4">
            <label className="block text-lg mb-2">Select Color:</label>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === color
                      ? "border-[#b3876f] ring-2 ring-[#b3876f]"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-lg mb-2">Select Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border-2 rounded-lg"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={decrementQuantity}
              className="bg-[#b3876f] text-white px-4 py-2 rounded-md"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-[#b3876f] text-white px-4 py-2 rounded-md"
            >
              +
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full p-3 bg-[#b3876f] text-white rounded-lg hover:bg-[#8f6d4b] transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="w-full mt-4 p-3 bg-gray-200 text-[#b3876f] rounded-lg hover:bg-gray-300 transition"
            >
              Add to Wishlist
            </button>

            {/* Go to Cart and Go to Wishlist Buttons */}
            <div className="mt-4 text-center">
              <Link to="/cart" className="text-[#b3876f]">
                Go to Cart
              </Link>{" "}
              |{" "}
              <Link to="/wishlist" className="text-[#b3876f]">
                Go to Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Write a Review</h2>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-4 mt-2 border-2 rounded-lg text-lg" // Increased padding and font size
          placeholder="Write your review here..."
          style={{ minHeight: "150px" }} // Increased height
        ></textarea>

        <div className="mt-4">
          <label className="block text-lg">Rating:</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-2 text-3xl ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`} // Increased font size
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-lg mb-2">Upload an Image:</label>
          <input
            type="file"
            onChange={handleReviewImageChange}
            className="w-full p-2 border-2 rounded-lg"
          />
        </div>

        <button
          onClick={handleSubmitReview}
          className="mt-4 w-full p-3 bg-[#b3876f] text-white rounded-lg hover:bg-[#8f6d4b] transition"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
