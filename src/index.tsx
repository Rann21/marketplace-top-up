import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for all routes
app.use('*', cors())

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

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok', 
    message: 'Top Up Game API is running',
    timestamp: new Date().toISOString()
  })
})

// Root path handler - redirect to static index.html
app.get('/', (c) => {
  return c.text('Static files are served by Cloudflare Pages. In production, this will serve index.html automatically. For local testing, use: https://your-project.pages.dev', 200)
})

export default app
