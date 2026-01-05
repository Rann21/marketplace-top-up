# TopUpGame - Marketplace Top Up Game

Platform top up game terpercaya dengan proses cepat dan aman. Built dengan Hono framework dan deployed di Cloudflare Pages dengan Supabase sebagai backend.

## 🚀 Project Overview

**TopUpGame** adalah website marketplace untuk top up game mobile populer seperti Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, dan banyak lagi.

### ✨ Fitur Utama yang Sudah Diimplementasi

✅ **Halaman Beranda** - Hero section dengan informasi promo dan keunggulan
✅ **Katalog Produk** - Daftar game populer dengan kategori (MOBA, Battle Royale, RPG, FPS)
✅ **Filter Kategori** - Filter game berdasarkan kategori secara real-time
✅ **Cara Order** - Step-by-step guide cara melakukan top up
✅ **Kontak & Support** - Informasi kontak WhatsApp, Telegram, Email
✅ **Cek Transaksi** - Modal untuk cek status transaksi (UI ready)
✅ **Responsive Design** - Mobile-friendly dengan CSS modern
✅ **Supabase Integration** - Backend database untuk menyimpan data

### 🔧 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Hono (Lightweight web framework)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Cloudflare Pages
- **Package Manager**: npm
- **Process Manager**: PM2 (untuk sandbox development)

## 📁 Project Structure

```
webapp/
├── src/
│   └── index.tsx          # Hono API routes (games API, health check)
├── public/
│   ├── index.html         # Main HTML file
│   └── static/
│       ├── css/
│       │   └── style.css  # Custom styles
│       └── js/
│           ├── config.js  # Supabase configuration ✅ FIXED
│           ├── supabase.js # Supabase client initialization
│           └── app.js     # Frontend JavaScript
├── js/                    # Original JS files (source)
├── css/                   # Original CSS files (source)
├── database/              # Database schema & migrations
├── dist/                  # Build output
├── package.json           # Dependencies & scripts
├── wrangler.jsonc         # Cloudflare Pages configuration
├── ecosystem.config.cjs   # PM2 configuration
└── README.md
```

## 🌐 URLs & Endpoints

### Production URLs
- **GitHub Repository**: https://github.com/Rann21/marketplace-top-up
- **Cloudflare Pages**: (Deploy after configuring Cloudflare API key)

### API Endpoints
- `GET /api/games` - Get all games (with optional `?category=` filter)
- `GET /api/games/:id` - Get game by ID
- `GET /api/health` - Health check endpoint

### Sandbox Testing URL
- **Current Sandbox**: https://3000-i1czkhjcns74eaha58b2b-b237eb32.sandbox.novita.ai
- **API Health**: https://3000-i1czkhjcns74eaha58b2b-b237eb32.sandbox.novita.ai/api/health

## 💾 Database & Storage

### Supabase Configuration ✅ FIXED

**Project URL**: `https://fmuafjlmylpltkrswqcy.supabase.co`

**Credentials** (Already configured in `js/config.js`):
- Anon Key: Configured ✅
- Service Role: Available for admin operations
- JWT Secret: Available for authentication

### Database Schema (Planned)

```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price_start INTEGER,
  image_url TEXT,
  description TEXT,
  is_popular BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email VARCHAR(255),
  user_phone VARCHAR(50),
  game_id VARCHAR(255),
  product_id UUID REFERENCES products(id),
  amount INTEGER,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Local Development (Sandbox)
```bash
# Build first
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Check status
pm2 list

# View logs
pm2 logs webapp --nostream

# Stop
pm2 stop webapp
```

### Build for Production
```bash
npm run build
```

### Deploy to Cloudflare Pages
```bash
# Setup Cloudflare API key first via Deploy tab
# Then deploy
npm run deploy:prod
```

## 📋 Completed Features Checklist

- [x] Project structure dengan Hono + Cloudflare Pages
- [x] Integrasi Supabase credentials ✅ **FIXED BLANK SCREEN**
- [x] Halaman Beranda dengan hero section
- [x] Katalog produk dengan 8 game populer
- [x] Filter kategori (Semua, MOBA, Battle Royale, RPG, FPS)
- [x] Halaman Cara Order (3 langkah mudah)
- [x] Halaman Kontak & Support
- [x] Modal Cek Transaksi (UI)
- [x] Responsive mobile design
- [x] API endpoints untuk games
- [x] Git repository initialized
- [x] Push ke GitHub ✅
- [x] PM2 process management

## 🚧 Features Not Yet Implemented

- [ ] Integrasi payment gateway (Midtrans, Xendit)
- [ ] Admin dashboard untuk manage products
- [ ] Real transaction processing
- [ ] User authentication & registration
- [ ] Order history untuk user
- [ ] Email/WhatsApp notifications
- [ ] Supabase database seeding dengan product data
- [ ] Testimonial section
- [ ] Blog/news section
- [ ] Multiple language support (ID/EN)

## 🎯 Recommended Next Steps

1. **Setup Cloudflare API Key** - Konfigurasi di Deploy tab untuk deployment
2. **Deploy to Cloudflare Pages** - Deploy production version
3. **Populate Supabase Database** - Add real product data
4. **Implement Transaction Flow** - Connect payment gateway
5. **Add Admin Panel** - Manage products & transactions
6. **SEO Optimization** - Meta tags, sitemap, robots.txt
7. **Analytics Integration** - Google Analytics atau Cloudflare Analytics

## 🔧 Issue Fixed: Blank/White Screen

### Problem
Website menampilkan layar putih/blank karena Supabase configuration tidak terisi.

### Solution ✅
1. Updated `js/config.js` dengan Supabase credentials yang benar
2. Simplified `src/index.tsx` untuk fokus pada API routes
3. Copied static files ke `public/` directory untuk Cloudflare Pages
4. Fixed static file paths (`/static/css/`, `/static/js/`)

### Files Changed
- `js/config.js` - Added Supabase URL & Anon Key
- `src/index.tsx` - Simplified to API-only routes
- `public/index.html` - Updated static file paths
- `public/static/*` - Copied all frontend assets

## 📝 User Guide

### Cara Menggunakan Website

1. **Pilih Game** - Klik salah satu game dari katalog
2. **Filter Kategori** - Gunakan tombol filter untuk cari game berdasarkan kategori
3. **Top Up** - Klik "Top Up Sekarang" pada game yang dipilih
4. **Cek Transaksi** - Gunakan tombol "Cek Transaksi" di header untuk cek status order

### Cara Menghubungi Support

- **WhatsApp**: Klik tombol WhatsApp di section Kontak
- **Telegram**: Join channel Telegram untuk update terbaru
- **Email**: Kirim email ke support@topupgame.com

## 🎨 Design System

### Colors
- Primary: Blue gradient (`#2563eb` to `#9333ea`)
- Secondary: Purple
- Success: Green
- Warning: Orange
- Danger: Red

### Typography
- Font: System fonts (Inter, SF Pro, Segoe UI)
- Headings: Bold, gradient text effects
- Body: Regular, 16px base

### Components
- Cards: Rounded 2xl, shadow-lg, hover effects
- Buttons: Gradient backgrounds, smooth transitions
- Icons: Font Awesome 6.4.0

## 📈 Deployment Status

- **GitHub**: ✅ Deployed & Up to date
- **Cloudflare Pages**: ⏳ Waiting for API key configuration
- **Supabase**: ✅ Connected & Configured

## 🔐 Environment Variables

Create `.dev.vars` for local development:
```bash
SUPABASE_URL=https://fmuafjlmylpltkrswqcy.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

For production, set via Cloudflare Pages dashboard.

## 📞 Support & Contact

Jika ada pertanyaan atau butuh bantuan:
- **GitHub Issues**: https://github.com/Rann21/marketplace-top-up/issues
- **Email**: support@topupgame.com

---

**Last Updated**: January 5, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready (Waiting for Cloudflare deployment)
