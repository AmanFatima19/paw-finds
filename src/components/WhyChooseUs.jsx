import React from "react";
import { Award, AlertTriangle, Heart, Headset } from "lucide-react"; 

function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
        <div className="flex justify-center">
          <img
            src="care.jpg" 
            alt="Pet Care"
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h3 className="text-green-600 text-lg mb-2">Why Choose Us?</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[purple]">Special Care</span> On Pets
          </h2>
          <p className="text-gray-600 mb-6">
            We provide the best care for your pets with experienced staff and top-notch facilities. 
            Your pet’s health and happiness are our priorities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Award className="text-[#F2C119] w-8 h-8" />
              <p className="text-gray-700 font-medium pt-3">Best In Industry</p>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-[#F2C119] w-8 h-8" />
              <p className="text-gray-700 font-medium pt-3"> Free Emergency Services</p>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-[#F2C119] w-8 h-8" />
              <p className="text-gray-700 font-medium pt-3">Special Care</p>
            </div>
            <div className="flex items-center gap-3">
              <Headset className="text-[#F2C119] w-8 h-8 pt-2" />
              <p className="text-gray-700 font-medium pt-3">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
