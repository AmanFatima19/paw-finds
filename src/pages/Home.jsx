import React from 'react'
import HeroSection from '../components/HeroSection'
import Countup from '../components/Countup'
import AboutDescription from '../components/AboutDescription'
import GuaranteeSection from '../components/GuaranteeSection'
import FaqSection from '../components/FaqSection'
import HowItWorks from '../components/HowItWorks'



function Home() {
  return (
   
  <div >
    <HeroSection />
    <Countup />
    <AboutDescription />
    <GuaranteeSection />
    <HowItWorks />
    <FaqSection />
  </div>

  )
}

export default Home
