import React from "react";
import { FaShieldAlt, FaThumbsUp, FaClock, FaSmile, FaGift, FaDog } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-black mb-2">Why Choose Us?</h2>
        <p className="text-gray-600 mb-16">
          Discover why we are the best choice for your furry friends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          
          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaShieldAlt />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">Secure & Trustworthy</h3>
            <p className="text-gray-600">
              Your safety is our top priority with secure services.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaGift />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">Free Services</h3>
            <p className="text-gray-600">
              Enjoy our services without any cost for now!
            </p>
          </div>

          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaDog />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">Grooming & Fun Activities</h3>
            <p className="text-gray-600">
              Special care with fun activities for your pets.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaThumbsUp />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">Customer Satisfaction</h3>
            <p className="text-gray-600">
              High-quality services with positive feedback.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaClock />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available round the clock to assist you.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="text-[purple] text-5xl mb-4 group-hover:text-[#F2C119] flex justify-center">
              <FaSmile />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-black">Friendly Environment</h3>
            <p className="text-gray-600">
              A welcoming space for you and your pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
