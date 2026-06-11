# 🪁 Kite — Premium FMCG E-Commerce Platform

<div align="center">

![Kite Banner](https://img.shields.io/badge/Kite-FMCG%20Platform-FF6B35?style=for-the-badge&logo=fire&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A modern, high-performance e-commerce storefront for Kite — Pakistan's trusted FMCG brand.
Built with React 19, powered by a REST API backend, and deployed globally via Vercel.**

[🛒 Visit the Live Store](#) &nbsp;·&nbsp; [📦 Browse Products](#) &nbsp;·&nbsp; [📞 Contact Us](#)

</div>

---

## 🌟 What is Kite?

**Kite** is a full-featured e-commerce platform for a Pakistani FMCG company that manufactures and distributes safety matches, wooden splints, detergents, dish-wash products, and various other consumer goods. The platform serves both **retail customers** and **export clients**, offering a premium shopping experience with real-time order notifications, cart management, promotional packages, and a comprehensive admin panel.

> **For Visitors & Customers:** Browse our full catalog, explore bundle deals, place orders with Cash on Delivery, Easypaisa, or JazzCash — and get email confirmations instantly.

> **For Export Partners:** Explore our international export offerings for Safety Matches and Wooden Splints with detailed product specifications and direct contact options.

> **For Recruiters & Developers:** This is a production-grade React application demonstrating modern frontend architecture — lazy loading, context-based state management, SEO optimization, real-time notifications via Pusher, and seamless Vercel deployment.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🛒 **Shopping Cart** | Persistent cart with localStorage, slide-out drawer, quantity management |
| 📦 **Product Catalog** | Dynamic product listing, filtering, and detailed product pages |
| 🎁 **Promotions & Packages** | Bundle deals with custom pricing and gallery images |
| 💳 **Checkout Flow** | Multi-step checkout with COD, Easypaisa, and JazzCash support |
| 📧 **Order Confirmation** | Automated email sent to both customer and admin on every order |
| 🌍 **Export Section** | Dedicated pages for international safety matches & wooden splints |
| 📱 **WhatsApp Integration** | Floating WhatsApp button for direct customer support |
| 🔔 **Real-Time Admin Notifications** | Pusher-powered live order alerts in the admin panel |
| 🔐 **Admin Panel** | JWT-secured panel for managing products, promotions, orders & settings |
| 🎠 **Hero Carousel** | Full-screen animated product showcase with Swiper.js |
| 🏷️ **Brands Showcase** | Interactive brand display with certifications slider |
| 📖 **About Us** | Company history, founder profiles, mission/vision, and timeline |
| 🗺️ **SEO Optimized** | react-helmet-async meta tags, structured data, and sitemap support |
| ♿ **Accessible** | Semantic HTML5 landmarks, keyboard navigation, skip-to-content |

---

## 🖼️ Application Pages & Routes

```
/                          →  Home Page (carousel, featured products, brands)
/about                     →  About Us (company story, leadership, timeline)
/products                  →  Product Catalog (all products grid)
/products/:id              →  Product Detail Page (gallery, variants, SKUs, order)
/promotions-packages       →  Bundle Deals & Promotional Packages
/checkout                  →  Checkout (customer details, payment method)
/order-success/:id         →  Order Confirmation Summary
/export                    →  Export Overview Page
/export/safety-matches     →  Safety Matches Export Details
/export/wooden-splints     →  Wooden Splints Export Details
/contact                   →  Contact Page (form, map, info)

/admin/login               →  Admin Login (JWT-based)
/admin/products            →  Manage Products (CRUD + Cloudinary image upload)
/admin/promotions          →  Manage Promotional Packages
/admin/orders              →  View & Update Order Statuses
/admin/settings            →  Platform Settings (e.g., default shipping cost)
```

---

## 🏗️ Architecture & Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2 | Core UI framework |
| **Vite** | 7 | Build tool & dev server |
| **React Router DOM** | 7 | Client-side routing (SPA) |
| **Tailwind CSS** | v4 | Utility-first styling |
| **Framer Motion** | 12 | Smooth animations & transitions |
| **Swiper.js** | 12 | Touch-enabled carousels |
| **Lucide React** | 1.17 | Consistent icon set |
| **React Icons** | 5 | Extended icon library |
| **Pusher JS** | 8.5 | Real-time admin notifications |
| **React Helmet Async** | 3 | SEO meta tag management |
| **React Hot Toast** | 2 | Toast notifications |
| **React Intersection Observer** | 10 | Scroll-triggered animations |

### Frontend Architecture

```
kite-frontend/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx        # Responsive navigation with mobile menu
│   │   ├── Footer.jsx        # Full site footer with links & contact info
│   │   ├── HeroCarousel.jsx  # Full-screen Swiper carousel
│   │   ├── CartDrawer.jsx    # Slide-out shopping cart panel
│   │   ├── ProductsSection.jsx
│   │   ├── ExportSection.jsx
│   │   ├── TrustSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── MatchMakingSection.jsx
│   │   ├── BrandsShowcaseSection.jsx
│   │   ├── CertificationsSlider.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── FloatingCartButton.jsx
│   │   ├── admin/            # Admin layout & auth guard
│   │   ├── about/            # About Us page sections
│   │   └── seo/              # SEO head & structured data
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state (localStorage-persisted)
│   ├── pages/                # Route-level page components (lazy-loaded)
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── OrderSummaryPage.jsx
│   │   ├── PromotionsPackagesPage.jsx
│   │   ├── ExportPage.jsx
│   │   ├── SafetyMatchesPage.jsx
│   │   ├── WoodenSplintsPage.jsx
│   │   ├── AboutUsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── AdminLoginPage.jsx
│   │   ├── AdminProductsPage.jsx
│   │   ├── AdminPromotionsPage.jsx
│   │   ├── AdminOrdersPage.jsx
│   │   └── AdminSettingsPage.jsx
│   ├── services/
│   │   └── api.js            # All API calls (fetch-based, auto HTTPS upgrade)
│   ├── utils/                # Shared utility functions
│   ├── data/                 # Static/seed data
│   ├── App.jsx               # Root component & router config
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html                # HTML shell with SEO meta
├── vite.config.js            # Vite configuration
└── vercel.json               # SPA rewrite rules for Vercel
```

---

## 🛒 Cart & Order Flow

```mermaid
graph LR
    A[Product Page] --> B[Add to Cart]
    B --> C[CartContext - localStorage]
    C --> D[Cart Drawer]
    D --> E[Checkout Page]
    E --> F[POST /api/orders]
    F --> G[Order Confirmation Email]
    F --> H[Pusher Real-time Notification]
    F --> I[/order-success/:id]
```

1. **Products are fetched** from the REST API on page load.
2. **Cart state** is held globally in `CartContext`, persisted to `localStorage` under `kite_cart`.
3. **At checkout**, the customer fills in name, phone, email, address, city, and selects a payment method.
4. **On submission**, a `POST /api/orders` request is made; the backend creates the order in MongoDB, fires an email via EmailJS, and sends a Pusher event to the admin dashboard.
5. **The customer** is redirected to `/order-success/:id` and receives a confirmation email.

---

## ⚙️ Getting Started (Local Development)

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A running instance of the [Kite Backend](../kite-backend/README.md)

### 1. Clone & Install

```bash
git clone <repository-url>
cd kite-frontend
npm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
# URL of the running backend API
VITE_API_BASE_URL=http://localhost:5000/api

# Pusher credentials (for real-time admin notifications)
VITE_PUSHER_KEY=your_pusher_key
VITE_PUSHER_CLUSTER=your_pusher_cluster
```

> **Note:** If `VITE_API_BASE_URL` is not set, the app auto-detects localhost vs production and defaults accordingly.

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

The optimized bundle is output to the `dist/` directory.

---

## 🚀 Deployment

This frontend is deployed on **Vercel** as a static SPA.

The `vercel.json` rewrites all routes to `index.html`, enabling full client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Deploy steps:**
1. Push to GitHub.
2. Connect the repository to Vercel.
3. Set environment variables in the Vercel dashboard.
4. Deploy — Vercel handles the rest.

---

## 📱 Responsive Design

The application is fully responsive across all screen sizes:

- **Mobile (< 768px):** Hamburger menu, stacked layouts, touch-friendly carousel
- **Tablet (768–1024px):** Adaptive grid layouts
- **Desktop (> 1024px):** Full navigation bar, multi-column product grids

---

## 🔐 Admin Panel

The admin panel is a **protected section** accessible only with valid credentials.

| Route | Feature |
|---|---|
| `/admin/login` | JWT login form |
| `/admin/products` | Full CRUD: add/edit/delete products with image upload (Cloudinary) |
| `/admin/promotions` | Manage promotional package bundles |
| `/admin/orders` | View all orders, update status (pending → confirmed → shipped → cancelled) |
| `/admin/settings` | Configure default shipping cost |

The admin layout includes:
- **NotificationCenter** — real-time new order pop-ups via Pusher.
- **RequireAdminAuth** — route guard that redirects unauthenticated users to `/admin/login`.
- JWT token stored in `localStorage` under `adminToken`.

---

## 🎨 Design System

- **Typography:** System font stack with clean hierarchical sizing
- **Color Palette:** Brand-consistent warm tones with high-contrast CTAs
- **Animations:** Framer Motion for page transitions and element reveals
- **Icons:** Lucide React + React Icons for consistency
- **Carousels:** Swiper.js with autoplay, pagination, and touch support
- **Toasts:** React Hot Toast for success/error feedback

---

## 🧩 Key Components Reference

| Component | Description |
|---|---|
| `HeroCarousel` | Animated full-screen product carousel with CTAs |
| `ProductsSection` | Grid of active products with hover effects |
| `CartDrawer` | Slide-in cart with item management and checkout button |
| `FloatingCartButton` | Sticky cart badge showing item count |
| `TrustSection` | Certifications, features, and brand trust signals |
| `ExportSection` | Export product highlights for international buyers |
| `BrandsShowcaseSection` | Interactive brand carousel with logos |
| `AboutSection` | Company overview with animated stats |
| `WhatsAppButton` | Floating WhatsApp CTA for quick support |
| `SeoHead` | Per-page meta title, description, and OG tags |
| `StructuredData` | JSON-LD schema injection for search engines |

---

## 📊 SEO Strategy

- **Dynamic meta tags** per page using `react-helmet-async`
- **Structured data** (JSON-LD) for products and organization
- **Sitemap generation** via backend script (`scripts/generateSitemap.js`)
- **Semantic HTML5** elements (`<main>`, `<nav>`, `<article>`, `<section>`)
- **Single `<h1>` per page** for proper heading hierarchy
- **Unique IDs** on all interactive elements

---

## 📞 Support & Contact

For product inquiries, export partnerships, or order support:

- 🌐 **Website:** [Your live URL here]
- 💬 **WhatsApp:** Available via the floating button on the site
- 📧 **Email:** Contact via the Contact page

---

## 📄 License

This project is proprietary software developed for Kite FMCG.
All rights reserved © 2025 Tech4Edges / Kite.

---

<div align="center">

Made with ❤️ by the **Tech4Edges** team · Powered by React 19 + Vite + Vercel

</div>
