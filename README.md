# 🛠️ ServiceHub - Professional Service Booking Application

A modern, beautiful, and fully-featured service booking application built with React 18, TypeScript, Redux Toolkit, and Tailwind CSS. Features a 7-step booking wizard with state persistence, admin dashboard, and responsive design.

![ServiceHub](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0-764abc)

## ✨ Features

### Public Features
- **Home Page**: Beautiful landing page with service categories and features
- **Services Page**: Browse and filter all available services
- **Contact Page**: Contact form with validation
- **Multi-Step Booking Wizard**: 7-step intuitive booking flow with:
  - Service category selection
  - Sub-service selection
  - Location selection (with geolocation support)
  - Date and time picker
  - User details form
  - Complete address form
  - Review and confirmation

### Admin Features
- **Dashboard**: Overview of bookings, revenue, and statistics
- **Bookings List**: View, filter, and manage all bookings
- **Booking Details**: Detailed view of individual bookings
- **Status Management**: Update booking status in real-time

### Technical Features
- ✅ **State Persistence**: Booking data saved in localStorage
- ✅ **Form Validation**: Real-time validation with helpful error messages
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **Smooth Animations**: Framer Motion for delightful interactions
- ✅ **Type Safety**: Strict TypeScript mode
- ✅ **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- ✅ **Modern UI**: Glass-morphism effects, gradients, and micro-interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git installed

### Installation

1. **Extract/Clone the project**
```bash
cd service-booking-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
service-booking-app/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── ServiceCard/
│   │   │   └── ServiceCard.tsx
│   │   ├── Stepper/
│   │   │   └── Stepper.tsx
│   │   ├── BookingWizard/
│   │   │   ├── BookingWizard.tsx
│   │   │   ├── Step1CategorySelection.tsx
│   │   │   ├── Step2SubCategorySelection.tsx
│   │   │   ├── Step3LocationSelection.tsx
│   │   │   ├── Step4DateTimeSelection.tsx
│   │   │   ├── Step5UserDetails.tsx
│   │   │   ├── Step6AddressForm.tsx
│   │   │   └── Step7ReviewConfirm.tsx
│   │   ├── AdminLayout/
│   │   │   └── AdminLayout.tsx
│   │   ├── StatsCard/
│   │   │   └── StatsCard.tsx
│   │   └── BookingTable/
│   ├── pages/
│   │   ├── public/
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── BookingSuccess.tsx
│   │   └── admin/
│   │       ├── Dashboard.tsx
│   │       ├── BookingsList.tsx
│   │       └── BookingDetails.tsx
│   ├── store/
│   │   ├── index.ts
│   │   └── bookingSlice.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── services.ts
│   ├── hooks/
│   │   └── useRedux.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Indigo/Purple gradient (`#6366f1` to `#4338ca`)
- **Accent**: Orange (`#f97316`)
- **Background**: Gradient from slate to indigo
- **Text**: Gray scale for hierarchy

### Typography
- **Display Font**: Outfit (for headings)
- **Body Font**: Spline Sans (for content)

### Components
- Glass-morphism cards with backdrop blur
- Gradient buttons with shadows
- Smooth transitions and animations
- Hover effects and micro-interactions

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:5173)

# Build
npm run build        # Build for production

# Preview Production Build
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## 📦 Building for Production

1. **Build the application**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

2. **Test the production build locally**
```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow the prompts, and your app will be live!

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Drag and drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/service-booking-app"
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/service-booking-app/',
  // ... rest of config
})
```

4. **Deploy**
```bash
npm run deploy
```

## 🎯 Usage Guide

### For Users

1. **Browse Services**: Visit the home page or services page
2. **Book a Service**: Click "Book Now" to start the booking wizard
3. **Complete Steps**: Follow the 7-step process:
   - Select service category
   - Choose specific service
   - Provide location
   - Pick date and time
   - Enter contact details
   - Provide complete address
   - Review and confirm
4. **Confirmation**: Receive booking confirmation with details

### For Admins

1. **Access Admin Panel**: Navigate to `/admin`
2. **Dashboard**: View statistics and recent bookings
3. **Manage Bookings**: 
   - View all bookings in `/admin/bookings`
   - Search and filter bookings
   - Update booking status
   - View detailed information

## 🔧 Configuration

### Service Categories
Edit `src/data/services.ts` to add/modify service categories and sub-services.

### Theme Colors
Modify `tailwind.config.js` to customize the color scheme.

### State Persistence
The booking state is automatically saved to localStorage and restored on page load.

## 🌟 Key Features Explained

### 1. Multi-Step Booking Wizard
- **State Management**: Redux Toolkit for global state
- **Persistence**: localStorage for data retention
- **Validation**: Real-time form validation
- **Progress Tracking**: Visual stepper component

### 2. Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- Touch-friendly (44x44px minimum touch targets)

### 3. Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Color contrast ratio ≥ 4.5:1

### 4. Performance
- Code splitting with React Router
- Lazy loading of components
- Optimized images and assets
- Memoization where needed

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or run on different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For support, email hello@servicehub.com or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**