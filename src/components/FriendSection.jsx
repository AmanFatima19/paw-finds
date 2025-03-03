import React from "react";

function FriendSection() {
  return (
    <div>
      <section className="bg-[#F2C119] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
         
          <div className="text-white md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl font-bold mb-4">1.2k+ Furry Friends Living Their Best Lives</h2>
          
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src='pets-banner.png'
              alt="Furry Friends"
              className="w-full max-w-md rounded-xl shadow-lg h-30 "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FriendSection;
