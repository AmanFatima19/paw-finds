import React from 'react'

function HeroSection() {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-xl mb-4 font-bold text-gray-900 pt-10" style={{fontSize:'41px'}}>Send Packages Accross Pakistan 
        <br class="hidden lg:inline-block" />Safely & Affordable
      </h1>
      <p class="mb-8 leading-relaxed">Connect with verified travelers and send your packages securely accross cities.Save money and time with our trusted delivery network.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{backgroundColor:"oklch(0.696 0.17 162.48)",color:"white"}}>Get Started</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" style={{backgroundColor:"oklch(0.969 0.016 293.756)",color:"black"}}>Learn More</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-3/6">
      <img class="object-cover object-center rounded" alt="hero" src="hero-bg2.jpg" />
    </div>
  </div>
</section>
    </div>
  )
}

export default HeroSection
