// Supabase Client Initialization
let supabase;

// Initialize Supabase
function initSupabase() {
  try {
    const { createClient } = supabase_js;
    supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log('Supabase initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    showToast('Gagal terhubung ke database. Silakan refresh halaman.', 'error');
    return false;
  }
}

// Get all products
async function getProducts(category = 'all') {
  try {
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('name');

    if (category !== 'all') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    showToast('Gagal memuat produk', 'error');
    return [];
  }
}

// Get product items by product ID
async function getProductItems(productId) {
  try {
    const { data, error } = await supabase
      .from('product_items')
      .select('*')
      .eq('product_id', productId)
      .eq('is_active', true)
      .order('price');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching product items:', error);
    showToast('Gagal memuat item produk', 'error');
    return [];
  }
}

// Get product by ID
async function getProductById(productId) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Create transaction
async function createTransaction(transactionData) {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .insert([transactionData])
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error creating transaction:', error);
    return { success: false, error: error.message };
  }
}

// Get transactions by user ID
async function getTransactionsByUserId(userId) {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select(`
        *,
        product_items (
          name,
          products (
            name,
            image_url
          )
        )
      `)
      .or(`user_id.eq.${userId},user_email.eq.${userId},user_phone.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    showToast('Gagal memuat transaksi', 'error');
    return [];
  }
}

// Update transaction status
async function updateTransactionStatus(transactionId, status) {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', transactionId)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error updating transaction:', error);
    return { success: false, error: error.message };
  }
}

// Format currency to IDR
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(dateString));
}

// Show toast notification
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
