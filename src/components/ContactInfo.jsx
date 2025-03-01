import { div } from "framer-motion/client";
import React from "react";

function ContactInfo() {
  return (
    <>
      <section className="text-gray-600 body-font relative mt-15">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-6 flex items-end justify-start relative">
            <iframe
              width="100%"  
              height="100%"  
              className="absolute inset-0"
            
              title="map"
             
              src="https://maps.app.google/iHYa3MDYH3tMRjwG7/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-2 rounded shadow-md w-[90%] mx-auto">
              <div className="lg:w-1/2 px-6">
                <h2 style={{fontSize:'20px',fontWeight:'bold',color:'black'}}>
                  ADDRESS
                </h2>
                <p className="mt-1">
                 Allam Iqbal Town,Lahore
                </p>
              </div>
              <div className="lg:w-1/2 px-6 lg:mt-0">
                <h2 style={{fontSize:'20px',fontWeight:'bold',color:'black'}}>
                  EMAIL
                </h2>
                <a className="mt-1" style={{color:'#0ac6ae'}}>
                  info@pakcarry.com
                </a>
                <h2 className="mt-4"  style={{fontSize:'20px',fontWeight:'bold',color:'black'}}>
                  PHONE
                </h2>
                <p className="mt-2">+92 3345567864</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pl-20">
            <h2 className="text-lg mb-3 font-medium title-font text-black">
              Contact Us
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] text-basetext-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] h-32 text-base text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#0ac6ae] border-0 py-2 px-5 rounded text-lg">
                <a href="/" style={{color:'white'}}>
              Send
              </a>
            </button>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
