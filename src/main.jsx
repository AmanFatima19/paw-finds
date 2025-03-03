import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pets from "./pages/Pets";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import GiveAPet from "./components/GiveAPet";
import AdoptAPet from "./components/AdoptAPet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give-a-pet" element={<GiveAPet />} />
        <Route path="/adopt-a-pet" element={<AdoptAPet />} />
        
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
