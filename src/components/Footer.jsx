import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[purple] text-white pt-10 mt-16">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Paw<span style={{color:'#F2C119'}}>Finds</span></h2>
          <p className="mt-2" style={{ fontSize: '16px' }}>
         "Thousands of pets have found their forever homes through PawFinds.Join our mission.!"
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 pl-7">Get In Touch</h3>
          <ul className="space-y-2" style={{ fontSize: '16px' }}>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" style={{color:'#F2C119'}}/> H#1,St#3 Usman Colony LHR
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2"style={{color:'#F2C119'}} /> +92 3234736930
            </li>
            <li className="flex items-center"  >
              <FaEnvelope className="mr-2"style={{color:'#F2C119'}} /> pawfinds@gmail.com.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 pl-7">Useful Links</h3>
          <ul className="space-y-2" style={{ fontSize: '16px' }}>
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/about" className="text-white">About Us</a></li>
            <li><a href="/faq" className="text-white">Our Sevices</a></li>
            <li><a href="#" className="text-white">Our Team</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
            
          </ul>
        </div>
      </div>


      <div className="mt-16 text-center py-3" style={{ backgroundColor: '#F2C119',color:'black' }}>
        <p className="text-sm">&copy; {new Date().getFullYear()}, All rights reserved by PawFinds.</p>
      </div>
    </footer>
  );
};

export default Footer;
