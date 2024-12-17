import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrendingCollections from "./components/TrendingCollections";
import SummerCollections from "./components/SummerCollections";
import WinterCollections from "./components/WinterCollections";
import WhatOurCustomersSay from "./components/WhatOurCustomersSay";

// Import Pages
import Home from "./pages/Home";
import Brands from "./pages/Brands"; // Ensure correct import for Brands
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs"; // Ensure correct import for AboutUs
import NotificationPage from "./pages/NotificationPage";
import Profilee from "./pages/Profilee";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bookmark from "./pages/Bookmark";

const App = () => {
  return (
    <Router>
      <div className="font-wilkysta">
        {/* Navbar should be present on all pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <TrendingCollections />
                <SummerCollections />
                <WinterCollections />
                <WhatOurCustomersSay />
              </>
            }
          />
          <Route path="/collections" element={<Collections />} />
          <Route path="/brands" element={<Brands />} />{" "}
          {/* Updated to /brands */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/profile" element={<Profilee />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>

        {/* Footer should be present on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
