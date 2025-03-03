import React from "react";
import { useNavigate } from "react-router-dom";

function AdoptPlan() {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          Planning to Adopt a Pet?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Bringing a new furry friend into your life is a big decision. We're
          here to guide you every step of the way—helping you find the perfect
          match and making the adoption process smooth and stress-free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src="puppy.jpg"
              alt="Choose a Pet"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">1. Choose Your Pet</h3>
              <p className="text-gray-600">
                Browse through a variety of pets available for adoption and find
                your perfect companion.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src="two-girls.jpg"
              alt="Meet the Pet"
              className="w-[100%] h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">2. Meet Your Match</h3>
              <p className="text-gray-600">
                Schedule a visit to meet your chosen pet adopter and ensure a great
                connection.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src="kitten-with-dog.jpg"
              alt="Adopt the Pet"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">3. Complete the Adoption</h3>
              <p className="text-gray-600">
                Finalize the paperwork and bring your new friend home with all the
                essentials.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/adoption-form")}
          className="bg-[purple] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#F2C119]"
        >
          Start Your Adoption Journey
        </button>
      </div>
    </section>
  );
}

export default AdoptPlan;
