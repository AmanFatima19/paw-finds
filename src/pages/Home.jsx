import React from "react";
import HeroSection from "../components/HeroSection";
import FriendSection from "../components/FriendSection";
import WhatWeDo from "../components/WhatWeDo";
import AdoptPlan from "../components/AdoptPlan";
import Choices from "../components/Coices";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqSection from "../components/FaqSection";


function Home() {
  return (
    <div>
      <HeroSection />
      <Choices />
      <WhatWeDo />
      <FriendSection />
      <AdoptPlan />
     <WhyChooseUs />
     <FaqSection />

    </div>
  );
}

export default Home;
