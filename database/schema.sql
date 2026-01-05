-- Marketplace Top Up Game Database Schema
-- Jalankan query ini di Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table (Game products)
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Product items table (Diamond/UC packages)
CREATE TABLE IF NOT EXISTS product_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  stock INTEGER DEFAULT 999999,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  user_email TEXT,
  user_phone TEXT,
  product_item_id UUID REFERENCES product_items(id),
  game_id TEXT NOT NULL,
  server_id TEXT,
  amount NUMERIC(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_method TEXT,
  payment_proof_url TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_product_items_product_id ON product_items(product_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_status ON transactions(status);
CREATE INDEX IF NOT EXISTS idx_transactions_created_at ON transactions(created_at DESC);

-- Insert sample products
INSERT INTO products (name, category, image_url, description) VALUES
('Mobile Legends', 'MOBA', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400', 'Top up diamond Mobile Legends Bang Bang dengan proses cepat dan aman'),
('Free Fire', 'Battle Royale', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400', 'Beli diamond Free Fire murah dan cepat untuk kebutuhan gaming Anda'),
('PUBG Mobile', 'Battle Royale', 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', 'Top up UC PUBG Mobile dengan harga terbaik dan proses instan'),
('Genshin Impact', 'RPG', 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400', 'Beli Genesis Crystal Genshin Impact untuk mendapatkan karakter favorit Anda'),
('Valorant', 'FPS', 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400', 'Top up Valorant Points untuk skin senjata dan agent terbaru'),
('Call of Duty Mobile', 'FPS', 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', 'Beli CP Call of Duty Mobile untuk battle pass dan item eksklusif');

-- Insert sample product items for Mobile Legends
INSERT INTO product_items (product_id, name, price) 
SELECT id, '50 Diamond', 15000 FROM products WHERE name = 'Mobile Legends'
UNION ALL
SELECT id, '100 Diamond', 29000 FROM products WHERE name = 'Mobile Legends'
UNION ALL
SELECT id, '250 Diamond', 72000 FROM products WHERE name = 'Mobile Legends'
UNION ALL
SELECT id, '500 Diamond', 142000 FROM products WHERE name = 'Mobile Legends'
UNION ALL
SELECT id, '1000 Diamond', 282000 FROM products WHERE name = 'Mobile Legends'
UNION ALL
SELECT id, '2000 Diamond', 560000 FROM products WHERE name = 'Mobile Legends';

-- Insert sample product items for Free Fire
INSERT INTO product_items (product_id, name, price) 
SELECT id, '50 Diamond', 7000 FROM products WHERE name = 'Free Fire'
UNION ALL
SELECT id, '100 Diamond', 14000 FROM products WHERE name = 'Free Fire'
UNION ALL
SELECT id, '210 Diamond', 28000 FROM products WHERE name = 'Free Fire'
UNION ALL
SELECT id, '500 Diamond', 70000 FROM products WHERE name = 'Free Fire'
UNION ALL
SELECT id, '1000 Diamond', 140000 FROM products WHERE name = 'Free Fire'
UNION ALL
SELECT id, '2000 Diamond', 280000 FROM products WHERE name = 'Free Fire';

-- Insert sample product items for PUBG Mobile
INSERT INTO product_items (product_id, name, price) 
SELECT id, '60 UC', 16000 FROM products WHERE name = 'PUBG Mobile'
UNION ALL
SELECT id, '325 UC', 82000 FROM products WHERE name = 'PUBG Mobile'
UNION ALL
SELECT id, '660 UC', 162000 FROM products WHERE name = 'PUBG Mobile'
UNION ALL
SELECT id, '1800 UC', 405000 FROM products WHERE name = 'PUBG Mobile'
UNION ALL
SELECT id, '3850 UC', 810000 FROM products WHERE name = 'PUBG Mobile';

-- Insert sample product items for Genshin Impact
INSERT INTO product_items (product_id, name, price) 
SELECT id, '60 Genesis Crystal', 16000 FROM products WHERE name = 'Genshin Impact'
UNION ALL
SELECT id, '330 Genesis Crystal', 82000 FROM products WHERE name = 'Genshin Impact'
UNION ALL
SELECT id, '1090 Genesis Crystal', 252000 FROM products WHERE name = 'Genshin Impact'
UNION ALL
SELECT id, '2240 Genesis Crystal', 490000 FROM products WHERE name = 'Genshin Impact';

-- Insert sample product items for Valorant
INSERT INTO product_items (product_id, name, price) 
SELECT id, '475 VP', 50000 FROM products WHERE name = 'Valorant'
UNION ALL
SELECT id, '1000 VP', 105000 FROM products WHERE name = 'Valorant'
UNION ALL
SELECT id, '2050 VP', 210000 FROM products WHERE name = 'Valorant'
UNION ALL
SELECT id, '3650 VP', 367000 FROM products WHERE name = 'Valorant';

-- Insert sample product items for Call of Duty Mobile
INSERT INTO product_items (product_id, name, price) 
SELECT id, '53 CP', 15000 FROM products WHERE name = 'Call of Duty Mobile'
UNION ALL
SELECT id, '106 CP', 29000 FROM products WHERE name = 'Call of Duty Mobile'
UNION ALL
SELECT id, '264 CP', 72000 FROM products WHERE name = 'Call of Duty Mobile'
UNION ALL
SELECT id, '528 CP', 142000 FROM products WHERE name = 'Call of Duty Mobile'
UNION ALL
SELECT id, '1056 CP', 282000 FROM products WHERE name = 'Call of Duty Mobile';

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view active products" ON products
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active product items" ON product_items
  FOR SELECT USING (is_active = true);

-- Create policies for transactions (users can only see their own)
CREATE POLICY "Users can view own transactions" ON transactions
  FOR SELECT USING (user_id = current_setting('request.jwt.claims', true)::json->>'sub' OR user_email = current_setting('request.jwt.claims', true)::json->>'email');

CREATE POLICY "Users can insert own transactions" ON transactions
  FOR INSERT WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_items_updated_at BEFORE UPDATE ON product_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
