import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  // Sample cart data
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Saved address from localStorage
  const savedAddress = JSON.parse(localStorage.getItem("savedAddress"));

  // Shipping details state
  const [shippingDetails, setShippingDetails] = useState(
    savedAddress || {
      name: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    }
  );

  // Use saved address or new address
  const [useSavedAddress, setUseSavedAddress] = useState(
    savedAddress ? true : false
  );

  // Flag to check if the user has entered a new address that differs from the saved one
  const [isAddressDifferent, setIsAddressDifferent] = useState(false);

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Calculate total price
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  // Handle change in shipping details
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle use of saved address
  const handleUseSavedAddressChange = () => {
    setUseSavedAddress(!useSavedAddress);
    if (!useSavedAddress) {
      localStorage.setItem("savedAddress", JSON.stringify(shippingDetails));
    }
  };

  // Check if the entered address differs from the saved address
  useEffect(() => {
    if (savedAddress) {
      const isDifferent =
        shippingDetails.name !== savedAddress.name ||
        shippingDetails.address !== savedAddress.address ||
        shippingDetails.city !== savedAddress.city ||
        shippingDetails.postalCode !== savedAddress.postalCode ||
        shippingDetails.phone !== savedAddress.phone;
      setIsAddressDifferent(isDifferent);
    }
  }, [shippingDetails, savedAddress]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!useSavedAddress || isAddressDifferent) {
      localStorage.setItem("savedAddress", JSON.stringify(shippingDetails));
    }
    alert("Order placed successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-[#3d3d3d]">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Shipping and Payment Form */}
          <div className="lg:w-2/3 bg-white shadow-xl rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-[#3d3d3d]">
              Shipping Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Use Saved Address */}
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={useSavedAddress}
                  onChange={handleUseSavedAddressChange}
                  className="form-checkbox"
                />
                <label className="text-lg">Use saved address</label>
              </div>

              {/* Saved Address Details */}
              {useSavedAddress && savedAddress && (
                <div className="mt-4">
                  <p>
                    <strong>Name:</strong> {savedAddress.name}
                  </p>
                  <p>
                    <strong>Address:</strong> {savedAddress.address}
                  </p>
                  <p>
                    <strong>City:</strong> {savedAddress.city}
                  </p>
                  <p>
                    <strong>Postal Code:</strong> {savedAddress.postalCode}
                  </p>
                  <p>
                    <strong>Phone:</strong> {savedAddress.phone}
                  </p>
                </div>
              )}

              {/* Address fields */}
              {!useSavedAddress && (
                <>
                  <div>
                    <label className="block text-lg">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={shippingDetails.name}
                      onChange={handleShippingChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3876f]"
                    />
                  </div>
                  <div>
                    <label className="block text-lg">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={shippingDetails.address}
                      onChange={handleShippingChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3876f]"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-lg">City</label>
                      <input
                        type="text"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleShippingChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3876f]"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-lg">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={shippingDetails.postalCode}
                        onChange={handleShippingChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3876f]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={shippingDetails.phone}
                      onChange={handleShippingChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b3876f]"
                    />
                  </div>
                </>
              )}

              {/* Option to save new address */}
              {!useSavedAddress && isAddressDifferent && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() =>
                      localStorage.setItem(
                        "savedAddress",
                        JSON.stringify(shippingDetails)
                      )
                    }
                    className="px-4 py-2 bg-[#b3876f] text-white rounded-md hover:bg-[#a2765b]"
                  >
                    Save this address for future use
                  </button>
                </div>
              )}

              {/* Payment Method */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Payment Method</h3>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentMethodChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Credit Card</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={handlePaymentMethodChange}
                      className="form-radio"
                    />
                    <span className="ml-2">PayPal</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#b3876f] text-white rounded-lg shadow-md hover:bg-[#a2765b] transition duration-300"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-[#3d3d3d]">
              Order Summary
            </h2>
            <ul className="space-y-6">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 px-6 border-b border-gray-200"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl} // Assuming each product has an image URL
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-md mr-4"
                    />
                    <span className="text-[#3d3d3d] font-medium">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[#b3876f] font-semibold">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between items-center">
              <span className="text-xl font-semibold text-[#3d3d3d]">
                Total
              </span>
              <span className="text-2xl font-semibold text-[#b3876f]">
                ${calculateTotal()}
              </span>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/cart"
                className="inline-block px-8 py-3 bg-[#b3876f] text-white rounded-lg shadow-lg hover:bg-[#a2765b] transition duration-300"
              >
                Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
