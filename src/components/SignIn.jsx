import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const SignIn = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: validatePhone(value) ? "" : "Please enter a valid number" }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value)
        ? ""
        : "Password should be at least 8 characters, contain 1 uppercase letter, and have one special character",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhone(phone) && validatePassword(password)) {
      console.log("Form submitted");
      navigate("/profile"); // ✅ Navigate to profile page after login
    } else {
      console.log("Validation errors", errors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="bg-white w-[90%] sm:w-[400px] p-8 rounded-lg relative shadow-md">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
          <IoClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                alt="Pakistan Flag"
                className="w-6 h-4 mr-2"
              />
              <span className="mr-2 text-gray-600 font-medium">+92</span>
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="Enter phone number"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={10}
              />
              <FiPhone className="text-gray-500" />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
              <input
                type="password"
                className="w-full bg-transparent outline-none"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
              <FaLock className="text-gray-500" />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0ac6ae] text-white py-3 rounded-lg font-medium hover:bg-[#089f8d] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 cursor-pointer hover:underline">Forgot Password?</p>
        <p className="text-center text-gray-500 mt-3">
          Don’t have an account? <span className="text-[#0ac6ae] cursor-pointer hover:underline">Sign Up</span>
        </p>

        {/* ✅ Back to Home - Navigates to Home Page */}
        <p
          className="text-center mt-4 cursor-pointer hover:underline text-[#0ac6ae]"
          onClick={() => navigate("/")}
        >
          Back To Home
        </p>
      </div>
    </div>
  );
};

export default SignIn;
