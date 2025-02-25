import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0ac6ae] text-white pt-10 mt-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">PakCarry</h2>
          <p className="mt-2" style={{fontSize:'16px'}}>
            Welcome to PakCarry, the peer-to-peer delivery platform revolutionizing logistics by connecting travelers with parcel senders securely.
          </p>
         
        </div>
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2 ml-6">Useful Links</h3>
          <ul className="space-y-2" style={{fontSize:'16px'}}>
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Feedback</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">FAQs</a></li>
            <li><a href="#" className="text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-white">Prohibited Items List</a></li>
            <li><a href="#" className="text-white">Protection Plan</a></li>
          </ul>
        </div>

          <div className="flex space-x-4 flex-column" style={{marginTop:'210px'}}>
          <p className="mt-4 font-semibold" style={{fontSize:'16px'}}>Email: <a href="mailto:info@pakcarry.com" style={{color:'white'}}>info@pakcarry.com</a></p>
          <div className="flex gap-2">
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <a href="#" className="text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaTelegram /></a>
            </div>
          </div>
        </div>
   
      <div className="mt-8 text-center py-3" style={{backgroundColor:'black'}}>
        <p className="text-sm">&copy; {new Date().getFullYear()}, All rights reserved by PakCarry.</p>
      </div>
    </footer>
  );
};

export default Footer;
