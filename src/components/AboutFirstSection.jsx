import React from 'react';

function AboutFirstSection() {
  return (
    <div className="relative top-23">
     
      <div 
        className="w-screen h-[70vh] flex items-center justify-center text-white text-center"
        style={{ 
          backgroundImage: `url('/about-bg.jpg')`,
          backgroundSize: 'contain', 
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6">
          <h3 style={{fontSize:'25px'}}>Revolutionizing package delivery through a secure, traveler-powered logistics network.</h3>
          <h1 className="text-5xl font-bold mt-3">About PakCarry</h1>
        </div>
      </div>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900">Revolutionizing Package Delivery in Pakistan</h2>
        <p className="text-md text-gray-700 mt-4">
          PakCarry is a peer-to-peer package delivery platform designed to connect travelers with senders, ensuring 
          secure, affordable, and fast logistics. By leveraging verified travelers, we offer a unique and innovative 
          solution to the delivery challenges in Pakistan.
        </p>
      </section>
    </div>
  );
}

export default AboutFirstSection;
