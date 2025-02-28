import React, { useState } from "react";
import { FaUserCircle, FaHome, FaHistory, FaComment, FaSignOutAlt, FaTimes } from "react-icons/fa";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <section className="bg-white pb-10">
        <div className="relative">
          {/* Profile Icon */}
          <div className="absolute left-5 top-3 text-4xl text-[#0ac6ae] cursor-pointer z-50">
            <FaUserCircle onClick={toggleSidebar} />
          </div>

          {/* Sidebar Overlay (Click outside to close) */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-opacity-40 z-40"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex flex-col p-5">
              {/* Close Button */}
              <button onClick={toggleSidebar} className="self-end text-gray-600 text-2xl">
                <FaTimes />
              </button>

              {/* User Info */}
              <div className="flex flex-col items-center mt-3">
                <FaUserCircle className="text-6xl text-[#0ac6ae] mb-2" />
                <h2 className="text-lg font-semibold text-gray-700">User Name</h2>
                <button className="mt-3 bg-[#0ac6ae] px-4 py-2 rounded text-white">
                  Edit Profile
                </button>
              </div>

              {/* Sidebar Menu */}
              <nav className="mt-10 space-y-3 text-gray-700">
                <a href="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                  <FaHome />
                  <span>Home</span>
                </a>
                <a href="/history" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                  <FaHistory />
                  <span>History</span>
                </a>
                <a href="/feedback" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                  <FaComment />
                  <span>Feedback</span>
                </a>
                <a href="/logout" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Banner Image */}
          <div className="mt-6 w-screen overflow-hidden">
            <img src="dashboard.jpg" alt="Happy Packing" className="w-full h-[80vh] object-cover" />
          </div>

          {/* Right Floating Buttons */}
          <div className="absolute right-5 top-1/2 space-y-4">
            <button className="bg-[#0ac6ae] p-3 rounded-full shadow-lg flex flex-col items-center">
              🛒
              <span className="text-xs mt-1">New Order</span>
            </button>
            <button className="bg-white p-3 rounded-full shadow-lg flex flex-col items-center">
              🧳
              <span className="text-xs mt-1">New Trip</span>
            </button>
          </div>
        </div>

        {/* Orders & Trips Section */}
        <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-gray-100">
            <h3 className="text-xl font-semibold bg-[#0ac6ae] text-white py-3 px-4 rounded-t-lg">
              My Orders
            </h3>
            <div className="p-4 text-gray-600">No order found.</div>
          </div>

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
