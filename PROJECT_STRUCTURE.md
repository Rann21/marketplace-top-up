# 📦 Project Structure - Marketplace Top Up Game

```
marketplace-top-up/
├── 📄 index.html              # Halaman utama (landing page)
├── 📄 README.md               # Dokumentasi utama project
├── 📄 SETUP_GUIDE.md          # Panduan setup lengkap
├── 📄 SUPABASE_SETUP.md       # Panduan detail Supabase
├── 📄 PROJECT_STRUCTURE.md    # File ini
├── 📄 package.json            # NPM package info
├── 📄 vercel.json             # Konfigurasi Vercel deployment
├── 📄 .gitignore              # Git ignore rules
├── 📄 .env.example            # Template environment variables
│
├── 📁 css/
│   └── 📄 style.css           # Styling lengkap (14KB+)
│
├── 📁 js/
│   ├── 📄 config.js           # Konfigurasi Supabase (UPDATE INI!)
│   ├── 📄 supabase.js         # Supabase API functions
│   └── 📄 app.js              # Main application logic
│
└── 📁 database/
    └── 📄 schema.sql          # Database schema SQL (JALANKAN DI SUPABASE!)
```

## 📝 Penjelasan File Utama

### Frontend Files

#### `index.html` (11KB)
- Landing page dengan hero section
- Katalog produk game dengan filter kategori
- Modal untuk detail produk dan checkout
- Modal untuk cek status transaksi
- Form kontak
- Responsive design (mobile-friendly)

#### `css/style.css` (14KB)
- Modern design dengan CSS Variables
- Responsive breakpoints untuk mobile
- Animasi dan transitions
- Component styling (cards, modals, forms)
- Toast notifications styling

### JavaScript Files

#### `js/config.js` (Kecil - 0.3KB)
**⚠️ FILE INI HARUS DI-UPDATE!**
```javascript
const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_URL',      // Update ini!
  anonKey: 'YOUR_SUPABASE_ANON_KEY'  // Update ini!
};
```

#### `js/supabase.js` (4KB)
Berisi fungsi-fungsi untuk interaksi dengan Supabase:
- `initSupabase()` - Initialize Supabase client
- `getProducts(category)` - Ambil daftar produk game
- `getProductItems(productId)` - Ambil item produk (diamond/UC)
- `getProductById(id)` - Ambil detail produk
- `createTransaction(data)` - Buat transaksi baru
- `getTransactionsByUserId(userId)` - Ambil riwayat transaksi
- `updateTransactionStatus(id, status)` - Update status transaksi
- Helper functions (formatCurrency, formatDate, showToast)

#### `js/app.js` (15KB)
Main application logic:
- Event handlers dan user interactions
- Product catalog rendering
- Category filtering
- Product detail modal
- Checkout form processing
- Transaction checking
- Contact form handling
- Smooth scrolling
- Mobile menu toggle

### Database Files

#### `database/schema.sql` (7.6KB)
SQL schema lengkap untuk Supabase:
- **Tables**: products, product_items, transactions
- **Sample Data**: 6 produk game populer + 30+ item
- **Indexes**: untuk performa query
- **RLS Policies**: keamanan akses data
- **Triggers**: auto-update timestamps

### Configuration Files

#### `vercel.json`
Konfigurasi deployment Vercel:
- Static file serving
- Routing rules

#### `package.json`
NPM package info:
- Project metadata
- Scripts untuk development
- No dependencies (vanilla JS)

#### `.gitignore`
Ignore rules untuk Git:
- node_modules/
- .env files
- logs
- build artifacts

#### `.env.example`
Template untuk environment variables:
- Supabase credentials
- Payment gateway keys (future)
- Notification service keys (future)

## 🎨 Design System

### Colors (CSS Variables)
```css
--primary-color: #7c3aed (purple)
--secondary-color: #2563eb (blue)
--accent-color: #f59e0b (orange)
--success-color: #10b981 (green)
--danger-color: #ef4444 (red)
```

### Components
- Hero section dengan gradient background
- Product cards dengan hover effects
- Modal overlays untuk detail dan checkout
- Status badges (pending, completed, failed)
- Toast notifications
- Responsive navigation

### Breakpoints
- Desktop: > 768px
- Mobile: ≤ 768px

## 🗄️ Database Structure

### Tables Overview

```
products (6 rows)
├── id (uuid)
├── name (Mobile Legends, Free Fire, PUBG, dll)
├── category (MOBA, Battle Royale, RPG, FPS)
├── image_url (Unsplash images)
├── description
└── is_active

product_items (30+ rows)
├── id (uuid)
├── product_id → products.id
├── name (50 Diamond, 100 UC, dll)
├── price (15000, 29000, dll)
├── stock (999999)
└── is_active

transactions (user data)
├── id (uuid)
├── user_id (email/phone)
├── product_item_id → product_items.id
├── game_id (user's game ID)
├── server_id (optional)
├── amount (payment amount)
├── status (pending/completed/failed)
└── payment_method
```

## 🔐 Security Features

1. **Row Level Security (RLS)**
   - User hanya bisa lihat transaksi mereka sendiri
   - Public bisa lihat products & product_items
   
2. **Safe API Keys**
   - Hanya anon key (public key) yang digunakan
   - Service role key tidak diexpose
   
3. **Input Validation**
   - Required fields di form
   - Email & phone validation
   - Proper data sanitization

## 🚀 Deployment Flow

```
1. Developer push code → GitHub
2. GitHub webhook → Vercel
3. Vercel build → Static files
4. Vercel deploy → CDN edge locations
5. User access → Fast global delivery
```

## 📦 Dependencies

### External (CDN)
- **Supabase JS**: `@supabase/supabase-js@2`
- **Font Awesome**: `6.4.0` (icons)

### No Build Tools!
- Pure HTML/CSS/JavaScript
- No webpack, vite, atau bundler
- Instant deployment
- Easy debugging

## 🎯 Key Features Flow

### 1. Browse Products
```
User → Homepage → Products Grid → Filter by Category
```

### 2. Order Flow
```
User → Click Product → View Details → Select Item 
→ Fill Form → Submit → Payment Instructions
```

### 3. Check Transaction
```
User → Click "Cek Transaksi" → Enter Email/Phone 
→ View Transaction History with Status
```

## 🔄 Update Workflow

### Update Products
1. Open Supabase Dashboard
2. Table Editor → products
3. Insert/Edit rows
4. Changes reflect instantly

### Update Code
1. Edit files locally
2. `git add . && git commit -m "message"`
3. `git push origin main`
4. Vercel auto-deploys in 1-2 minutes

## 📱 Mobile Optimization

- Responsive grid layout
- Touch-friendly buttons (min 44px)
- Mobile menu toggle
- Optimized images
- Fast loading (< 3s)

## 🎓 Learning Resources

Teknologi yang digunakan:
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript**: ES6+, Async/Await, DOM manipulation
- **Supabase**: PostgreSQL, REST API, RLS
- **Vercel**: Static hosting, CDN, HTTPS

## 🔮 Future Enhancements

Fitur yang bisa ditambahkan:
- [ ] Admin dashboard
- [ ] Real payment gateway (Midtrans, Xendit)
- [ ] Email notifications
- [ ] WhatsApp auto-reply
- [ ] Loyalty points system
- [ ] Promo codes & discounts
- [ ] User authentication
- [ ] Order tracking
- [ ] Review & rating system

## 📞 Support

File dokumentasi:
- `README.md` - Overview project
- `SETUP_GUIDE.md` - Setup lengkap step-by-step
- `SUPABASE_SETUP.md` - Panduan Supabase detail
- `PROJECT_STRUCTURE.md` - File ini

---

**💡 Tips:**
- Selalu backup sebelum update
- Test di localhost sebelum push
- Monitor Supabase logs untuk debugging
- Gunakan Vercel preview deploys untuk testing
