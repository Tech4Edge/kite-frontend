# Quick Start Guide - Aziz Group Website

## 🚀 What's New

### ✅ Completed Updates
1. **About Us Page** - New comprehensive page at `/about`
2. **React Router** - All internal links use React Router (no page reloads)
3. **CSS Fixed** - Removed all invalid `!` modifiers from Tailwind classes
4. **Mobile Responsive** - Fully optimized for mobile devices with burger menu
5. **Image Optimization** - All images are responsive and mobile-friendly

## 📱 Navigation Structure

```
Home (/)
├── About (/about) ← NEW!
├── Products (/products)
│   └── Mega Menu with all product categories
├── Divisions
│   ├── Textile Division (/textile-division)
│   ├── FMCG Division (/fmcg-division)
│   ├── Board Division (/board-division)
│   └── Real Estate (/real-estate)
├── Export (/export)
└── Contact (/contact)
```

## 🎨 Design System

### Colors
- **Primary**: `#00AEEF` (Cyan Blue)
- **Primary Hover**: `#0095CC`
- **Accent**: `#ED028C` (Magenta)
- **Text**: `#222222` (Dark Gray)
- **Text Secondary**: `#666666` (Medium Gray)

### Where to Change Styles

#### Global Styles
- **File**: `src/App.css`
- **Use for**: Site-wide typography, buttons, animations
- **Example**: Change all button styles in one place

#### Theme Configuration
- **File**: `src/theme.js`
- **Use for**: Color definitions, font families
- **Example**: Update primary color once, applies everywhere

#### Tailwind Configuration
- **File**: `src/index.css`
- **Use for**: Tailwind theme variables
- **Example**: CSS custom properties for colors

## 🔧 Common Tasks

### Change Primary Color
1. Open `src/theme.js`
2. Update `colors.primary.main`
3. Color applies across entire site

### Add New Page
1. Create file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`

### Modify About Us Content
- **File**: `src/pages/AboutUsPage.jsx`
- **Sections**:
  - Line 14-47: Timeline data
  - Line 49-56: Chairman positions
  - Line 58-69: CEO positions
  - Line 71-79: Companies list

### Update Footer
- **File**: `src/components/Footer.jsx`
- **Quick Links**: Lines 10-15
- **Contact Info**: Lines 40-53
- **Company Logos**: Lines 17-38

## 📱 Mobile Menu

The burger menu is already implemented and working:
- **Location**: `src/components/Navbar.jsx`
- **Breakpoint**: Shows on screens < 768px (md breakpoint)
- **Features**: 
  - Smooth animations
  - Full navigation access
  - Dropdown support
  - Auto-close on navigation

## 🖼️ Image Guidelines

### Adding New Images
1. Place in `src/assets/` folder
2. Import in component:
   ```jsx
   import myImage from '../assets/myImage.jpg';
   ```
3. Use with responsive classes:
   ```jsx
   <img src={myImage} alt="Description" className="w-full h-auto object-cover" />
   ```

### Responsive Image Classes
- `w-full` - Full width
- `h-auto` - Auto height (maintains aspect ratio)
- `object-cover` - Covers container without distortion
- `max-h-[400px]` - Maximum height (adjust as needed)

## 🎯 Key Features

### About Us Page
- **Hero Section**: Gradient background with company tagline
- **Company Story**: Overview and history
- **Leadership**: Chairman and CEO profiles with positions
- **Timeline**: Interactive journey from 1950s to present
- **Mission & Vision**: Beautifully designed value cards
- **Memberships**: Industry associations and achievements

### Mobile Optimizations
- **Hero Carousel**: 
  - Mobile: 400px height
  - Desktop: 700px height
  - Responsive text sizes
- **Navigation**: Burger menu with smooth transitions
- **Grids**: Auto-stack to single column on mobile
- **Images**: Optimized loading and display

## 🔍 Troubleshooting

### Styles Not Applying
1. Check for `!` in Tailwind classes (not supported in v4)
2. Use proper Tailwind syntax: `text-white` not `text-white!`
3. Clear browser cache

### Links Not Working
1. Ensure using `<Link>` from react-router-dom for internal links
2. Use `<a>` only for external links (http://, mailto:, tel:)
3. Check route is defined in `src/App.jsx`

### Mobile Menu Not Showing
1. Check screen width is < 768px
2. Verify `isMobileMenuOpen` state in Navbar
3. Check Tailwind `md:hidden` classes

## 📝 Development Workflow

### Start Development Server
```bash
npm run dev
```
Server runs at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output in: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 🎨 Styling Best Practices

### DO ✅
- Use Tailwind utility classes
- Keep colors in `theme.js`
- Use responsive breakpoints (sm:, md:, lg:)
- Use semantic color names

### DON'T ❌
- Don't use `!` with Tailwind classes
- Don't hardcode colors in components
- Don't use inline styles unless necessary
- Don't forget mobile breakpoints

## 📚 File Structure

```
src/
├── App.jsx                 # Main app with routes
├── App.css                 # Global styles
├── index.css               # Tailwind config
├── theme.js                # Design tokens
├── components/
│   ├── Navbar.jsx          # Navigation with burger menu
│   ├── Footer.jsx          # Footer with links
│   ├── HeroCarousel.jsx    # Homepage carousel
│   └── ...                 # Other components
└── pages/
    ├── HomePage.jsx        # Home page
    ├── AboutUsPage.jsx     # About Us (NEW!)
    ├── ProductsPage.jsx    # Products listing
    └── ...                 # Other pages
```

## 🚨 Important Notes

1. **Tailwind v4**: No `!` modifiers allowed
2. **React Router v7**: All internal navigation uses `<Link>`
3. **Mobile First**: Design mobile, then scale up
4. **Single Source**: Change styles in one place (theme.js, App.css)

## 📞 Support

For questions or issues:
1. Check `IMPLEMENTATION_SUMMARY.md` for detailed changes
2. Review component files for inline comments
3. Check browser console for errors
4. Verify Tailwind classes in documentation

---

**Last Updated**: February 16, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
