import React from 'react'

function AboutDescription() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="py-10">
    <div class="lg:w-[100] flex">
    <img 
              alt="ecommerce" 
              className="lg:w-[900px] w-full lg:h-[600px] h-64 object-cover object-center rounded" 
              src="about-desc.jpg" 
            />
      <div className="lg:w-2/3 w-full lg:py-6 mt-6 lg:mt-0 pl-16">
      <h1 className="text-gray-900 text-2xl title-font font-medium mb-4 mt-6">
        About PakCarry Service
      </h1>
      <p className="leading-relaxed" style={{fontSize:'18px',paddingRight:'80px'}}>
      PakCarry is a peer-to-peer, traveler-based package delivery platform designed to revolutionize
urban and inter-city logistics in Pakistan. The platform connects individuals and businesses with
verified travelers who are already traveling to their desired
destinations. By leveraging underutilized luggage space, PakCarry provides an affordable, secure,
and efficient alternative to traditional courier services.The
platform aims to reduce logistics costs, improve delivery efficiency, and foster trust in
peer-to-peer transactions. <br className="mt-10"/>
        PakCarry provides a convenient online service for finding fellow-travelers who can deliver your parcel on their way.
        We strive to make the process of sending parcels as simple and convenient as possible for everyone. Our service allows you to save time and money and also contributes to environmental safety.
      </p>
      <button className="bg-transparent py-3 px-12 mt-6 font-bold hover:bg-[#089f8d]" style={{color:'#0ac6ae',borderRadius:'30px',border:'2px solid #0ac6ae'}}>
        Download App
      </button>
    </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutDescription
