import React, { useState } from "react";
import Rectangle23 from "../assets/Rectangle 23.png";
import Group from "../assets/Group.png"; 
import Rectangle14 from "../assets/Rectangle 14.png";

const WhatOurCustomersSay = () => {
  const images = [
    {
      img: Rectangle23,
      text: "Ladiesville provided me the exact quality product I wanted. I'm very much satisfied with their quick delivery process. They delivered my dress within a day.",
      name: "Jane Bennet",
      role: "Fashion Model",
    },
    {
      img: Rectangle14,
      text: "I love the quality of the shoes I purchased. They fit perfectly, and I get so many compliments!",
      name: "Lucy Stevens",
      role: "Content Creator",
    },
    {
      img: Rectangle23,
      text: "Fast and efficient! I ordered a jacket, and it arrived exactly when promised. Great service.",
      name: "Emily Clarke",
      role: "Entrepreneur",
    },
    {
      img: Rectangle14,
      text: "The shopping experience was seamless, and the customer support was outstanding. Definitely shopping here again.",
      name: "Olivia Brown",
      role: "Graphic Designer",
    },
    {
      img: Rectangle14,
      text: "I’m in love with my new dress! The fabric is high-quality, and the fit is just perfect.",
      name: "Sophia Lee",
      role: "Photographer",
    },
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); 

  const handlePrev = () => {
    setFade(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false); 
    }, 300); 
  };

  const handleNext = () => {
    setFade(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false); 
    }, 300); 
  };

  return (
    <section className="bg-[#FAF6F1] py-16 px-8 font-wilkysta">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 underline">
          What our <span className="text-[#8A6552]">Customer says</span>
        </h2>

        
        <p className="text-gray-600 mb-10 font-PlayfairDisplay text-sm sm:text-base">
          We value our customers' feedback to provide the best service.
        </p>

        
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 font-PlayfairDisplay relative overflow-hidden">
          <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-4 relative z-10">
            
            <div
              className={`relative w-full sm:w-[350px] h-[300px] sm:h-[350px] transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={images[currentIndex].img}
                alt={`Customer ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg"
              />
            </div>

            <div className="mb-4 md:mt-[-100px] sm:mt-[-150px] sm:mb-10">
              <img
                src={Group}
                alt="Customer Group"
                className="w-[40px] h-[35px] sm:w-[60px] sm:h-[55px] md:w-[130px] md:h-[110px] mx-auto md:mx-0 sm:-ml-10 rounded-md z-10"
              />
            </div>

            <div className="text-center md:text-left">
              <blockquote className="text-gray-700 italic mb-2 text-sm sm:text-base">
                "{images[currentIndex].text}"
              </blockquote>
              <p className="font-bold text-[#8A6552]">
                {images[currentIndex].name}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {images[currentIndex].role}
              </p>
            </div>
          </div>

          
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 z-10">
            <button
              className="bg-gray-200 w-10 h-10 mx-2 hover:bg-[#8A6552] hover:text-white transition"
              onClick={handlePrev}
            >
              {"<"}
            </button>
            <button
              className="bg-gray-200 w-10 h-10 mx-2 hover:bg-[#8A6552] hover:text-white transition"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomersSay;
