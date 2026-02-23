import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ExportPage from './pages/ExportPage';
import TextileDivisionPage from './pages/TextileDivisionPage';
import FMCGDivisionPage from './pages/FMCGDivisionPage';
import BoardDivisionPage from './pages/BoardDivisionPage';
import RealEstatePage from './pages/RealEstatePage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/export" element={<ExportPage />} />
          
          {/* <Route path="/textile-division" element={<TextileDivisionPage />} />
          <Route path="/fmcg-division" element={<FMCGDivisionPage />} />
          <Route path="/board-division" element={<BoardDivisionPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        
        {/* Global WhatsApp Button - Fixed on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
