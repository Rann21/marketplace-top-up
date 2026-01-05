import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Platform top-up game terpercaya dan terjangkau. Proses cepat 1-5 menit untuk Mobile Legends, Free Fire, PUBG, dan game populer lainnya." />
        <meta name="keywords" content="top up game, diamond murah, mobile legends, free fire, pubg mobile, genshin impact" />
        <title>TopUpGame - Top Up Game Cepat, Aman & Terpercaya</title>
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Google Fonts - Inter for modern look */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: {
                      50: '#eff6ff',
                      100: '#dbeafe',
                      200: '#bfdbfe',
                      300: '#93c5fd',
                      400: '#60a5fa',
                      500: '#3b82f6',
                      600: '#2563eb',
                      700: '#1d4ed8',
                      800: '#1e40af',
                      900: '#1e3a8a',
                    },
                    accent: {
                      DEFAULT: '#8b5cf6',
                      light: '#a78bfa',
                      dark: '#7c3aed',
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                  },
                  animation: {
                    'fade-in': 'fadeIn 0.6s ease-out',
                    'slide-up': 'slideUp 0.6s ease-out',
                    'slide-down': 'slideDown 0.4s ease-out',
                    'scale-in': 'scaleIn 0.5s ease-out',
                    'float': 'float 3s ease-in-out infinite',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: '0' },
                      '100%': { opacity: '1' },
                    },
                    slideUp: {
                      '0%': { transform: 'translateY(20px)', opacity: '0' },
                      '100%': { transform: 'translateY(0)', opacity: '1' },
                    },
                    slideDown: {
                      '0%': { transform: 'translateY(-20px)', opacity: '0' },
                      '100%': { transform: 'translateY(0)', opacity: '1' },
                    },
                    scaleIn: {
                      '0%': { transform: 'scale(0.9)', opacity: '0' },
                      '100%': { transform: 'scale(1)', opacity: '1' },
                    },
                    float: {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  },
                }
              }
            }
          `
        }} />
      </head>
      <body class="bg-gray-50 font-sans antialiased">{children}</body>
    </html>
  )
})
