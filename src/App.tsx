import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technology from './pages/services/Technology';
import Design from './pages/services/Design';
import Events from './pages/services/Events';
import Marketing from './pages/services/Marketing';

function HomePage() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/technology" element={<Technology />} />
          <Route path="/services/events" element={<Events />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
