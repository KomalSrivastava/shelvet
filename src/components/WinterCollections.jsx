import React from "react";
import Rectangle20 from "../assets/Rectangle 20.png";
import Rectangle18 from "../assets/Rectangle 18.png";

const WinterCollections = () => {
  return (
    <section className="bg-[#FAF6F1] py-16 px-8">
      <div className="max-w-7xl mx-auto text-center md:text-right font-wilkysta">
        
        <h2 className="text-4xl font-bold mb-4 underline">
          Winter <span className="text-[#8A6552]">Collections</span>
        </h2>

        
        <p className="text-gray-600 mb-10 font-PlayfairDisplay">
          We consider your look and comfort on cold weather.
        </p>

        
        <div className="flex flex-col md:flex-row font-PlayfairDisplay gap-8 items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6 relative top-[-40px]">
              We provide the largest clothing collection for any season. You can
              choose trendy or classy designs according to your preferences. Our
              services are super fast, and we update within 24 hours.
            </p>

            <img
              src={Rectangle20}
              alt="Winter Collection"
              className="rounded-md shadow-lg relative w-full md:w-auto top-32 hidden sm:block" 
            />
          </div>

          <div className="md:w-1/2 mt-20 flex items-center gap-8">
            <img
              src={Rectangle18}
              alt="Winter Fashion"
              className="rounded-md shadow-lg mb-6 md:mb-0 h-90 md:h-auto -ml-96 w-full md:w-auto hidden sm:block" 
            />

            <div className="block sm:hidden mt-[-100px]">
              {" "}
              
              <button className="px-6 py-2 font-PlayfairDisplay border border-[#8A6552] text-[#8A6552] rounded-lg hover:bg-[#8A6552] hover:text-white">
                Explore →
              </button>
              <p className="text-gray-700 mt-4">
                Our main aim is to serve our customers with better quality
                products. We try to understand their needs and provide them
                within a short period. Our services are super fast, and we
                update within 24 hours.
              </p>
            </div>

            
            <div className="hidden sm:block">
              <button className="mt-6 px-6 py-2 font-PlayfairDisplay border border-[#8A6552] text-[#8A6552] rounded-lg hover:bg-[#8A6552] hover:text-white transition">
                Explore →
              </button>
              <p className="text-gray-700 mt-4">
                Our main aim is to serve our customers with better quality
                products. We try to understand their needs and provide them
                within a short period. Our services are super fast, and we
                update within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollections;
