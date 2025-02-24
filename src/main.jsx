import { StrictMode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar'
import Feedback from './pages/Feedback'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Feedback" element={<Feedback/>} />
      </Routes>
    </Router>
    </>
  </StrictMode>,
)
