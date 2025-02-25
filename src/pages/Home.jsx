import React from 'react'
import HeroSection from '../components/HeroSection'
import Countup from '../components/Countup'
import AboutDescription from '../components/AboutDescription'
import GuaranteeSection from '../components/GuaranteeSection'
import FaqSection from '../components/FaqSection'
import HowItWorks from '../components/HowItWorks'
import ItemsToDeliver from '../components/ItemsToDeliver'


function Home() {
  return (
   
  <div >
    <HeroSection />
    <Countup />
    <AboutDescription />
    <ItemsToDeliver />
    <HowItWorks />
    <GuaranteeSection />
    <FaqSection />

  </div>

  )
}

export default Home
