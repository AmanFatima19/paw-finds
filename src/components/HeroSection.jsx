import React from 'react'

function HeroSection() {
  return (
    <div>
      <section class="back body-font py-6">
  <div class="container mx-auto flex py-6 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-start">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">YOUR PETS ARE
        <br class="hidden lg:inline-block"/><span style={{color:'purple'}}>OUR PRIORITY</span>
      </h1>
      <p class="mb-8 leading-relaxed">Connecting loving homes with pets in need, our platform simplifies the adoption process with a user-friendly interface, detailed pet profiles, and secure management. Discover, adopt, and provide a better life for your future furry companions.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[purple] border-0 py-2 px-7 focus:outline-none hover:bg-[#F2C119] rounded text-lg">Adopt a Pet</button>

      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img class="object-cover object-center rounded-full" alt="hero" src="hero-img.jpeg" />
</div>

  </div>
</section>
    </div>
  )
}

export default HeroSection
