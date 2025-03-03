import React, { useState } from "react";

const AdoptAPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    reason: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{12}$/;

    if (!formData.name) tempErrors.name = "Name is required!";
    if (!formData.email || !emailPattern.test(formData.email))
      tempErrors.email = "Valid email is required!";
    if (!formData.phone || !phonePattern.test(formData.phone))
      tempErrors.phone = "Valid phone number (12 digits with +92) is required!";
    if (!formData.petType) tempErrors.petType = "Select a pet type!";
    if (formData.reason.length < 20)
      tempErrors.reason = "Reason must be at least 20 characters!";
    if (!formData.experience) tempErrors.experience = "Experience is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Adoption request submitted successfully! 🎉");
      setFormData({
        name: "",
        email: "",
        phone: "",
        petType: "",
        reason: "",
        experience: "",
      });
    }
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-xl shadow-md mt-10 w-[60%]">
      <h2 className="text-2xl font-bold mb-4 text-center">Adopt a Pet 🐾</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="+92...."
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Pet Type:</label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a Pet Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="birds">Birds</option>
            <option value="fish">Fish</option>
            <option value="mammals">Small Mammals</option>
            <option value="Others">Others</option>
          </select>
          {errors.petType && (
            <p className="text-red-500 text-sm">{errors.petType}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Reason for Adoption:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.reason && (
            <p className="text-red-500 text-sm">{errors.reason}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Experience with Pets:</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.experience}</p>
          )}
        </div>

        <button type="submit" className="w-full">
          <a
            href="/"
            className="px-20 py-2"
            style={{
              color: "white",
              backgroundColor: "purple",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Submit
          </a>
        </button>
      </form>
    </div>
  );
};

export default AdoptAPet;
