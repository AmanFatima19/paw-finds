import React from 'react'

function Navbar() {
  return (
    <div >
      <header className="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-2xl font-bold">PakCarry</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-black hover:text-gray-900 mx-3">Home</a>
      <a class="mr-5 text-black hover:text-gray-900 mx-3">About Us</a>
      <a class="mr-5 text-black hover:text-gray-900 mx-3">Contact</a>
      <a class="mr-5 text-black hover:text-gray-900 mx-3">Feedback</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-3" style={{color:"oklch(0.696 0.17 162.48)"}}>Login/Register </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
