# Tailwind Theme System Guide - Aziz Group Website

## 🎨 Overview

Your website now has a **centralized theme system** where you can change colors in ONE place and they apply EVERYWHERE! You also have the flexibility to use custom colors when needed for specific elements.

## 📍 Where to Change Colors

**Single Source of Truth**: `src/index.css` (lines 3-60)

### Quick Color Change Example

Want to change the primary blue color?

```css
/* In src/index.css */
--color-primary-500: #00aeef;  /* Change this ONE value */
```

This automatically updates:
- All buttons
- All links
- All hover states  
- Navigation active states
- And EVERYTHING using `bg-primary`, `text-primary`, `border-primary`, etc.

## 🎯 How to Use Theme Colors

### Method 1: Using Theme Classes (Recommended for 99% of cases)

Use these Tailwind classes that automatically pull from your theme:

```jsx
// ✅ GOOD - Uses theme system
<button className="bg-primary text-text-white hover:bg-primary-600">
  Click Me
</button>

<h1 className="text-text-primary">Heading</h1>
<p className="text-text-secondary">Description</p>
```

### Method 2: Custom Colors (When you need something different)

Use bracket notation for one-off colors:

```jsx
// ✅ ALSO GOOD - Custom color when needed
<div className="bg-[#ff5500] text-white">
  Special Element
</div>
```

## 📋 Available Theme Colors

### PRIMARY (Cyan Blue - Main Brand Color)

| Class | When to Use | Example |
|-------|------------|---------|
| `bg-primary` | Main backgrounds, primary buttons | `<button className="bg-primary">` |
| `text-primary` | Links, active states, highlights | `<Link className="text-primary">` |
| `border-primary` | Borders that need emphasis | `<div className="border-2 border-primary">` |
| `bg-primary-600` | Hover states (darker) | `hover:bg-primary-600` |
| `bg-primary-700` | Pressed/active states | `active:bg-primary-700` |
| `bg-primary-100` | Very light backgrounds | `<div className="bg-primary-100">` |

**Full Scale Available**: `primary-50` (lightest) to `primary-900` (darkest)

### ACCENT (Magenta - Secondary Brand Color)

| Class | When to Use | Example |
|-------|------------|---------|
| `bg-accent` | Secondary buttons, accents | `<button className="bg-accent">` |
| `text-accent` | Secondary highlights | `<span className="text-accent">` |
| `border-accent-light` | Hover borders | `hover:border-accent-light` |
| `bg-accent-tint` | Subtle pink backgrounds | `<div className="bg-accent-tint">` |

**Full Scale Available**: `accent-50` to `accent-900`

### TEXT COLORS

| Class | When to Use | Example |
|-------|------------|---------|
| `text-text-primary` | Headings, main content | `<h1 className="text-text-primary">` |
| `text-text-secondary` | Body text, descriptions | `<p className="text-text-secondary">` |
| `text-text-tertiary` | Muted text, captions | `<span className="text-text-tertiary">` |
| `text-text-white` | White text on dark backgrounds | `<h1 className="text-text-white">` |
| `text-text-white-90` | 90% opacity white | `<p className="text-text-white-90">` |
| `text-text-white-80` | 80% opacity white | `<p className="text-text-white-80">` |

### BACKGROUND COLORS

| Class | When to Use | Example |
|-------|------------|---------|
| `bg-bg-main` | Main page background (white) | `<div className="bg-bg-main">` |
| `bg-bg-light` | Light gray sections | `<section className="bg-bg-light">` |
| `bg-bg-dark` | Dark headers/footers | `<footer className="bg-bg-dark">` |

### BORDER COLORS

| Class | When to Use | Example |
|-------|------------|---------|
| `border-border-light` | Default borders | `<div className="border border-border-light">` |
| `border-border-gray` | Card borders | `<div className="border-2 border-border-gray">` |

### SEMANTIC COLORS

| Class | When to Use | Example |
|-------|------------|---------|
| `bg-success` | Success messages | `<div className="bg-success">` |
| `bg-error` | Error messages | `<div className="bg-error">` |
| `bg-warning` | Warnings | `<div className="bg-warning">` |

## 🔄 Common Patterns

### Button with Theme Colors
```jsx
<button className="bg-primary text-text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-all">
  Primary Button
</button>

<button className="bg-accent text-text-white px-6 py-3 rounded-full hover:bg-accent-600">
  Secondary Button
</button>
```

### Card with Theme Colors
```jsx
<div className="bg-bg-main border-2 border-border-light hover:border-accent-light rounded-xl p-6">
  <h3 className="text-text-primary mb-2">Card Title</h3>
  <p className="text-text-secondary">Card description text</p>
</div>
```

### Text on Dark Background
```jsx
<div className="bg-gradient-to-r from-primary to-primary-600 p-12">
  <h2 className="text-text-white text-4xl mb-4">White Heading</h2>
  <p className="text-text-white-90 text-lg">90% opacity white text</p>
</div>
```

### Navigation Link
```jsx
<Link 
  to="/about" 
  className="text-text-primary hover:text-primary transition-colors"
>
  About Us
</Link>
```

## 🎯 Real Examples from Your Codebase

### Hero Carousel (Already Updated)
```jsx
// ✅ Uses theme colors
<h1 className="text-text-white ...">
  {slide.title}
</h1>
<span className="bg-primary text-text-white hover:bg-primary-600 ...">
  Learn More
</span>
```

### Navbar (Already Updated)
```jsx
// ✅ Uses theme colors
<Link className={isActive 
  ? 'text-primary' 
  : 'text-text-primary hover:text-primary'
}>
  {item.name}
</Link>
```

### FMCG Brand Cards (Already Updated)
```jsx
// ✅ Uses theme gradient scale
<div className="bg-gradient-to-br from-primary to-primary-600 ...">
  <h3 className="text-text-white">Kite</h3>
</div>
```

## 📝 Step-by-Step: Changing Your Primary Color

### Current State
Primary color is **#00aeef** (Cyan Blue)

### Want to Change to Purple? (#8b5cf6)

1. **Open**: `src/index.css`

2. **Find** (around line 12):
```css
--color-primary-500: #00aeef;
```

3. **Change to**:
```css
--color-primary-500: #8b5cf6;
```

4. **Also update** the gradient shades (optional, for perfect gradients):
```css
--color-primary-600: #7c3aed;
--color-primary-700: #6d28d9;
```

5. **Save** - All buttons, links, and primary elements are now purple!

## 🎨 Customizing Other Colors

### Change Secondary/Accent Color
```css
/* Line 20 in src/index.css */
--color-accent-500: #ed028c;  /* Change this */
```

### Change Text Colors
```css
/* Line 37 in src/index.css */
--color-text-primary: #222222;    /* Headings */
--color-text-secondary: #666666;  /* Body text */
```

### Change Background
```css
/* Line 45 in src/index.css */
--color-bg-main: #ffffff;     /* Main background */
--color-bg-light: #f9f9f9;    /* Section backgrounds */
```

## 🚀 Advanced: Creating New Theme Colors

Want to add a tertiary color (e.g., orange)?

1. **Add to theme** in `src/index.css`:
```css
@theme {
  /* ... existing colors ... */
  
  /* NEW: Tertiary color (Orange) */
  --color-tertiary: #f97316;
  --color-tertiary-50: #fff7ed;
  --color-tertiary-600: #ea580c;
  --color-tertiary-700: #c2410c;
}
```

2. **Use it** anywhere:
```jsx
<button className="bg-tertiary text-text-white hover:bg-tertiary-600">
  Orange Button
</button>
```

## ⚡ Quick Reference

### I want to...

**Change the main brand color:**
→ Edit `--color-primary-500` in `src/index.css`

**Add a new button with theme colors:**
→ Use `bg-primary text-text-white hover:bg-primary-600`

**Make text white on dark background:**
→ Use `text-text-white`

**Use a custom one-time color:**
→ Use `bg-[#hexcode]` syntax

**Change hover state of primary button:**
→ Edit `--color-primary-600` in `src/index.css`

**Make links use theme color:**
→ Use `text-primary` or `hover:text-primary`

## 🔍 Finding What Uses Theme Colors

Search your codebase for these patterns:

```bash
# Find all elements using primary color
grep -r "bg-primary" src/

# Find all elements using text-white theme
grep -r "text-text-white" src/

# Find all custom colors (for migration)
grep -r "bg-\[#" src/
```

## ✅ Best Practices

### DO ✅
- Use theme classes for consistent branding
- Use theme shades (-50 to -900) for variations
- Use `text-text-white` instead of just `text-white` on dark backgrounds
- Keep all color definitions in `index.css`

### DON'T ❌
- Don't use `text-white` for theme-managed white text (use `text-text-white`)
- Don't hardcode hex colors unless truly one-off
- Don't edit color values in multiple files
- Don't forget to update hover states when changing main colors

## 🎯 Migration Guide

If you have old hardcoded colors:

**Old Way** (Hardcoded):
```jsx
<button className="bg-[#00AEEF] text-white hover:bg-[#0095CC]">
```

**New Way** (Theme):
```jsx
<button className="bg-primary text-text-white hover:bg-primary-600">
```

## 📊 Theme Color Scale

Each color has a full scale:

```
50  ← Lightest (for subtle backgrounds)
100
200
300
400
500 ← Main color (use this most)
600 ← Hover state
700 ← Active/pressed state
800
900 ← Darkest
```

## 🎨 Color Picker Tool

When choosing new colors, ensure good contrast:
- **Text on background**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **Use**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 🆘 Troubleshooting

**Colors not applying?**
1. Check dev server is running (`npm run dev`)
2. Clear browser cache
3. Verify class name spelling (e.g., `text-text-white` not `text-white`)

**Custom color not working?**
- Make sure you added it to `@theme` in `index.css`
- Restart dev server after theme changes

**Need a one-off color?**
- Use bracket notation: `bg-[#ff5500]`

---

**File**: `src/index.css` (Lines 3-60)
**Last Updated**: February 16, 2026
**Status**: ✅ Fully Implemented
