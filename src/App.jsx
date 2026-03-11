import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ExportPage from "./pages/ExportPage";
import SafetyMatchesPage from "./pages/SafetyMatchesPage";
import WoodenSplintsPage from "./pages/WoodenSplintsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import PromotionsPackagesPage from "./pages/PromotionsPackagesPage";
import KiteMatchesPage from "./pages/KiteMatchesPage";
import OlympiaMatchesPage from "./pages/OlympiaMatchesPage";
import PartyMatchesPage from "./pages/PartyMatchesPage";
import TangaMatchesPage from "./pages/TangaMatchesPage";
import BirdMatchesPage from "./pages/BirdMatchesPage";
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
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/products/kite-matches" element={<KiteMatchesPage />} />
          <Route path="/products/olympia" element={<OlympiaMatchesPage />} />
          <Route path="/products/party" element={<PartyMatchesPage />} />
          <Route path="/products/tanga" element={<TangaMatchesPage />} />
          <Route path="/products/bird" element={<BirdMatchesPage />} />
          <Route path="/promotions-packages" element={<PromotionsPackagesPage />} />
          <Route path="/export" element={<ExportPage />} />
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
