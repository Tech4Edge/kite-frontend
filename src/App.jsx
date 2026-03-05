import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SafetyMatchesPage from "./pages/SafetyMatchesPage";
import WoodenSplintsPage from "./pages/WoodenSplintsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/export/safety-matches"
            element={<SafetyMatchesPage />}
          />
          <Route
            path="/export/wooden-splints"
            element={<WoodenSplintsPage />}
          />

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
