// FMCG Division Product Data - Aziz Group of Industries / Mohsin Enterprises

export const companyInfo = {
  groupName: 'Aziz Group of Industries',
  fmcgEntities: [
    'Mohsin Match Factory (Pvt.) Ltd.',
    'A.J Match Factory (Pvt.) Ltd.',
    'Mohsin Enterprises (Pvt.) Ltd.',
  ],
  experience: 'Over 50 years of manufacturing excellence (established in the 1940s)',
  globalPresence: 'Exporting to over 40 countries since 1995',
  headOffice: 'Industrial Estate, Old Jamrud Road, Peshawar, Pakistan',
  contact: {
    fmcgTel: '+92-(0)91-5815056 / 5815057',
    sheikhupuraMill: '+92-(0)423-7332711-12',
    email: 'match.export@azizgrp.com',
    website: 'www.azizgrp.com',
  },
};

// Detergent Powder Products
export const detergentProducts = {
  kiteGlow: {
    name: 'Kite Glow',
    tier: 'Premium Brand',
    launchDate: 'March 2025',
    features: 'Triple enzyme technology for stain removal',
    skus: [
      { size: '2 KG', packing: 6, tradePrice: 511.50 },
      { size: '1 KG', packing: 12, tradePrice: 269.70 },
      { size: '500 GM', packing: 24, tradePrice: 139.50 },
      { size: 'RS. 99', packing: 48, tradePrice: 92.07 },
      { size: 'RS. 50', packing: 96, tradePrice: 46.50 },
      { size: 'RS. 20', packing: 96, tradePrice: 18.60 },
      { size: 'RS. 10', packing: 144, tradePrice: 9.30 },
    ],
  },
  burqAction: {
    name: 'BURQ Action',
    tier: 'Mid-Tier Brand',
    features: 'Color protection and skin safety',
    skus: [
      { size: '2.3 KG', packing: 6, tradePrice: 464.07 },
      { size: '1 KG', packing: 12, tradePrice: 213.90 },
      { size: 'RS. 99', packing: 24, tradePrice: 92.07 },
      { size: 'RS. 50', packing: 48, tradePrice: 46.50 },
      { size: 'RS. 20', packing: 96, tradePrice: 18.60 },
      { size: 'RS. 10', packing: 204, tradePrice: 9.30 },
    ],
  },
  vero: {
    name: 'Vero',
    tier: 'Economy/Bulk',
    skus: [
      { size: '20 KG', packing: null },
      { size: '5 KG', packing: 4 },
    ],
  },
};

// Dish Wash Bar Products
export const dishwashProducts = {
  kiteDishwash: {
    name: 'Kite Dishwash Bar',
    features: 'Lemon fragrance and slow dissolution for longevity',
    skus: [
      { size: 'Super Bar', packing: 36, tradePrice: 44.63 },
      { size: 'Long Bar', packing: 36, tradePrice: 35.91 },
      { size: 'Large Bar', packing: 36, tradePrice: 17.96 },
      { size: 'Regular Bar', packing: 48, tradePrice: 8.98 },
    ],
  },
};

// Safety Match Products
export const matchProducts = {
  specifications: {
    description: "Pakistan's largest safety match exporter. Matches are carborised and damp-proof.",
    sizes: [
      { size: 'Large', avgSticks: 58, brandExamples: ['Kite'] },
      { size: 'Classic', avgSticks: 45, brandExamples: ['Kite'] },
      { size: 'Regular', avgSticks: 42, brandExamples: ['Olympia', 'Tanga'] },
      { size: 'Small', avgSticks: 32, brandExamples: ['Party'] },
    ],
  },
  exportBrands: ['Simba', 'Chinook', 'Helicopter'],
  localBrands: ['Kite', 'Olympia', 'Tanga', 'Bird', 'Party'],
};

// Product Categories for Navigation
export const productCategories = [
  {
    title: 'Safety Matches',
    slug: 'safety-matches',
    products: [
      { name: 'Kite Matches', slug: 'kite-matches', description: 'Premium quality matches' },
      { name: 'Olympia', slug: 'olympia', description: 'Reliable safety matches' },
      { name: 'Tanga', slug: 'tanga', description: 'Quality matches' },
      { name: 'Bird', slug: 'bird', description: 'Affordable matches' },
      { name: 'Party', slug: 'party', description: 'Special occasion matches' },
    ],
  },
  {
    title: 'Detergent Products',
    slug: 'detergent-products',
    products: [
      { name: 'Kite Glow', slug: 'kite-glow', description: 'Triple enzyme technology' },
      { name: 'BURQ Action', slug: 'burq-action', description: 'Color protection' },
      { name: 'Vero Detergent', slug: 'vero', description: 'Economy bulk detergent' },
    ],
  },
  {
    title: 'Dish Wash',
    slug: 'dish-wash',
    products: [
      { name: 'Kite Dishwash Bar', slug: 'kite-dishwash', description: 'Lemon fragrance formula' },
    ],
  },
  {
    title: 'Export Brands',
    slug: 'export-brands',
    products: [
      { name: 'Simba Matches', slug: 'simba', description: 'International quality' },
      { name: 'Chinook', slug: 'chinook', description: 'Export brand' },
      { name: 'Helicopter', slug: 'helicopter', description: 'Global distribution' },
    ],
  },
];

export default {
  companyInfo,
  detergentProducts,
  dishwashProducts,
  matchProducts,
  productCategories,
};
