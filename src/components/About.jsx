import React from "react";

function About() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden ml-20">
        <div class="py-6">
          <div class="lg:w-[100] flex">
            <img
              alt="same-day delivery"
              className="lg:w-[650px] w-full lg:h-[570px] rounded"
              src="about-img.jpg"
            />
            <div className="lg:w-2/3 w-full lg:py-6 lg:mt-0 pl-10">
              <h2
                style={{
                    marginTop:'10px',
                  fontWeight: "700",
                  color: "black",
                  fontSize: "30px"
                }}
              >
                About PakCarry Services
              </h2>

              <p
                
                style={{ fontSize: "17px"}}
              >
                PakCarry is a peer-to-peer, traveler-based package delivery
                platform designed to revolutionize urban and inter-city
                logistics in Pakistan. The platform connects individuals and
                businesses with verified travelers who are already traveling to
                their desired destinations.
                
                PakCarry provides a convenient online service for finding
                fellow-travelers who can deliver your parcel on their way.
                <p style={{marginTop:'10px'}}> Over
                the past few years, we have noticed an expansion for same-day
                delivery services with traditional customers requiring it only
                sometimes since consumer anticipations continue to grow even
                more about speed and comfort. With same-day delivery becoming
                increasingly popular-our platform ensures fast and
                reliable delivery, allowing customers to receive their packages
                within hours. This service enhances convenience, reduces wait
                times, and supports urgent delivery needs.
                </p>
              </p>
              <button
                className="bg-transparent py-3 px-12 font-bold hover:bg-[#089f8d]"
                style={{
                  color: "#0ac6ae",
                  borderRadius: "30px",
                  border: "2px solid #0ac6ae",
                  marginTop:'10px'
                }}
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
