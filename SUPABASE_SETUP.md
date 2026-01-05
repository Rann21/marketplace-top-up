# 🔐 Konfigurasi Supabase - PENTING!

## ⚠️ HARUS DILAKUKAN SEBELUM WEBSITE BISA DIGUNAKAN

Website ini menggunakan **Supabase** sebagai backend database. Anda HARUS melakukan konfigurasi berikut agar website berfungsi:

## 📝 Langkah-Langkah Setup

### 1️⃣ Buat Project Supabase (GRATIS)

1. Buka https://supabase.com
2. Klik **"Start your project"** atau **"Sign In"** jika sudah punya akun
3. Klik **"New Project"**
4. Isi form:
   - **Name**: `marketplace-top-up` (atau nama bebas)
   - **Database Password**: Buat password kuat dan SIMPAN! (Anda akan butuh ini)
   - **Region**: Pilih **Southeast Asia (Singapore)** untuk performa terbaik
   - **Pricing Plan**: Pilih **Free** (sudah cukup untuk production)
5. Klik **"Create new project"**
6. ⏳ Tunggu 2-3 menit hingga project selesai dibuat

### 2️⃣ Setup Database (Jalankan SQL Schema)

1. Setelah project siap, klik menu **"SQL Editor"** di sidebar kiri
2. Klik **"New Query"**
3. Buka file `database/schema.sql` di folder project ini
4. **Copy semua isi file** (sekitar 250 baris SQL)
5. **Paste** ke SQL Editor di Supabase
6. Klik tombol **"Run"** atau tekan **Ctrl+Enter**
7. ✅ Tunggu hingga muncul notifikasi **"Success. No rows returned"**

**Ini akan membuat:**
- 3 tabel database (products, product_items, transactions)
- 6 produk game populer (ML, FF, PUBG, Genshin, Valorant, CODM)
- 30+ item produk dengan berbagai nominal
- Security policies (RLS)
- Indexes untuk performa

### 3️⃣ Dapatkan Credentials

1. Klik menu **"Settings"** (ikon ⚙️) di sidebar kiri bawah
2. Klik **"API"** di submenu
3. Lihat bagian **"Project URL"**:
   - Copy URL-nya, contoh: `https://abcdefghijk.supabase.co`
4. Lihat bagian **"API Keys"**:
   - Copy **"anon" key** (yang panjang), contoh: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - ⚠️ JANGAN copy "service_role" key!

### 4️⃣ Update Konfigurasi Website

1. Buka file `js/config.js` di project
2. Ganti `YOUR_SUPABASE_URL` dengan Project URL Anda
3. Ganti `YOUR_SUPABASE_ANON_KEY` dengan anon key Anda

**Sebelum:**
```javascript
const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

**Sesudah (contoh):**
```javascript
const SUPABASE_CONFIG = {
  url: 'https://abcdefghijk.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwMDAwMDAsImV4cCI6MTk4NTU3NjAwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};
```

4. **Commit dan push** perubahan ke GitHub:
```bash
git add js/config.js
git commit -m "Update Supabase credentials"
git push origin main
```

### 5️⃣ Deploy ke Vercel

**Opsi A: Import dari GitHub (RECOMMENDED)**

1. Buka https://vercel.com
2. Login dengan akun GitHub
3. Klik **"Add New"** → **"Project"**
4. Pilih repository **"marketplace-top-up"**
5. Klik **"Import"**
6. Klik **"Deploy"** (JANGAN ubah apapun)
7. ⏳ Tunggu 1-2 menit hingga deployment selesai
8. ✅ Klik **"Visit"** untuk melihat website Anda!

**Opsi B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd marketplace-top-up
vercel --prod
```

## ✅ Testing Website

Setelah deploy, test fungsi-fungsi berikut:

1. ✅ Buka website, produk game harus muncul (6 produk)
2. ✅ Klik salah satu produk → Detail produk muncul dengan list harga
3. ✅ Pilih nominal → Isi form checkout
4. ✅ Submit order → Muncul instruksi pembayaran
5. ✅ Klik "Cek Transaksi" → Masukkan email → Transaksi muncul

**Jika produk TIDAK muncul:**
- Buka Developer Console (F12) → Tab "Console"
- Lihat apakah ada error merah
- Pastikan credentials Supabase sudah benar di `config.js`
- Pastikan database schema sudah dijalankan

## 🔄 Update Data Produk

Untuk menambah/edit produk:

1. Buka Supabase Dashboard
2. Klik **"Table Editor"** di sidebar
3. Pilih tabel **"products"** atau **"product_items"**
4. Klik **"Insert row"** untuk tambah data
5. Atau klik row yang ada untuk edit
6. Website akan otomatis update (realtime)

## 🛡️ Keamanan

- ✅ Anon key AMAN untuk dicommit (public key)
- ✅ Row Level Security (RLS) sudah aktif
- ✅ User hanya bisa lihat transaksi mereka sendiri
- ❌ JANGAN commit service_role key!

## 💰 Biaya

- **Supabase Free Plan**:
  - 500 MB database
  - 1 GB file storage
  - 2 GB bandwidth/bulan
  - Unlimited API requests
  - Cukup untuk 10,000+ transaksi/bulan

- **Vercel Free Plan**:
  - 100 GB bandwidth/bulan
  - Unlimited deployments
  - SSL certificate gratis
  - Custom domain support

**Total biaya: Rp 0/bulan** ✨

## 📞 Butuh Bantuan?

Jika ada masalah:

1. Buka file `SETUP_GUIDE.md` untuk troubleshooting
2. Cek Supabase logs: Dashboard → Logs
3. Cek Vercel logs: Dashboard → Deployments → [deployment] → Logs
4. Buka GitHub Issues: https://github.com/Rann21/marketplace-top-up/issues

## 🎉 Selamat!

Jika semua langkah di atas sudah dilakukan, website Anda sudah LIVE dan siap menerima transaksi!

**Production URL**: [Akan muncul setelah deploy di Vercel]

---

**⚡ Quick Setup Checklist:**
- [ ] Buat project Supabase
- [ ] Jalankan database schema
- [ ] Copy credentials (URL + anon key)
- [ ] Update `js/config.js`
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Test website
- [ ] 🎉 Done!
