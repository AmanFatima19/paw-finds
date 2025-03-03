import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header className="bg-[purple] text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" style={{textDecoration:'none'}}>
      <span className="ml-3 text-2xl mt-2 text-white">Paw</span>
      <span className="text-2xl mt-2 text-[#F2C119]">Finds</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 link" style={{textDecoration:'none'}}>Home</Link>
      <Link to="services" className="mr-5 link" style={{textDecoration:'none'}}>Services</Link>
      <Link to="pets" className="mr-5 link" style={{textDecoration:'none'}}>Pets</Link>
      <Link to="contact" className="mr-5 link" style={{textDecoration:'none'}}>Contact Us</Link>
    </nav>
    {/* <button className="inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-['purple'] rounded text-base md:mt-2 text-[#F2C119] mt-2">Give a Pet
      
    </button> */}
    <Link to="/give-a-pet" className="px-4 py-2 bg-white rounded" style={{color:'#F2C119',textDecoration:'none'}}>
  Give a Pet
</Link>
  </div>
</header>
    </div>
  )
}

export default Navbar
