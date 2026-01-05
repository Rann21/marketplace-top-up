import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Use renderer for HTML pages
app.use(renderer)

// Game data
const games = [
  { id: 1, name: 'Mobile Legends', category: 'MOBA', image: '🎮', price: 'Mulai 10rb', popular: true },
  { id: 2, name: 'Free Fire', category: 'Battle Royale', image: '🔥', price: 'Mulai 5rb', popular: true },
  { id: 3, name: 'PUBG Mobile', category: 'Battle Royale', image: '🎯', price: 'Mulai 15rb', popular: true },
  { id: 4, name: 'Genshin Impact', category: 'RPG', image: '⚔️', price: 'Mulai 20rb', popular: true },
  { id: 5, name: 'Valorant', category: 'FPS', image: '💥', price: 'Mulai 25rb', popular: false },
  { id: 6, name: 'Arena of Valor', category: 'MOBA', image: '🏆', price: 'Mulai 10rb', popular: false },
  { id: 7, name: 'Call of Duty Mobile', category: 'FPS', image: '🎖️', price: 'Mulai 15rb', popular: false },
  { id: 8, name: 'Honkai Star Rail', category: 'RPG', image: '🌟', price: 'Mulai 20rb', popular: false },
]

// API Routes
app.get('/api/games', (c) => {
  const category = c.req.query('category')
  if (category && category !== 'Semua') {
    return c.json(games.filter(g => g.category === category))
  }
  return c.json(games)
})

app.get('/api/games/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const game = games.find(g => g.id === id)
  if (!game) {
    return c.json({ error: 'Game tidak ditemukan' }, 404)
  }
  return c.json(game)
})

// Main page
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen">
      {/* Header */}
      <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2">
              <i class="fas fa-gamepad text-3xl text-primary"></i>
              <span class="text-2xl font-bold text-gray-800">TopUpGame</span>
            </div>
            <nav class="hidden md:flex space-x-8">
              <a href="#beranda" class="text-gray-700 hover:text-primary transition font-medium">Beranda</a>
              <a href="#produk" class="text-gray-700 hover:text-primary transition font-medium">Produk</a>
              <a href="#cara-order" class="text-gray-700 hover:text-primary transition font-medium">Cara Order</a>
              <a href="#kontak" class="text-gray-700 hover:text-primary transition font-medium">Kontak</a>
            </nav>
            <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition shadow-md">
              <i class="fas fa-receipt mr-2"></i>Cek Transaksi
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Top Up Game Cepat & Aman
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Proses otomatis dalam 1-5 menit. Harga murah, pelayanan terpercaya!
          </p>
          
          {/* Features */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <i class="fas fa-bolt text-4xl mb-3 text-yellow-300"></i>
              <h3 class="font-semibold text-lg">Proses Cepat</h3>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <i class="fas fa-shield-alt text-4xl mb-3 text-green-300"></i>
              <h3 class="font-semibold text-lg">100% Aman</h3>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <i class="fas fa-tags text-4xl mb-3 text-red-300"></i>
              <h3 class="font-semibold text-lg">Harga Murah</h3>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <i class="fas fa-headset text-4xl mb-3 text-purple-300"></i>
              <h3 class="font-semibold text-lg">Support 24/7</h3>
            </div>
          </div>

          <a href="#produk" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
            <i class="fas fa-rocket mr-2"></i>Mulai Top Up
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">Pilih Game Favorit</h2>
          <p class="text-center text-gray-600 mb-10 text-lg">Berbagai pilihan game populer dengan harga terjangkau</p>
          
          {/* Category Filter */}
          <div class="flex flex-wrap justify-center gap-3 mb-12" id="category-filter">
            <button data-category="Semua" class="category-btn active px-6 py-3 rounded-full font-medium transition bg-primary text-white">
              Semua
            </button>
            <button data-category="MOBA" class="category-btn px-6 py-3 rounded-full font-medium transition bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300">
              MOBA
            </button>
            <button data-category="Battle Royale" class="category-btn px-6 py-3 rounded-full font-medium transition bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300">
              Battle Royale
            </button>
            <button data-category="RPG" class="category-btn px-6 py-3 rounded-full font-medium transition bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300">
              RPG
            </button>
            <button data-category="FPS" class="category-btn px-6 py-3 rounded-full font-medium transition bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300">
              FPS
            </button>
          </div>

          {/* Game Grid */}
          <div id="game-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map(game => (
              <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 game-card" data-category={game.category}>
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-8xl">
                  {game.image}
                </div>
                <div class="p-6">
                  {game.popular && (
                    <span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                      <i class="fas fa-fire mr-1"></i>Popular
                    </span>
                  )}
                  <h3 class="text-xl font-bold mb-2 text-gray-800">{game.name}</h3>
                  <p class="text-gray-600 mb-4">
                    <i class="fas fa-tag mr-1"></i>{game.price}
                  </p>
                  <button class="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition font-semibold">
                    <i class="fas fa-shopping-cart mr-2"></i>Top Up Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div id="no-results" class="hidden text-center py-12">
            <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <p class="text-gray-500 text-xl">Tidak ada game dalam kategori ini</p>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="cara-order" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Cara Order</h2>
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
              <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Pilih Game</h3>
              <p class="text-gray-600">Pilih game yang ingin kamu top up dari daftar yang tersedia</p>
            </div>
            <div class="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
              <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Masukkan Data</h3>
              <p class="text-gray-600">Isi ID game dan pilih nominal diamond yang diinginkan</p>
            </div>
            <div class="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
              <div class="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Bayar & Terima</h3>
              <p class="text-gray-600">Lakukan pembayaran dan diamond akan masuk otomatis 1-5 menit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" class="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-6">Butuh Bantuan?</h2>
          <p class="text-xl mb-8 text-gray-300">Tim support kami siap membantu 24/7</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/6281234567890" class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center">
              <i class="fab fa-whatsapp text-2xl mr-3"></i>WhatsApp
            </a>
            <a href="https://t.me/topupgame" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center">
              <i class="fab fa-telegram text-2xl mr-3"></i>Telegram
            </a>
            <a href="mailto:support@topupgame.com" class="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center">
              <i class="fas fa-envelope text-2xl mr-3"></i>Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-900 text-gray-300 py-8">
        <div class="container mx-auto px-4 text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <i class="fas fa-gamepad text-2xl text-primary"></i>
            <span class="text-xl font-bold">TopUpGame</span>
          </div>
          <p class="mb-4">Platform top up game terpercaya di Indonesia</p>
          <p class="text-sm text-gray-500">&copy; 2024 TopUpGame. All rights reserved.</p>
        </div>
      </footer>

      {/* JavaScript for category filter */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            const gameCards = document.querySelectorAll('.game-card');
            const noResults = document.getElementById('no-results');
            const gameGrid = document.getElementById('game-grid');

            categoryButtons.forEach(button => {
              button.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active button
                categoryButtons.forEach(btn => {
                  btn.classList.remove('active', 'bg-primary', 'text-white');
                  btn.classList.add('bg-white', 'text-gray-700');
                });
                this.classList.add('active', 'bg-primary', 'text-white');
                this.classList.remove('bg-white', 'text-gray-700');

                // Filter games
                let visibleCount = 0;
                gameCards.forEach(card => {
                  if (category === 'Semua' || card.dataset.category === category) {
                    card.style.display = 'block';
                    visibleCount++;
                  } else {
                    card.style.display = 'none';
                  }
                });

                // Show/hide no results message
                if (visibleCount === 0) {
                  gameGrid.style.display = 'none';
                  noResults.classList.remove('hidden');
                } else {
                  gameGrid.style.display = 'grid';
                  noResults.classList.add('hidden');
                }
              });
            });

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              });
            });
          });
        `
      }} />
    </div>
  )
})

export default app
