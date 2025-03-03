import React, { useState } from "react";

const GiveAPet = () => {
  const [formData, setFormData] = useState({
    petName: "",
    age: "",
    breed: "",
    gender: "",
    description: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.petName) tempErrors.petName = "Pet name is required!";
    if (!formData.age || isNaN(formData.age)) tempErrors.age = "Valid age is required!";
    if (!formData.breed) tempErrors.breed = "Breed is required!";
    if (!formData.gender) tempErrors.gender = "Select a gender!";
    if (formData.description.length < 20)
      tempErrors.description = "Description must be at least 20 characters!";
    if (!formData.reason) tempErrors.reason = "Reason is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Pet listed successfully! 🎉");
      setFormData({
        petName: "",
        age: "",
        breed: "",
        gender: "",
        description: "",
        reason: "",
      });
    }
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-xl shadow-md mt-10 w-[60%]">
      <h2 className="text-2xl font-bold mb-4 text-center">Give a Pet 🐾</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Pet Name:</label>
          <input
            type="text"
            name="petName"
            placeholder="Enter Pet Name"
            value={formData.petName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.petName && <p className="text-red-500 text-sm">{errors.petName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Age (in years):</label>
          <input
            type="text"
            name="age"
            placeholder="Enter age of your Pet"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Breed:</label>
          <input
            type="text"
            name="breed"
            placeholder="Enter breed i.e cat,dog etc"
            value={formData.breed}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.breed && <p className="text-red-500 text-sm">{errors.breed}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Reason for Giving:</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
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

export default GiveAPet;
