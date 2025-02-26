import React from "react";

function Dashboard() {
  return (
    <div>
      <section className="bg-white pb-10">
        {/* Header with Image */}
        <div className="relative">
          <h1 className="text-white text-center text-4xl font-bold">
            HAPPY PACKING
          </h1>
          <div className="mt-6 w-screen overflow-hidden">
            <img
              src="dashboard.jpg" // Replace with your actual image path
              alt="Happy Packing"
              className="w-full h-[70vh] object-cover"
            />
          </div>
          {/* Floating Buttons */}
          <div className="absolute right-5 top-1/2 space-y-4">
            <button className="bg-white p-3 rounded-full shadow-lg flex flex-col items-center">
              🛒
              <span className="text-xs mt-1">New Order</span>
            </button>
            <button className="bg-white p-3 rounded-full shadow-lg flex flex-col items-center">
              🧳
              <span className="text-xs mt-1">New Trip</span>
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* My Orders */}
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-gray-100">
            <h3 className="text-xl font-semibold bg-[#0ac6ae] text-white py-3 px-4 rounded-t-lg">
              My Orders
            </h3>
            <div className="p-4 text-gray-600">No order found.</div>
          </div>

          {/* My Trips */}
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-gray-100">
            <h3 className="text-xl font-semibold bg-[#0ac6ae] text-white py-3 px-4 rounded-t-lg">
              My Trips
            </h3>
            <div className="p-4 text-gray-600">No trip found.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
