import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8A6552] text-white py-8 px-4 font-PlayfairDisplay mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">Sehlvet</h2>
          <p className="text-sm mt-2">2023 Sehlvet. All Rights Reserved</p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl hover:text-gray-300"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-xl hover:text-gray-300"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl hover:text-gray-300"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl hover:text-gray-300"></i>
            </a>
          </div>
        </div>

        
        <div className="text-center sm:text-left">
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Collections
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Brands
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
          </ul>
        </div>

        
        <div className="text-center sm:text-right">
          <h3 className="font-semibold">Contact Us</h3>
          <p className="mt-2 text-sm">555-123-4444</p>
          <p className="text-sm">sehlvet@gmail.com</p>
          <p className="text-sm">www.sehlvet.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
