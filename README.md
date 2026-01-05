# TopUpGame - Website Top Up Game Cepat & Aman 🎮

## 🎯 Project Overview
**TopUpGame** adalah platform website **modern dan professional** untuk layanan top-up game online yang cepat, aman, dan terpercaya. Website ini dibangun dengan teknologi **edge computing** (Cloudflare Workers) dan **Hono framework** untuk performa maksimal dan pengalaman pengguna yang optimal.

### ✨ Main Features
- 🎨 **Ultra Modern UI/UX** - Design elegant dengan glassmorphism effects, gradient backgrounds, dan smooth animations
- 🚀 **Proses Super Cepat** - Top-up otomatis dalam 1-5 menit dengan sistem real-time
- 🔒 **100% Aman & Terpercaya** - Transaksi terjamin keamanannya dengan enkripsi
- 💰 **Harga Terjangkau** - Harga kompetitif untuk semua game populer
- 📞 **Support 24/7** - Layanan customer service siap membantu kapan saja
- 🎯 **Multi-Game Support** - Mendukung 8+ game populer (Mobile Legends, Free Fire, PUBG, Genshin Impact, dll)
- 🔍 **Advanced Filter** - Filter kategori interaktif (MOBA, Battle Royale, RPG, FPS)
- 📱 **Fully Responsive** - Tampilan optimal di desktop, tablet, dan mobile
- ⚡ **Lightning Fast** - Powered by Cloudflare Edge Network untuk loading super cepat
- 🎭 **Beautiful Animations** - Smooth transitions, hover effects, dan micro-interactions

## 🚀 What's NEW in This Version

### 🎨 Design Overhaul
- **Glassmorphism Effects**: Modern backdrop blur effects pada header dan cards
- **Gradient Backgrounds**: Professional color gradients untuk visual depth
- **Floating Elements**: Animated background elements untuk dynamic feel
- **Enhanced Typography**: Inter font family untuk better readability
- **Micro-interactions**: Smooth hover effects, scale transforms, dan color transitions
- **Premium Cards**: Redesigned game cards dengan gradient thumbnails
- **Better Spacing**: Improved visual hierarchy dan white space management

### 💻 Technical Upgrades
- **Hono Framework**: Lightweight, fast web framework untuk Cloudflare Workers
- **TypeScript**: Full type safety untuk better code quality
- **Enhanced API**: More detailed game data dengan descriptions dan gradients
- **Custom Animations**: Advanced CSS keyframes untuk smooth animations
- **Better Performance**: Optimized bundle size dan loading speed
- **Accessibility**: Improved focus states dan keyboard navigation

### ✅ Currently Completed Features

#### 🏠 Homepage Features
- Sticky glassmorphism header dengan smooth scroll effects
- Premium hero section dengan animated gradient background
- Trust badge showcase (50,000+ gamers)
- 4 key selling points dengan animated icons:
  - ⚡ Proses Cepat (1-5 menit)
  - 🛡️ 100% Aman (Terjamin)
  - 🏷️ Harga Murah (Terjangkau)
  - 🎧 Support 24/7 (Selalu Siap)
- Dual CTA buttons (Mulai Top Up + Cara Order)
- Floating background elements dengan blur effects

#### 🎮 Product Section
- Premium grid display untuk 8 game populer:
  - 🎮 **Mobile Legends** (MOBA) - Battle Arena 5v5 terpopuler
  - 🔥 **Free Fire** (Battle Royale) - 50 pemain dalam 10 menit
  - 🎯 **PUBG Mobile** (Battle Royale) - Battle royale experience
  - ⚔️ **Genshin Impact** (RPG) - Open-world dengan grafis memukau
  - 💥 **Valorant** (FPS) - Tactical shooter 5v5
  - 🏆 **Arena of Valor** (MOBA) - MOBA dengan hero legendary
  - 🎖️ **Call of Duty Mobile** (FPS) - FPS action multiplayer
  - 🌟 **Honkai Star Rail** (RPG) - Space fantasy RPG
- Animated "Popular" badges untuk trending games
- Gradient card backgrounds dengan unique colors per game
- Game descriptions dan category tags
- Price display dengan icon
- Smooth hover effects dengan scale transform
- "Top Up Sekarang" button dengan gradient background

#### 🔍 Category Filter
- 5 kategori: Semua, MOBA, Battle Royale, RPG, FPS
- Modern pill-style buttons dengan icons
- Active state dengan gradient background
- Smooth transitions dengan scale effects
- Instant filtering dengan fade animations
- "No results" message dengan friendly icon

#### 📋 How to Order Section
- Modern 3-step process design:
  1. **Pilih Game** - Select dari daftar game
  2. **Masukkan Data** - Input ID dan pilih nominal
  3. **Bayar & Terima** - Payment dan delivery 1-5 menit
- Numbered badges dengan gradient backgrounds
- Step cards dengan hover animations
- Icons untuk visual guidance
- Trust indicator (50,000+ gamers)

#### 📞 Contact Section
- Dark gradient background untuk contrast
- 3 channel komunikasi:
  - 💚 **WhatsApp** - Chat langsung
  - 💙 **Telegram** - Join channel
  - ❤️ **Email** - Kirim pertanyaan
- Glassmorphism cards dengan backdrop blur
- Smooth hover effects dengan arrow animations
- Social media links (Instagram, Facebook, Twitter, TikTok)
- Decorative blur elements

#### 🦶 Footer
- Clean minimal design dengan gradient logo
- Quick navigation links
- Policy dan terms links
- Copyright notice
- "Made with ❤️ in Indonesia"

#### 🎭 Interactive Features
- **Smooth Scroll**: Anchor links dengan offset untuk header
- **Category Filter**: Real-time filtering dengan animations
- **Scroll Reveal**: Elements fade in saat scroll
- **Header Shadow**: Dynamic shadow on scroll
- **Hover Effects**: Scale, color, shadow transitions
- **Page Load Animation**: Smooth fade in pada load
- **Responsive Design**: Optimized untuk semua screen sizes

## 🚧 Features Not Yet Implemented

### 📋 Backend Features
- [ ] Database integration (Cloudflare D1)
- [ ] User authentication system
- [ ] Order processing system
- [ ] Payment gateway integration (Midtrans/Xendit)
- [ ] Transaction history tracking
- [ ] Admin dashboard
- [ ] Real-time order status updates

### 🛒 Shopping Features
- [ ] Product detail pages dengan package selection
- [ ] Shopping cart functionality
- [ ] Checkout process dengan form validation
- [ ] Order confirmation page
- [ ] Email/WhatsApp notifications
- [ ] Invoice generation

### 👤 User Features
- [ ] User registration dan login
- [ ] User profile management
- [ ] Order history view
- [ ] Transaction status tracking
- [ ] Favorite games list
- [ ] Reward points system

### 🔍 Search & Advanced Features
- [ ] Search bar dengan autocomplete
- [ ] Advanced filtering (price range, popularity)
- [ ] Sort by price/popularity/name
- [ ] Game recommendations based on history
- [ ] Real game images (replace emoji dengan logos)
- [ ] Promotional banners

## 📝 Functional Entry URIs Summary

### Frontend Pages
- **Homepage**: `/` - Main landing page dengan semua sections
- **Hero Section**: `/#beranda` - Anchor link ke hero
- **Products**: `/#produk` - Anchor link ke daftar game
- **How to Order**: `/#cara-order` - Anchor link ke tutorial
- **Contact**: `/#kontak` - Anchor link ke kontak

### API Endpoints
- **GET** `/api/games` - Mendapatkan semua game
  - Response: Array of game objects dengan descriptions dan gradients
  
- **GET** `/api/games?category={category}` - Filter game berdasarkan kategori
  - Query params: `MOBA` | `Battle Royale` | `RPG` | `FPS`
  - Response: Filtered array of game objects
  
- **GET** `/api/games/:id` - Mendapatkan detail game berdasarkan ID
  - Response: Single game object atau 404 error

### Static Assets
- **CSS**: `/static/style.css` - Custom styling dengan animations
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Styling Framework**: Tailwind CSS 3 (CDN)
- **Fonts**: Google Fonts - Inter (Variable weights 300-900)

## 🔗 URLs

### 🌐 Live URLs
- **Development (Sandbox)**: https://3000-invlkxdncc536kiny2fwk-5185f4aa.sandbox.novita.ai
- **GitHub Repository**: https://github.com/Rann21/marketplace-top-up
- **Production (Cloudflare)**: _[Ready to deploy]_

### 📡 API Endpoints (Examples)
```bash
# Get all games
GET /api/games

# Filter MOBA games
GET /api/games?category=MOBA

# Get specific game
GET /api/games/1
```

## 🗄️ Data Architecture

### Data Models

#### Game Model
```typescript
interface Game {
  id: number;              // Unique identifier
  name: string;            // Game name (e.g., "Mobile Legends")
  category: string;        // Category (MOBA, Battle Royale, RPG, FPS)
  image: string;           // Emoji icon (temporary)
  price: string;           // Starting price (e.g., "Mulai 10rb")
  popular: boolean;        // Popular badge flag
  description: string;     // Short game description
  gradient: string;        // Tailwind gradient classes for card
}
```

### Storage Services
Currently using **in-memory data** (array of game objects). No database integration yet.

#### Recommended for Future Implementation:
- **Cloudflare D1** - For relational data (users, orders, transactions, products)
- **Cloudflare KV** - For caching, session storage, rate limiting
- **Cloudflare R2** - For file uploads (game images, receipts, user avatars)

### Data Flow
```
User Request → Hono Router → API Handler → In-Memory Data → JSON Response → Frontend Display
```

## 📖 User Guide

### Untuk Pengunjung Website:

1. **Lihat Daftar Game**
   - Buka halaman utama
   - Scroll ke section "Pilih Game Favorit"
   - Lihat 8 game populer dengan gradient cards

2. **Filter Game Berdasarkan Kategori**
   - Klik button kategori (Semua, MOBA, Battle Royale, RPG, FPS)
   - Game akan difilter dengan smooth animation
   - Kategori aktif ditandai dengan gradient background

3. **Pilih Game untuk Top Up**
   - Hover card game untuk melihat animation
   - Lihat description dan price
   - Klik "Top Up Sekarang"
   - _[Fitur checkout akan diimplementasi]_

4. **Hubungi Support**
   - Scroll ke section "Butuh Bantuan?"
   - Pilih channel: WhatsApp, Telegram, atau Email
   - Klik untuk menghubungi langsung

5. **Pelajari Cara Order**
   - Lihat section "Cara Order"
   - Ikuti 3 langkah mudah dengan visual guide

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Hono](https://hono.dev/) v4.11.3 - Ultra-fast web framework
- **Language**: TypeScript - Type-safe development
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) v3 (CDN) - Utility-first CSS
  - Custom CSS - Advanced animations dan effects
- **Icons**: [Font Awesome](https://fontawesome.com/) v6.4.0 (CDN)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) - Modern variable font

### Backend
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing platform
- **Build Tool**: [Vite](https://vitejs.dev/) v6.3.5 - Lightning fast build tool
- **Package Manager**: npm - Dependency management

### Deployment
- **Platform**: Cloudflare Pages - Global CDN deployment
- **CLI**: [Wrangler](https://developers.cloudflare.com/workers/wrangler/) v4.4.0 - Cloudflare tooling
- **Version Control**: Git + GitHub

### Development Tools
- **Process Manager**: PM2 - Daemon process manager
- **Code Quality**: TypeScript strict mode
- **Hot Reload**: Wrangler dev server

## 🚀 Recommended Next Steps

### Priority 1: Core Functionality (Critical)
1. **Add Real Game Images**
   - Replace emoji icons dengan actual game logos
   - Use Cloudflare R2 untuk image storage
   - Optimize images untuk web (WebP format)
   - Add lazy loading untuk performance

2. **Implement Cloudflare D1 Database**
   - Create schema: games, users, orders, transactions
   - Set up migrations dengan wrangler
   - Replace in-memory data dengan DB queries
   - Add indexes untuk performance

3. **Product Detail Page**
   - Create `/game/:id` route
   - Show full game details
   - List available packages (diamond/UC amounts)
   - Price breakdown
   - Add to cart button

### Priority 2: E-commerce Features (High)
4. **User Authentication**
   - Implement JWT-based auth
   - Login/Register forms dengan validation
   - Session management dengan Cloudflare KV
   - Password hashing (bcrypt)
   - Email verification

5. **Shopping Cart System**
   - Cart state management
   - Add/remove items dengan animation
   - Quantity adjustment
   - Price calculation dengan tax
   - Persistent cart (localStorage + KV)

6. **Payment Integration**
   - Integrate Midtrans atau Xendit
   - Create payment form
   - Handle payment callbacks
   - Generate invoices
   - Send email/WhatsApp notifications

### Priority 3: Enhanced Features (Medium)
7. **Admin Dashboard**
   - Admin authentication dengan roles
   - Manage games dan products
   - View orders dan transactions
   - Generate reports dan analytics
   - User management

8. **Search & Advanced Filters**
   - Add search bar dengan autocomplete
   - Filter by price range
   - Sort options (price, popularity, name)
   - Game recommendations
   - Recently viewed games

9. **User Dashboard**
   - Order history page dengan status
   - Transaction tracking real-time
   - Profile management
   - Favorite games list
   - Reward points system

### Priority 4: Performance & Marketing (Low)
10. **SEO & Analytics**
    - Add comprehensive meta tags
    - Implement structured data (JSON-LD)
    - Google Analytics integration
    - Sitemap generation
    - Open Graph tags for social sharing

11. **Performance Optimization**
    - Implement caching strategies
    - Optimize bundle size
    - Add service worker untuk PWA
    - Image optimization pipeline
    - Code splitting

12. **Marketing Features**
    - Promotional banners
    - Discount codes system
    - Referral program
    - Email newsletter
    - Social media integration

## 💻 Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (comes with Node.js)
- Git for version control
- Wrangler CLI (installed via npm)

### Local Setup

```bash
# Clone repository
git clone https://github.com/Rann21/marketplace-top-up.git
cd marketplace-top-up

# Install dependencies
npm install

# Build project (required before first run)
npm run build

# Start development server (for sandbox environment)
pm2 start ecosystem.config.cjs

# Or use wrangler directly (for local machine)
npm run dev:sandbox

# Test the website
curl http://localhost:3000

# Check logs
pm2 logs webapp --nostream

# Stop server
pm2 stop webapp
# or
pm2 delete webapp
```

### Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run dev:sandbox      # Start Wrangler Pages dev on 0.0.0.0:3000

# Build
npm run build            # Build for production with Vite

# Preview & Deploy
npm run preview          # Preview production build locally
npm run deploy           # Build and deploy to Cloudflare Pages
npm run deploy:prod      # Deploy to production with project name

# Utilities
npm run clean-port       # Kill process on port 3000
npm test                 # Test local server with curl
npm run cf-typegen       # Generate Cloudflare types

# Git helpers
npm run git:init         # Initialize git and make initial commit
npm run git:commit       # Add all and commit (requires message)
npm run git:status       # Check git status
npm run git:log          # View commit history
```

### Project Structure
```
marketplace-top-up/
├── src/
│   ├── index.tsx          # Main Hono app with enhanced design
│   └── renderer.tsx       # HTML layout with custom config
├── public/
│   └── static/
│       └── style.css      # Custom CSS dengan animations
├── dist/                  # Build output (auto-generated)
│   ├── _worker.js         # Compiled Cloudflare Worker
│   └── static/            # Static assets
├── css/                   # Legacy CSS (from old version)
├── js/                    # Legacy JS (from old version)
├── database/              # Database schema (for future D1)
├── .git/                  # Git repository
├── .gitignore             # Git ignore rules
├── ecosystem.config.cjs   # PM2 configuration
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
├── wrangler.jsonc         # Cloudflare Workers config
├── README.md              # This file
├── PROJECT_STRUCTURE.md   # Detailed project structure
├── SETUP_GUIDE.md         # Setup instructions
└── SUPABASE_SETUP.md      # Supabase integration guide
```

## 📦 Deployment

### Status
- ✅ **Development (Sandbox)**: Active and running
- ✅ **GitHub Repository**: Synced and up-to-date
- ⏳ **Cloudflare Pages Production**: Ready to deploy

### Platform
**Cloudflare Pages** - Global edge network dengan 275+ locations worldwide

### Configuration
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework**: Hono (Cloudflare Workers)
- **Node version**: 18+ (LTS)
- **Compatibility date**: 2024-01-01

### Deploy to Cloudflare Pages

#### 1. Prerequisites
```bash
# Install Wrangler globally (optional)
npm install -g wrangler

# Or use via npx (recommended)
npx wrangler --version
```

#### 2. Setup Cloudflare API Key
- Go to Cloudflare Dashboard
- Navigate to API Tokens
- Create token with "Edit Cloudflare Workers" permissions
- Copy token for use

#### 3. Login to Wrangler
```bash
npx wrangler login
# Or set environment variable
export CLOUDFLARE_API_TOKEN=your_token_here
```

#### 4. Build the Project
```bash
npm run build
# Creates dist/ directory with _worker.js and static assets
```

#### 5. Create Cloudflare Pages Project
```bash
npx wrangler pages project create marketplace-top-up \
  --production-branch main \
  --compatibility-date 2024-01-01
```

#### 6. Deploy to Production
```bash
# Deploy dist directory
npm run deploy:prod

# Or manually with wrangler
npx wrangler pages deploy dist --project-name marketplace-top-up
```

#### 7. Set Environment Variables (if needed)
```bash
# Add secrets
npx wrangler pages secret put API_KEY --project-name marketplace-top-up
npx wrangler pages secret put DATABASE_URL --project-name marketplace-top-up

# List secrets
npx wrangler pages secret list --project-name marketplace-top-up
```

#### 8. Custom Domain (optional)
```bash
# Add custom domain
npx wrangler pages domain add yourdomain.com --project-name marketplace-top-up
```

### Verification
```bash
# Test homepage
curl https://marketplace-top-up.pages.dev

# Test API
curl https://marketplace-top-up.pages.dev/api/games

# Test static files
curl https://marketplace-top-up.pages.dev/static/style.css
```

### Deployment URLs
After deployment, you'll receive:
- **Production**: `https://marketplace-top-up.pages.dev`
- **Branch preview**: `https://main.marketplace-top-up.pages.dev`
- **Custom domain**: `https://yourdomain.com` (if configured)

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-500: #3b82f6;  /* Main blue */
--primary-600: #2563eb;
--primary-900: #1e3a8a;

/* Accent Colors */
--accent: #8b5cf6;        /* Purple */
--accent-light: #a78bfa;
--accent-dark: #7c3aed;

/* Gradients */
background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
```

### Typography
```css
/* Font Family */
font-family: 'Inter', system-ui, sans-serif;

/* Font Weights */
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-extrabold: 800;
--weight-black: 900;
```

### Animations
- **fadeIn**: 0.6s ease-out - Element fade in
- **slideUp**: 0.6s ease-out - Slide from bottom
- **slideDown**: 0.4s ease-out - Slide from top
- **scaleIn**: 0.5s ease-out - Scale from 90% to 100%
- **float**: 3s infinite - Floating effect

### Effects
- **Glassmorphism**: `backdrop-filter: blur(10px)`
- **Box Shadows**: Multiple levels untuk depth
- **Hover Transforms**: `scale(1.05)` dan `translateY(-8px)`
- **Smooth Transitions**: `cubic-bezier(0.4, 0, 0.2, 1)`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Copyright © 2024 TopUpGame. All rights reserved.

## 👨‍💻 Author

**Rann21**
- GitHub: [@Rann21](https://github.com/Rann21)
- Email: rann21@topupgame.com

## 🙏 Acknowledgments

- **Hono Team** - For the amazing web framework
- **Cloudflare** - For the powerful edge computing platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For the beautiful Inter font family

## 📊 Stats

- **Lines of Code**: 3,000+ lines
- **Components**: 10+ sections
- **Games**: 8 popular games
- **API Endpoints**: 3 endpoints
- **Animations**: 15+ custom animations
- **Build Time**: ~1 second (Vite)
- **Bundle Size**: ~79 KB (optimized)

## 🔄 Version History

### v2.0.0 (2024-01-05) - Major Upgrade
- Complete UI/UX redesign dengan modern design
- Glassmorphism effects dan gradient backgrounds
- Enhanced Hono + TypeScript architecture
- Custom animations dan micro-interactions
- Improved responsive design
- Better performance dan accessibility
- Merged features dari multiple versions

### v1.0.0 (Initial Release)
- Basic HTML + CSS + JavaScript
- Simple game listing
- Basic category filter
- Contact section
- Responsive layout

---

**Built with ❤️ using Hono + Cloudflare Workers + TypeScript**

*Last Updated: January 5, 2026*
