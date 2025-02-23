import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white">
   <Navbar />
   <HeroSection />
    </div>
  )
}

export default Home
