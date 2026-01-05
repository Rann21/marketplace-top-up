# TopUpGame - Website Top Up Game Cepat & Aman

## 🎮 Project Overview
**TopUpGame** adalah platform website modern untuk layanan top-up game online yang cepat, aman, dan terpercaya. Website ini dibangun dengan teknologi edge computing untuk performa maksimal dan pengalaman pengguna yang optimal.

### 🌟 Main Features
- ✨ **UI/UX Modern & Responsive** - Desain elegant dengan Tailwind CSS
- 🚀 **Proses Cepat** - Top-up otomatis dalam 1-5 menit
- 🔒 **100% Aman** - Transaksi terjamin keamanannya
- 💰 **Harga Terjangkau** - Harga kompetitif untuk semua game
- 📞 **Support 24/7** - Layanan customer service siap membantu
- 🎯 **Multi-Game Support** - Mendukung berbagai game populer
- 🔍 **Filter Kategori** - Mudah mencari game favorit (MOBA, Battle Royale, RPG, FPS)
- 📱 **Mobile Friendly** - Tampilan optimal di semua perangkat

## 🎯 Currently Completed Features

### ✅ Homepage Features
- Sticky navigation header dengan logo dan menu
- Hero section dengan gradient background yang menarik
- 4 key selling points (Proses Cepat, 100% Aman, Harga Murah, Support 24/7)
- Call-to-action button "Mulai Top Up"

### ✅ Product Section
- Grid display untuk 8 game populer dengan emoji icons:
  - 🎮 Mobile Legends (MOBA)
  - 🔥 Free Fire (Battle Royale)
  - 🎯 PUBG Mobile (Battle Royale)
  - ⚔️ Genshin Impact (RPG)
  - 💥 Valorant (FPS)
  - 🏆 Arena of Valor (MOBA)
  - 🎖️ Call of Duty Mobile (FPS)
  - 🌟 Honkai Star Rail (RPG)
- Badge "Popular" untuk game-game trending
- Harga mulai dari (Mulai 5rb - 25rb)
- Tombol "Top Up Sekarang" pada setiap card

### ✅ Category Filter
- 5 kategori: Semua, MOBA, Battle Royale, RPG, FPS
- Filter interaktif dengan JavaScript
- Smooth transition dan visual feedback
- Message "Tidak ada game" jika kategori kosong

### ✅ How to Order Section
- 3 langkah mudah:
  1. Pilih Game
  2. Masukkan Data
  3. Bayar & Terima
- Visual dengan numbered badges
- Background berwarna untuk setiap step

### ✅ Contact Section
- 3 channel komunikasi:
  - WhatsApp
  - Telegram
  - Email
- Gradient background dark untuk kontras
- Icon dari Font Awesome

### ✅ Footer
- Branding TopUpGame dengan logo
- Copyright notice
- Clean design

### ✅ Interactive Features
- Smooth scroll untuk anchor links
- Category filter dengan JavaScript vanilla
- Hover effects pada semua interactive elements
- Responsive design untuk mobile dan desktop

## 🚧 Features Not Yet Implemented

### 📋 Backend Features
- [ ] Database integration (Cloudflare D1)
- [ ] User authentication system
- [ ] Order processing system
- [ ] Payment gateway integration
- [ ] Transaction history tracking
- [ ] Admin dashboard

### 🛒 Shopping Features
- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Order confirmation page
- [ ] Email notifications

### 👤 User Features
- [ ] User registration and login
- [ ] User profile management
- [ ] Order history view
- [ ] Transaction status tracking

### 🔍 Search & Filter
- [ ] Search bar functionality
- [ ] Advanced filtering options
- [ ] Sort by price/popularity
- [ ] Game recommendations

## 📝 Functional Entry URIs Summary

### Frontend Pages
- **Homepage**: `/` - Main landing page dengan semua sections
- **Hero Section**: `/#beranda` - Anchor link ke hero
- **Products**: `/#produk` - Anchor link ke daftar game
- **How to Order**: `/#cara-order` - Anchor link ke tutorial
- **Contact**: `/#kontak` - Anchor link ke kontak

### API Endpoints
- **GET** `/api/games` - Mendapatkan semua game
  - Query params: `?category=MOBA|Battle Royale|RPG|FPS`
  - Response: Array of game objects
  
- **GET** `/api/games/:id` - Mendapatkan detail game berdasarkan ID
  - Response: Single game object atau 404 error

### Static Assets
- **CSS**: `/static/style.css` - Custom styling
- **Icons**: Font Awesome CDN
- **Styling Framework**: Tailwind CSS CDN

## 🔗 URLs

### 🌐 Live URLs
- **Development (Sandbox)**: https://3000-ihtxqapp5nluv2mkojqms-0e616f0a.sandbox.novita.ai
- **GitHub Repository**: https://github.com/Rann21/webapp
- **Production (Cloudflare)**: _[To be deployed]_

### 📡 API Endpoints
- `GET /api/games` - Get all games
- `GET /api/games?category=MOBA` - Filter by category
- `GET /api/games/:id` - Get specific game

## 🗄️ Data Architecture

### Data Models

#### Game Model
```typescript
{
  id: number;           // Unique identifier
  name: string;         // Game name (e.g., "Mobile Legends")
  category: string;     // Category (MOBA, Battle Royale, RPG, FPS)
  image: string;        // Emoji icon
  price: string;        // Starting price (e.g., "Mulai 10rb")
  popular: boolean;     // Popular badge flag
}
```

### Storage Services
Currently using **in-memory data** (array of game objects). No database integration yet.

#### Recommended for Future Implementation:
- **Cloudflare D1** - For relational data (users, orders, transactions)
- **Cloudflare KV** - For caching and session storage
- **Cloudflare R2** - For file uploads (receipts, images)

### Data Flow
```
User Request → Hono Router → API Handler → JSON Response → Frontend Display
```

## 📖 User Guide

### Untuk Pengunjung Website:

1. **Lihat Daftar Game**
   - Buka halaman utama
   - Scroll ke section "Pilih Game Favorit"
   - Lihat semua game yang tersedia

2. **Filter Game Berdasarkan Kategori**
   - Klik tombol kategori di atas grid game
   - Pilih: Semua, MOBA, Battle Royale, RPG, atau FPS
   - Game akan difilter secara otomatis

3. **Pilih Game untuk Top Up**
   - Klik card game yang diinginkan
   - Klik tombol "Top Up Sekarang"
   - _[Fitur checkout belum diimplementasi]_

4. **Hubungi Support**
   - Scroll ke section "Butuh Bantuan?"
   - Pilih channel: WhatsApp, Telegram, atau Email
   - Klik untuk menghubungi langsung

5. **Cek Cara Order**
   - Lihat section "Cara Order"
   - Ikuti 3 langkah mudah:
     - Pilih Game
     - Masukkan Data
     - Bayar & Terima

## 🛠️ Tech Stack
- **Framework**: [Hono](https://hono.dev/) v4.11.3 - Fast web framework
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing
- **Build Tool**: [Vite](https://vitejs.dev/) v6.3.5 - Fast build tool
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3 (CDN)
- **Icons**: [Font Awesome](https://fontawesome.com/) v6.4.0 (CDN)
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages
- **Version Control**: Git + GitHub

## 🚀 Recommended Next Steps

### Priority 1: Core Functionality (High Priority)
1. **Implement Cloudflare D1 Database**
   - Create database schema for games, users, orders
   - Set up migrations
   - Replace in-memory data with database queries

2. **Add Real Game Images**
   - Replace emoji icons with actual game logos
   - Use Cloudflare R2 for image storage
   - Optimize images for web

3. **User Authentication**
   - Implement login/register system
   - Session management with Cloudflare KV
   - Password hashing and security

### Priority 2: E-commerce Features (Medium Priority)
4. **Product Detail Page**
   - Create `/game/:id` route
   - Show game details, packages, prices
   - Add to cart functionality

5. **Shopping Cart System**
   - Cart state management
   - Add/remove items
   - Quantity adjustment
   - Price calculation

6. **Payment Integration**
   - Integrate payment gateway (Midtrans, Xendit, etc.)
   - Create payment form
   - Handle payment confirmation
   - Send email/WhatsApp notifications

### Priority 3: Enhanced Features (Low Priority)
7. **Admin Dashboard**
   - Admin authentication
   - Manage games and products
   - View orders and transactions
   - Generate reports

8. **Search Functionality**
   - Add search bar
   - Real-time search suggestions
   - Search by game name

9. **User Dashboard**
   - Order history page
   - Transaction tracking
   - Profile management
   - Favorite games

10. **Performance & SEO**
    - Add meta tags for SEO
    - Implement caching strategies
    - Optimize images and assets
    - Add analytics (Google Analytics)

## 💻 Deployment

### Status
- ✅ **Development (Sandbox)**: Active
- ✅ **GitHub Repository**: Active and synced
- ⏳ **Cloudflare Pages Production**: Ready to deploy

### Platform
**Cloudflare Pages** - Global edge network deployment

### Configuration
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Hono (Cloudflare Workers)
- Node version: 18+

### Deploy to Cloudflare Pages

1. **Setup Cloudflare API Key** (if not done):
   ```bash
   # Follow instructions in Deploy tab
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Create Cloudflare Pages project**:
   ```bash
   npx wrangler pages project create webapp --production-branch main
   ```

4. **Deploy**:
   ```bash
   npm run deploy:prod
   ```

5. **Set environment variables** (if needed):
   ```bash
   npx wrangler pages secret put API_KEY --project-name webapp
   ```

### Last Updated
January 5, 2026

---

## 📄 Project Structure
```
webapp/
├── src/
│   ├── index.tsx          # Main Hono application with routes
│   └── renderer.tsx       # HTML layout renderer
├── public/
│   └── static/
│       └── style.css      # Custom CSS styling
├── dist/                  # Build output (generated)
├── ecosystem.config.cjs   # PM2 configuration
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite build configuration
├── wrangler.jsonc         # Cloudflare Workers config
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore file
└── README.md              # This file

```

## 🔧 Development

### Local Setup
```bash
# Clone repository
git clone https://github.com/Rann21/webapp.git
cd webapp

# Install dependencies
npm install

# Build project
npm run build

# Start development server
pm2 start ecosystem.config.cjs

# Test the website
curl http://localhost:3000

# Check logs
pm2 logs webapp --nostream
```

### Available Scripts
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run clean-port` - Kill process on port 3000
- `npm test` - Test local server

## 📝 License
Copyright © 2024 TopUpGame. All rights reserved.

---

**Built with ❤️ using Hono + Cloudflare Workers**
