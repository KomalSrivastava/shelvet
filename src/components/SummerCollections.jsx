import React from "react";
import Rectangle14 from "../assets/Rectangle 14.png";
import Rectangle15 from "../assets/Rectangle 15.png";
import Rectangle13 from "../assets/Rectangle 13.png";

const SummerCollections = () => {
  return (
    <section className="bg-[#fdf4ee] px-6 py-12 md:px-20 md:py-20">
      
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-wilkysta font-semibold text-gray-800 underline">
          Summer <span className="text-[#b3876f]">Collections</span>
        </h2>
        <p className="text-gray-600 mt-2 font-PlayfairDisplay">
          We consider your look and comfort on scorching weather.
        </p>
      </div>

      
      <div className="mt-10 flex flex-col md:flex-row gap-8 items-center font-wilkysta">
       
        <div className="flex-1 w-full md:w-auto">
          <img
            src={Rectangle14}
            alt="Summer Collection"
            className="rounded-2xl shadow-lg w-full max-w-xs md:w-[60%] h-auto object-cover mx-auto"
          />
        </div>

        
        <div className="flex-1 flex flex-col gap-6 font-PlayfairDisplay text-center md:text-left">
          <p className="text-gray-600 px-4 md:px-0">
            We provide the largest clothing collection for any season. You can
            choose trendy or classy design according to your preferences. Our
            services are super fast and we update within 24 hours.
          </p>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
            
            <img
              src={Rectangle15}
              alt="Summer Look"
              className="rounded-3xl object-cover h-56 w-full max-w-xs mx-auto"
            />
            
            <img
              src={Rectangle13}
              alt="Summer Look"
              className="rounded-3xl object-cover h-56 w-full max-w-xs mx-auto"
            />
          </div>
          <p className="text-gray-600 px-4 md:px-0">
            Our main aim is to serve our customers with better quality products.
            We try to understand their needs and provide them within a short
            period of time.
          </p>
          
          <div className="mt-4">
            <button className="flex items-center justify-center px-6 py-3 bg-[#b3876f] text-white text-lg rounded-lg shadow hover:bg-[#9a6e5b] transition mx-auto md:mx-0">
              Explore
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCollections;
