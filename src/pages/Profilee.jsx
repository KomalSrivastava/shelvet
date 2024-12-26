import React, { useState } from "react";
import profileImage from "../assets/profile.png";


const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b-2 border-gray-200">
      <button
        className={`w-full text-left p-4 flex items-center justify-between ${
          isOpen ? "bg-[#f4f4f4]" : "bg-white"
        } hover:bg-[#f4f4f4] transition-colors duration-300 ease-in-out`}
        onClick={onToggle}
      >
        <span className="font-semibold text-lg text-gray-800">{question}</span>
        <span className="text-xl text-gray-500">{isOpen ? "<" : ">"}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What happens when I update my email address (or mobile number)?",
      answer:
        "Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).",
    },
    {
      question:
        "When will my Sehlvet account be updated with the new email address (or mobile number)?",
      answer:
        "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
    },
    {
      question:
        "What happens to my existing Flipkart account when I update my email address (or mobile number)?",
      answer:
        "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your order history, saved information, and personal details.",
    },
    {
      question:
        "Does my Seller account get affected when I update my email address?",
      answer:
        "Sehlvet has a 'single sign-on' policy. Any changes will reflect in your Seller account also.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};


const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileImage); // State for profile photo

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setProfilePhoto(profileImage); 
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 px-4">
      
      <aside className="w-full lg:w-72 bg-white shadow-lg rounded-lg p-6 mt-8 lg:mx-4 sm:mx-auto">
        <div className="flex items-center mb-8">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-[#b3876f] object-cover"
          />
          <div className="ml-4">
            <p className="text-xl font-semibold text-gray-800">Sehlvet,</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              readOnly={!isEditing}
              className="mt-1 p-1 font-medium text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#b3876f]"
            />
          </div>
        </div>
       
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#my-orders"
                className="flex items-center text-gray-700 hover:bg-[#b3876f] p-2 rounded-md"
              >
                <span className="font-medium">My Orders</span>
              </a>
            </li>
            <li>
              <p className="text-gray-600 font-semibold mt-4">
                Account Settings
              </p>
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="#profile-info"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    Profile Information
                  </a>
                </li>
                <li>
                  <a
                    href="#manage-addresses"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    Manage Addresses
                  </a>
                </li>
                <li>
                  <a
                    href="#pan-card"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    PAN Card Information
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-gray-600 font-semibold mt-4">Payments</p>
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="#gift-cards"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#saved-upi"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    Saved UPI
                  </a>
                </li>
                <li>
                  <a
                    href="#saved-cards"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    Saved Cards
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-gray-600 font-semibold mt-4">My Stuff</p>
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="#my-coupons"
                    className="text-gray-600 hover:text-[#b3876f]"
                  >
                    My Coupons
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      
      <main className="flex-1 bg-white p-8 shadow-lg rounded-lg mt-8 mx-auto lg:mx-4">
        
        <section>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Personal Information
            </h1>
            <button
              onClick={handleEdit}
              className="text-[#b3876f] hover:underline font-medium"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  readOnly={!isEditing}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-100 focus:outline-none focus:border-[#b3876f]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  readOnly={!isEditing}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-100 focus:outline-none focus:border-[#b3876f]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                readOnly={!isEditing}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 focus:outline-none focus:border-[#b3876f]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
                readOnly={!isEditing}
                className="w-full mt-2 p-3 border rounded-md bg-gray-100 focus:outline-none focus:border-[#b3876f]"
              />
            </div>

            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Photo
              </label>
              <div className="flex items-center mt-2">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-[#b3876f] object-cover"
                />
                <div className="ml-4">
                  <button
                    onClick={() =>
                      document.getElementById("profile-photo-upload").click()
                    }
                    className="text-[#b3876f] hover:underline font-medium"
                  >
                    Add Profile Photo
                  </button>
                  {profilePhoto !== profileImage && (
                    <button
                      onClick={handleDeletePhoto}
                      className="text-red-600 hover:underline font-medium ml-4"
                    >
                      Delete Photo
                    </button>
                  )}
                  <input
                    type="file"
                    id="profile-photo-upload"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Account Management
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <button className="w-full md:w-auto bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-500 focus:outline-none">
              Delete Account
            </button>
            <button className="w-full md:w-auto bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-500 focus:outline-none">
              Deactivate Account
            </button>
          </div>
        </section>

        
        <FAQs />
      </main>
    </div>
  );
};

export default ProfilePage;
