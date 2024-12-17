import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bag from "../assets/Bag.png";
import BookmarkIcon from "../assets/Bookmark.png"; 
import brand from "../assets/brand.png";
import clothing from "../assets/clothing.png";
import collection from "../assets/collection.png";
import wishlist from "../assets/wishlist.png";
import profile from "../assets/profile.png";
import notification from "../assets/notification.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#fdf4ee] text-gray-800 font-PlayfairDisplay relative">
      <div className="flex justify-between items-center px-4 lg:px-16 py-4">
        <h1 className="text-xl lg:text-2xl font-bold">Sehlvet</h1>
        <ul className="hidden lg:flex space-x-6 font-medium">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/collections" className="text-[#9a6e5b] hover:underline">
              Women's Collection
            </Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/brands">Brands</Link> 
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <div className="flex space-x-4 ml-28">
          <button>
            <img src={Bag} alt="Bag" className="w-5 lg:w-6 h-5 lg:h-6" />
          </button>

          
          <Link to="/bookmark">
            <button className="focus:outline-none">
              <img
                src={BookmarkIcon}
                alt="Bookmark"
                className="w-5 lg:w-6 h-5 lg:h-6"
              />
            </button>
          </Link>

          
          <div className="relative">
            <button onClick={toggleDropdown}>
              <img
                src={profile}
                alt="Profile"
                className="w-5 lg:w-6 h-5 lg:h-6 cursor-pointer"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                <div className="px-4 py-2 text-sm text-gray-600">
                  <p className="font-semibold">Welcome</p>
                  <p className="text-gray-400">
                    To access account and manage orders
                  </p>
                </div>
                <ul className="space-y-2 px-4">
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Login / Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/giftcards"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Gift Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="lg:hidden text-gray-800" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#fdf4ee] shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={clothing} alt="Home" className="w-6 h-6" />
            <Link to="/" className="text-lg">
              Home
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={collection} alt="Collections" className="w-6 h-6" />
            <Link to="/collections" className="text-lg">
              Collections
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={brand} alt="Brands" className="w-6 h-6" />
            <Link to="/brands" className="text-lg">
              {" "}
              
              Brands
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={wishlist} alt="Wishlist" className="w-6 h-6" />
            <Link to="/wishlist" className="text-lg">
              Wishlist
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={notification} alt="Notification" className="w-6 h-6" />
            <Link to="/notification" className="text-lg">
              Notifications
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={profile} alt="Profile" className="w-6 h-6" />
            <Link to="/profile" className="text-lg">
              Profile
            </Link>
          </li>
          <li className="text-lg hover:bg-[#b3876f] hover:rounded-lg p-2 flex items-center space-x-3">
            <img src={Bag} alt="About Us" className="w-6 h-6" />
            <Link to="/aboutus" className="text-lg">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
