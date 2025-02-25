import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Luggage from './pages/Luggage';
import Documents from './pages/Documents';
import LightParcels from './pages/LightParcels';
import Medicines from './pages/Medicines';
import LoginForm from './components/LoginForm';
import Feedback from './pages/Feedback';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/luggage" element={<Luggage />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/lightparcels" element={<LightParcels />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
