import React from "react";
import HeroSection from "../components/HeroSection";
import FriendSection from "../components/FriendSection";
import WhatWeDo from "../components/WhatWeDo";
import AdoptPlan from "../components/AdoptPlan";
import Choices from "../components/Coices";
import FaqSection from "../components/FaqSection";
import OurServices from "../components/OurServices";


function Home() {
  return (
    <div>
      <HeroSection />
      <Choices />
      <WhatWeDo />
      <FriendSection />
      <AdoptPlan />
     <OurServices />
     <FaqSection />

    </div>
  );
}

export default Home;
