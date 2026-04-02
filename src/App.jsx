import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
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
import CheckoutPage from "./pages/CheckoutPage";
// import KiteMatchesPage from "./pages/KiteMatchesPage";
// import OlympiaMatchesPage from "./pages/OlympiaMatchesPage";
// import PartyMatchesPage from "./pages/PartyMatchesPage";
// import TangaMatchesPage from "./pages/TangaMatchesPage";
// import BirdMatchesPage from "./pages/BirdMatchesPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminPromotionsPage from "./pages/AdminPromotionsPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import "./App.css";

function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    document.body.classList.toggle("admin-route", isAdminRoute);
    return () => document.body.classList.remove("admin-route");
  }, [isAdminRoute]);

  return (
    <div className="min-h-screen bg-white app-page-compact">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/* <Route path="/products/kite-matches" element={<KiteMatchesPage />} />
        <Route path="/products/olympia" element={<OlympiaMatchesPage />} />
        <Route path="/products/party" element={<PartyMatchesPage />} />
        <Route path="/products/tanga" element={<TangaMatchesPage />} />
        <Route path="/products/bird" element={<BirdMatchesPage />} /> */}
        <Route
          path="/promotions-packages"
          element={<PromotionsPackagesPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/export/safety-matches" element={<SafetyMatchesPage />} />
        <Route path="/export/wooden-splints" element={<WoodenSplintsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/promotions" element={<AdminPromotionsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
