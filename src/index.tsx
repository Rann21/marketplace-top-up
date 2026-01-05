import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for HTML pages
app.use(renderer)

// Enhanced game data with more details
const games = [
  { 
    id: 1, 
    name: 'Mobile Legends', 
    category: 'MOBA', 
    image: '🎮', 
    price: 'Mulai 10rb', 
    popular: true,
    description: 'Battle Arena 5v5 terpopuler di Indonesia',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 2, 
    name: 'Free Fire', 
    category: 'Battle Royale', 
    image: '🔥', 
    price: 'Mulai 5rb', 
    popular: true,
    description: 'Battle royale dengan 50 pemain dalam 10 menit',
    gradient: 'from-orange-500 to-red-500'
  },
  { 
    id: 3, 
    name: 'PUBG Mobile', 
    category: 'Battle Royale', 
    image: '🎯', 
    price: 'Mulai 15rb', 
    popular: true,
    description: 'Experience battle royale di smartphone',
    gradient: 'from-yellow-500 to-orange-500'
  },
  { 
    id: 4, 
    name: 'Genshin Impact', 
    category: 'RPG', 
    image: '⚔️', 
    price: 'Mulai 20rb', 
    popular: true,
    description: 'Open-world action RPG dengan grafis memukau',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    id: 5, 
    name: 'Valorant', 
    category: 'FPS', 
    image: '💥', 
    price: 'Mulai 25rb', 
    popular: false,
    description: '5v5 tactical shooter dengan kemampuan unik',
    gradient: 'from-red-500 to-rose-500'
  },
  { 
    id: 6, 
    name: 'Arena of Valor', 
    category: 'MOBA', 
    image: '🏆', 
    price: 'Mulai 10rb', 
    popular: false,
    description: 'MOBA 5v5 dengan hero legendary',
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    id: 7, 
    name: 'Call of Duty Mobile', 
    category: 'FPS', 
    image: '🎖️', 
    price: 'Mulai 15rb', 
    popular: false,
    description: 'FPS action dengan mode multiplayer seru',
    gradient: 'from-gray-700 to-gray-900'
  },
  { 
    id: 8, 
    name: 'Honkai Star Rail', 
    category: 'RPG', 
    image: '🌟', 
    price: 'Mulai 20rb', 
    popular: false,
    description: 'Space fantasy RPG dengan turn-based combat',
    gradient: 'from-indigo-500 to-purple-500'
  },
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

// Main page with enhanced design
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      
      {/* Floating Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>

      {/* Header - Glassmorphism style */}
      <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg shadow-gray-200/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between py-4">
            {/* Logo */}
            <div class="flex items-center space-x-3 group cursor-pointer">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur group-hover:blur-lg transition-all"></div>
                <i class="fas fa-gamepad text-3xl text-white relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl"></i>
              </div>
              <span class="text-2xl font-bold">
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TopUp</span>
                <span class="text-gray-800">Game</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav class="hidden md:flex items-center space-x-1">
              <a href="#beranda" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all hover:bg-blue-50 rounded-lg">Beranda</a>
              <a href="#produk" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all hover:bg-blue-50 rounded-lg">Produk</a>
              <a href="#cara-order" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all hover:bg-blue-50 rounded-lg">Cara Order</a>
              <a href="#kontak" class="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all hover:bg-blue-50 rounded-lg">Kontak</a>
            </nav>

            {/* CTA Button */}
            <button class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-medium">
              <i class="fas fa-receipt"></i>
              <span>Cek Transaksi</span>
            </button>

            {/* Mobile Menu Button */}
            <button class="md:hidden text-gray-700 hover:text-blue-600 transition-colors">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium gradient design */}
      <section id="beranda" class="relative overflow-hidden py-20 sm:py-28">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-5xl mx-auto animate-fade-in">
            
            {/* Badge */}
            <div class="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full mb-6 animate-slide-down">
              <i class="fas fa-star text-yellow-500"></i>
              <span class="text-sm font-semibold">Platform Top Up Terpercaya #1 di Indonesia</span>
            </div>

            {/* Main Heading */}
            <h1 class="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Top Up Game
              </span>
              <br />
              <span class="text-gray-800">Cepat & Aman</span>
            </h1>

            {/* Subtitle */}
            <p class="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Proses otomatis dalam <span class="font-bold text-blue-600">1-5 menit</span>. 
              Harga terjangkau, pelayanan terpercaya, customer service 24/7!
            </p>

            {/* Feature Pills */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i class="fas fa-bolt text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-gray-800 mb-1">Proses Cepat</h3>
                <p class="text-sm text-gray-600">1-5 menit</p>
              </div>

              <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div class="bg-gradient-to-br from-green-400 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i class="fas fa-shield-alt text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-gray-800 mb-1">100% Aman</h3>
                <p class="text-sm text-gray-600">Terjamin</p>
              </div>

              <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div class="bg-gradient-to-br from-red-400 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i class="fas fa-tags text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-gray-800 mb-1">Harga Murah</h3>
                <p class="text-sm text-gray-600">Terjangkau</p>
              </div>

              <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div class="bg-gradient-to-br from-purple-400 to-indigo-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i class="fas fa-headset text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-gray-800 mb-1">Support 24/7</h3>
                <p class="text-sm text-gray-600">Selalu Siap</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#produk" class="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <i class="fas fa-rocket group-hover:translate-x-1 transition-transform"></i>
                <span>Mulai Top Up Sekarang</span>
              </a>
              <a href="#cara-order" class="inline-flex items-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <i class="fas fa-play-circle"></i>
                <span>Cara Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div class="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" class="w-full h-auto fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Products Section - Clean card design */}
      <section id="produk" class="py-20 bg-white relative">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
              Pilih <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Game Favorit</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan game populer dengan harga terjangkau dan proses tercepat
            </p>
          </div>
          
          {/* Category Filter - Modern pill design */}
          <div class="flex flex-wrap justify-center gap-3 mb-12" id="category-filter">
            <button data-category="Semua" class="category-btn active px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105">
              <i class="fas fa-th mr-2"></i>Semua
            </button>
            <button data-category="MOBA" class="category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-200 hover:border-transparent hover:shadow-lg hover:scale-105">
              <i class="fas fa-chess mr-2"></i>MOBA
            </button>
            <button data-category="Battle Royale" class="category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-200 hover:border-transparent hover:shadow-lg hover:scale-105">
              <i class="fas fa-crosshairs mr-2"></i>Battle Royale
            </button>
            <button data-category="RPG" class="category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-200 hover:border-transparent hover:shadow-lg hover:scale-105">
              <i class="fas fa-dragon mr-2"></i>RPG
            </button>
            <button data-category="FPS" class="category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-200 hover:border-transparent hover:shadow-lg hover:scale-105">
              <i class="fas fa-bullseye mr-2"></i>FPS
            </button>
          </div>

          {/* Game Grid - Premium cards */}
          <div id="game-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {games.map((game, index) => (
              <div 
                class="game-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 animate-scale-in" 
                data-category={game.category}
                style={`animation-delay: ${index * 0.1}s;`}
              >
                {/* Card Image/Icon Area */}
                <div class={`relative bg-gradient-to-br ${game.gradient} h-48 flex items-center justify-center overflow-hidden`}>
                  <div class="absolute inset-0 bg-black/10"></div>
                  <div class="text-7xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {game.image}
                  </div>
                  {/* Popular Badge */}
                  {game.popular && (
                    <div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1 animate-pulse">
                      <i class="fas fa-fire"></i>
                      <span>POPULER</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {game.name}
                  </h3>
                  <p class="text-sm text-gray-600 mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  
                  {/* Price */}
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-tag text-blue-600"></i>
                      <span class="text-lg font-bold text-gray-800">{game.price}</span>
                    </div>
                    <span class="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{game.category}</span>
                  </div>

                  {/* CTA Button */}
                  <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Top Up Sekarang</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          <div id="no-results" class="hidden text-center py-16 animate-fade-in">
            <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <i class="fas fa-search text-4xl text-gray-400"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-700 mb-2">Tidak ada game ditemukan</h3>
            <p class="text-gray-500">Coba kategori lain atau pilih "Semua" untuk melihat semua game</p>
          </div>
        </div>
      </section>

      {/* How to Order Section - Step by step with icons */}
      <section id="cara-order" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
              Cara <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Order</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Proses top-up sangat mudah dan cepat, hanya 3 langkah sederhana
            </p>
          </div>

          {/* Steps */}
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div class="relative group animate-slide-up" style="animation-delay: 0.1s;">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                    <i class="fas fa-gamepad text-4xl text-blue-600"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Pilih Game</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Pilih game yang ingin kamu top up dari daftar game populer yang tersedia
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div class="relative group animate-slide-up" style="animation-delay: 0.2s;">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-200 transition-colors">
                    <i class="fas fa-keyboard text-4xl text-purple-600"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Masukkan Data</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Isi ID game dan pilih nominal diamond atau UC yang kamu inginkan
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div class="relative group animate-slide-up" style="animation-delay: 0.3s;">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div class="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6 group-hover:bg-green-200 transition-colors">
                    <i class="fas fa-credit-card text-4xl text-green-600"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Bayar & Terima</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Lakukan pembayaran dan diamond akan masuk otomatis dalam 1-5 menit
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div class="mt-16 text-center">
            <div class="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
              <i class="fas fa-check-circle text-3xl text-green-500"></i>
              <div class="text-left">
                <p class="text-sm text-gray-500">Sudah dipercaya oleh</p>
                <p class="text-2xl font-bold text-gray-800">50.000+ <span class="text-blue-600">Gamers</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern gradient */}
      <section id="kontak" class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        
        {/* Decorative elements */}
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl sm:text-5xl font-black mb-4">
              Butuh <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Bantuan?</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              Tim support kami siap membantu kamu 24/7 melalui berbagai channel
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a href="https://wa.me/6281234567890" class="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fab fa-whatsapp text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold mb-2">WhatsApp</h3>
              <p class="text-gray-300 mb-4">Chat langsung dengan tim kami</p>
              <div class="flex items-center text-green-400 font-semibold">
                <span>Hubungi Sekarang</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </a>

            {/* Telegram */}
            <a href="https://t.me/topupgame" class="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fab fa-telegram text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold mb-2">Telegram</h3>
              <p class="text-gray-300 mb-4">Diskusi di grup Telegram</p>
              <div class="flex items-center text-blue-400 font-semibold">
                <span>Join Channel</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:support@topupgame.com" class="group bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-envelope text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold mb-2">Email</h3>
              <p class="text-gray-300 mb-4">Kirim email untuk pertanyaan</p>
              <div class="flex items-center text-red-400 font-semibold">
                <span>Kirim Email</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </a>
          </div>

          {/* Social Proof */}
          <div class="mt-16 text-center">
            <p class="text-gray-400 mb-4">Kami juga hadir di</p>
            <div class="flex justify-center space-x-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-instagram text-3xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-facebook text-3xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-twitter text-3xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-tiktok text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean and minimal */}
      <footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div class="flex items-center space-x-3 mb-6 md:mb-0">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <i class="fas fa-gamepad text-2xl text-white"></i>
              </div>
              <div>
                <span class="text-xl font-bold text-white">TopUpGame</span>
                <p class="text-sm text-gray-500">Platform Top Up Terpercaya</p>
              </div>
            </div>

            {/* Links */}
            <div class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a href="#beranda" class="hover:text-white transition-colors">Beranda</a>
              <a href="#produk" class="hover:text-white transition-colors">Produk</a>
              <a href="#cara-order" class="hover:text-white transition-colors">Cara Order</a>
              <a href="#kontak" class="hover:text-white transition-colors">Kontak</a>
              <a href="#" class="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" class="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>

          {/* Copyright */}
          <div class="text-center mt-8 pt-8 border-t border-gray-800">
            <p class="text-sm">&copy; 2024 TopUpGame. All rights reserved. Made with <i class="fas fa-heart text-red-500"></i> in Indonesia</p>
          </div>
        </div>
      </footer>

      {/* JavaScript for interactivity */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Category filter functionality
            const categoryButtons = document.querySelectorAll('.category-btn');
            const gameCards = document.querySelectorAll('.game-card');
            const noResults = document.getElementById('no-results');
            const gameGrid = document.getElementById('game-grid');

            categoryButtons.forEach(button => {
              button.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active button with animation
                categoryButtons.forEach(btn => {
                  btn.classList.remove('active', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30', 'scale-105');
                  btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
                });
                
                this.classList.add('active', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30', 'scale-105');
                this.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');

                // Filter games with smooth animation
                let visibleCount = 0;
                gameCards.forEach((card, index) => {
                  if (category === 'Semua' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'scaleIn 0.5s ease-out forwards';
                    card.style.animationDelay = (index * 0.1) + 's';
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

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  const headerOffset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              });
            });

            // Add scroll reveal animation
            const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                }
              });
            }, observerOptions);

            // Observe elements for scroll animations
            document.querySelectorAll('.game-card, .step-card').forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(20px)';
              el.style.transition = 'all 0.6s ease-out';
              observer.observe(el);
            });

            // Header shadow on scroll
            let lastScroll = 0;
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', () => {
              const currentScroll = window.pageYOffset;
              
              if (currentScroll > 100) {
                header.classList.add('shadow-xl');
              } else {
                header.classList.remove('shadow-xl');
              }
              
              lastScroll = currentScroll;
            });

            // Add loading animation
            window.addEventListener('load', () => {
              document.body.style.opacity = '0';
              setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in';
                document.body.style.opacity = '1';
              }, 100);
            });
          });
        `
      }} />
    </div>
  )
})

export default app
