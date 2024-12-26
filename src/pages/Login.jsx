import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import rectangleImage from "../assets/Rectangle 14.png";

const useForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
  };
};

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  Icon,
  onFocus,
  suggestions,
}) => (
  <div className="relative">
    <label htmlFor={id} className="text-gray-600 font-medium block mb-1">
      {label}
    </label>
    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#b3876f]">
      <Icon className="ml-3 text-gray-500" />
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-3 pl-12 rounded-md focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        aria-label={label}
      />
    </div>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

    {suggestions && suggestions.length > 0 && (
      <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto z-10">
        {suggestions.map((email, index) => (
          <li
            key={index}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => onChange({ target: { name: id, value: email } })}
          >
            {email}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Button = ({ children, isLoading }) => (
  <button
    type="submit"
    className="w-full bg-[#b3876f] text-white py-3 rounded-md hover:bg-[#9a6e5b] focus:outline-none focus:ring-2 focus:ring-[#b3876f] disabled:bg-gray-300"
    disabled={isLoading}
  >
    {isLoading ? "Loading..." : children}
  </button>
);

const Login = () => {
  const { formData, errors, handleChange, validateForm } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        alert("Login successful!");
      }, 2000);
    }
  };

  const handleEmailFocus = () => {
    if (formData.email.includes("@")) {
      setEmailSuggestions([]);
    } else {
      setEmailSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#d4a78f] py-10 px-4">
      <div className="hidden lg:block lg:w-1/2 pr-10">
        <img
          src={rectangleImage}
          alt="Login Illustration"
          className="w-full h-auto max-w-md transform -translate-x-10 pl-10 lg:pl-40"
        />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:w-full md:w-96 lg:w-96 xl:w-96 animate__animated animate__fadeIn">
          <div className="text-center mb-2">
            <h1 className="text-xl lg:text-2xl font-bold">Sehlvet</h1>
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              Icon={FaEnvelope}
              onFocus={handleEmailFocus}
              suggestions={emailSuggestions}
            />

            <InputField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter your password"
              Icon={FaLock}
            />

            <Button isLoading={isLoading}>Login</Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#9a6e5b] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
