# Tutorial Setup - Marketplace Top Up Game

## 1. Setup Supabase Database

### Buat Project Baru di Supabase
1. Buka https://supabase.com/dashboard
2. Klik "New Project"
3. Isi nama project: `marketplace-top-up`
4. Isi database password (simpan password ini!)
5. Pilih region terdekat (Singapore)
6. Klik "Create new project"
7. Tunggu beberapa menit hingga project siap

### Jalankan Database Schema
1. Buka project Anda di Supabase Dashboard
2. Klik menu "SQL Editor" di sidebar kiri
3. Klik "New Query"
4. Copy seluruh isi file `database/schema.sql`
5. Paste ke SQL Editor
6. Klik tombol "Run" (atau tekan Ctrl+Enter)
7. Tunggu hingga query selesai (akan muncul "Success")

### Dapatkan Credentials
1. Klik menu "Settings" (ikon gear) di sidebar kiri
2. Klik "API" di submenu
3. Salin **Project URL** (contoh: `https://xxxxx.supabase.co`)
4. Salin **anon/public key** (key yang panjang)

## 2. Konfigurasi Frontend

### Update File Config
1. Buka file `js/config.js`
2. Ganti `YOUR_SUPABASE_URL` dengan Project URL Anda
3. Ganti `YOUR_SUPABASE_ANON_KEY` dengan anon key Anda
4. Simpan file

Contoh:
```javascript
const SUPABASE_CONFIG = {
  url: 'https://abcdefgh.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

## 3. Testing Lokal

### Jalankan di Localhost
```bash
# Menggunakan Python (sudah terinstall di kebanyakan sistem)
python3 -m http.server 3000

# Atau menggunakan npm
npm run dev
```

Buka browser dan akses: http://localhost:3000

### Cek Fungsi-Fungsi
- ✅ Halaman utama loading dengan benar
- ✅ Produk game muncul di halaman
- ✅ Klik produk untuk melihat detail dan harga
- ✅ Form checkout bisa diisi
- ✅ Transaksi bisa dibuat
- ✅ Cek transaksi berfungsi

## 4. Deploy ke Vercel

### Cara 1: Deploy via GitHub (RECOMMENDED)
1. Push code ke GitHub (sudah dilakukan)
2. Buka https://vercel.com
3. Login dengan akun GitHub
4. Klik "Add New" → "Project"
5. Import repository `marketplace-top-up`
6. Klik "Deploy"
7. Tunggu hingga deployment selesai
8. Salin URL production

### Cara 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Setup Environment Variables (Optional)
Jika ingin menggunakan environment variables:
1. Di Vercel Dashboard, buka project Anda
2. Klik "Settings" → "Environment Variables"
3. Tambahkan:
   - `SUPABASE_URL` = Project URL Anda
   - `SUPABASE_ANON_KEY` = Anon key Anda
4. Deploy ulang project

## 5. Custom Domain (Optional)

### Tambah Domain Kustom
1. Di Vercel Dashboard, buka project
2. Klik "Settings" → "Domains"
3. Tambahkan domain Anda (e.g., `topupgame.com`)
4. Update DNS record di registrar domain Anda:
   - Type: `CNAME`
   - Name: `@` atau `www`
   - Value: `cname.vercel-dns.com`
5. Tunggu DNS propagation (5-60 menit)

## 6. Maintenance & Monitoring

### Cek Database
Akses Supabase Dashboard → Table Editor untuk:
- Melihat data products
- Melihat transaksi
- Edit data manual jika perlu

### Update Produk
1. Buka Supabase Dashboard
2. Klik "Table Editor"
3. Pilih table `products` atau `product_items`
4. Tambah/edit data sesuai kebutuhan

### Monitoring Transaksi
1. Buka Supabase Dashboard
2. Klik "Table Editor" → `transactions`
3. Filter berdasarkan status, tanggal, dll
4. Update status transaksi jika perlu

## 7. Troubleshooting

### Produk tidak muncul
- Cek koneksi internet
- Buka Console browser (F12) untuk lihat error
- Pastikan Supabase credentials benar
- Pastikan database schema sudah dijalankan

### Transaksi gagal dibuat
- Cek RLS (Row Level Security) di Supabase
- Pastikan policy sudah dibuat dengan benar
- Cek Console browser untuk error detail

### Deploy gagal di Vercel
- Pastikan semua file sudah ter-commit
- Cek build logs di Vercel Dashboard
- Pastikan tidak ada error di code

## 8. Fitur Lanjutan (Coming Soon)

- [ ] Admin Dashboard untuk manage produk & transaksi
- [ ] Integrasi payment gateway real (Midtrans, Xendit)
- [ ] Email notification untuk customer
- [ ] WhatsApp notification otomatis
- [ ] Sistem refund otomatis
- [ ] Loyalty points & rewards

## Support

Jika ada pertanyaan atau masalah:
- Email: support@topupgame.com
- WhatsApp: +62 812-3456-7890
- GitHub Issues: https://github.com/Rann21/marketplace-top-up/issues
