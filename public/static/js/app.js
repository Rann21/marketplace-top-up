// Global state
let currentProduct = null;
let selectedItem = null;

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize Supabase
  if (!initSupabase()) {
    return;
  }

  // Load products
  await loadProducts();

  // Setup category filter
  setupCategoryFilter();

  // Setup contact form
  setupContactForm();

  // Smooth scroll
  setupSmoothScroll();
});

// Load products
async function loadProducts(category = 'all') {
  const productsGrid = document.getElementById('productsGrid');
  const loading = document.getElementById('productsLoading');
  
  // Show loading
  loading.style.display = 'block';
  productsGrid.innerHTML = '';
  productsGrid.appendChild(loading);

  // Fetch products
  const products = await getProducts(category);

  // Hide loading
  loading.style.display = 'none';

  // Display products
  if (products.length === 0) {
    productsGrid.innerHTML = '<p style="text-align: center; color: var(--text-color);">Tidak ada produk ditemukan</p>';
    return;
  }

  productsGrid.innerHTML = '';
  products.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => showProductDetail(product.id);

  card.innerHTML = `
    <img src="${product.image_url}" alt="${product.name}" class="product-image" 
         onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}'">
    <div class="product-info">
      <span class="product-category">${product.category}</span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description || 'Top up cepat dan aman'}</p>
      <div class="product-footer">
        <div class="product-price">
          <span>Mulai dari</span>
          <span class="price-value" id="min-price-${product.id}">-</span>
        </div>
        <button class="btn-order" onclick="event.stopPropagation(); showProductDetail('${product.id}')">
          <i class="fas fa-shopping-cart"></i> Order
        </button>
      </div>
    </div>
  `;

  // Load minimum price
  loadMinPrice(product.id);

  return card;
}

// Load minimum price for product
async function loadMinPrice(productId) {
  const items = await getProductItems(productId);
  if (items.length > 0) {
    const minPrice = Math.min(...items.map(item => item.price));
    const priceElement = document.getElementById(`min-price-${productId}`);
    if (priceElement) {
      priceElement.textContent = formatCurrency(minPrice);
    }
  }
}

// Setup category filter
function setupCategoryFilter() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Load products by category
      const category = button.dataset.category;
      loadProducts(category);
    });
  });
}

// Show product detail modal
async function showProductDetail(productId) {
  const product = await getProductById(productId);
  if (!product) {
    showToast('Produk tidak ditemukan', 'error');
    return;
  }

  currentProduct = product;
  const items = await getProductItems(productId);

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div class="product-detail">
      <div>
        <img src="${product.image_url}" alt="${product.name}" class="product-detail-image"
             onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}'">
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <span class="product-category">${product.category}</span>
        <p style="margin-top: 1rem;">${product.description || 'Top up cepat dan aman dengan berbagai pilihan nominal'}</p>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Pilih Nominal</h3>
        <div class="items-grid">
          ${items.map(item => `
            <div class="item-card" onclick="selectItem('${item.id}', '${item.name}', ${item.price})">
              <div>
                <div class="item-name">${item.name}</div>
                <div style="font-size: 0.85rem; color: var(--text-color);">Stok: ${item.stock}</div>
              </div>
              <div class="item-price">${formatCurrency(item.price)}</div>
            </div>
          `).join('')}
        </div>

        <form class="checkout-form" onsubmit="processCheckout(event)">
          <div class="form-group">
            <label>ID Game / User ID *</label>
            <input type="text" id="gameId" placeholder="Masukkan ID game Anda" required>
          </div>
          
          <div class="form-group">
            <label>Server ID ${product.name.includes('Mobile Legends') || product.name.includes('PUBG') ? '*' : '(Optional)'}</label>
            <input type="text" id="serverId" placeholder="Masukkan server ID" ${product.name.includes('Mobile Legends') || product.name.includes('PUBG') ? 'required' : ''}>
          </div>

          <div class="form-group">
            <label>Email *</label>
            <input type="email" id="userEmail" placeholder="email@example.com" required>
          </div>

          <div class="form-group">
            <label>Nomor HP / WhatsApp *</label>
            <input type="tel" id="userPhone" placeholder="08123456789" required>
          </div>

          <div class="form-group">
            <label>Metode Pembayaran *</label>
            <select id="paymentMethod" required>
              <option value="">Pilih metode pembayaran</option>
              <option value="gopay">GoPay</option>
              <option value="ovo">OVO</option>
              <option value="dana">DANA</option>
              <option value="bank_transfer">Transfer Bank</option>
              <option value="qris">QRIS</option>
            </select>
          </div>

          <div class="order-summary">
            <div class="summary-item">
              <span>Produk:</span>
              <span id="summaryProduct">-</span>
            </div>
            <div class="summary-item">
              <span>Item:</span>
              <span id="summaryItem">-</span>
            </div>
            <div class="summary-item summary-total">
              <span>Total:</span>
              <span id="summaryTotal">Rp 0</span>
            </div>
          </div>

          <button type="submit" class="btn-checkout" id="btnCheckout" disabled>
            <i class="fas fa-lock"></i> Pilih item terlebih dahulu
          </button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add('active');

  // Update summary
  document.getElementById('summaryProduct').textContent = product.name;
}

// Select item
function selectItem(itemId, itemName, price) {
  // Remove previous selection
  document.querySelectorAll('.item-card').forEach(card => {
    card.classList.remove('selected');
  });

  // Add selection to clicked item
  event.target.closest('.item-card').classList.add('selected');

  // Update selected item
  selectedItem = { id: itemId, name: itemName, price: price };

  // Update summary
  document.getElementById('summaryItem').textContent = itemName;
  document.getElementById('summaryTotal').textContent = formatCurrency(price);

  // Enable checkout button
  const btnCheckout = document.getElementById('btnCheckout');
  btnCheckout.disabled = false;
  btnCheckout.innerHTML = '<i class="fas fa-check-circle"></i> Lanjutkan Pembayaran';
}

// Process checkout
async function processCheckout(event) {
  event.preventDefault();

  if (!selectedItem) {
    showToast('Silakan pilih item terlebih dahulu', 'error');
    return;
  }

  const gameId = document.getElementById('gameId').value;
  const serverId = document.getElementById('serverId').value;
  const userEmail = document.getElementById('userEmail').value;
  const userPhone = document.getElementById('userPhone').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  // Create transaction
  const transactionData = {
    user_id: gameId,
    user_email: userEmail,
    user_phone: userPhone,
    product_item_id: selectedItem.id,
    game_id: gameId,
    server_id: serverId || null,
    amount: selectedItem.price,
    status: 'pending',
    payment_method: paymentMethod
  };

  // Disable button
  const btnCheckout = document.getElementById('btnCheckout');
  btnCheckout.disabled = true;
  btnCheckout.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';

  const result = await createTransaction(transactionData);

  if (result.success) {
    showToast('Transaksi berhasil dibuat! Silakan lakukan pembayaran.', 'success');
    
    // Show payment instructions
    showPaymentInstructions(result.data, paymentMethod);
    
    // Reset form
    selectedItem = null;
    closeProductModal();
  } else {
    showToast('Gagal membuat transaksi: ' + result.error, 'error');
    btnCheckout.disabled = false;
    btnCheckout.innerHTML = '<i class="fas fa-check-circle"></i> Lanjutkan Pembayaran';
  }
}

// Show payment instructions
function showPaymentInstructions(transaction, paymentMethod) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');

  const paymentInfo = {
    gopay: { name: 'GoPay', number: '0812-3456-7890', account: 'TopUpGame Official' },
    ovo: { name: 'OVO', number: '0812-3456-7890', account: 'TopUpGame Official' },
    dana: { name: 'DANA', number: '0812-3456-7890', account: 'TopUpGame Official' },
    bank_transfer: { name: 'Bank Transfer', number: '1234567890', account: 'TopUpGame', bank: 'BCA' },
    qris: { name: 'QRIS', info: 'Scan QR Code di aplikasi pembayaran Anda' }
  };

  const payment = paymentInfo[paymentMethod];

  modalContent.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--success-color);"></i>
      <h2 style="margin-top: 1rem;">Transaksi Berhasil Dibuat!</h2>
      <p style="margin-top: 0.5rem; color: var(--text-color);">ID Transaksi: <strong>${transaction.id}</strong></p>
      
      <div style="background: var(--light-color); padding: 2rem; border-radius: 12px; margin-top: 2rem; text-align: left;">
        <h3 style="margin-bottom: 1rem;">Instruksi Pembayaran</h3>
        <p style="margin-bottom: 0.5rem;"><strong>Metode:</strong> ${payment.name}</p>
        ${payment.bank ? `<p style="margin-bottom: 0.5rem;"><strong>Bank:</strong> ${payment.bank}</p>` : ''}
        ${payment.number ? `<p style="margin-bottom: 0.5rem;"><strong>Nomor:</strong> ${payment.number}</p>` : ''}
        ${payment.account ? `<p style="margin-bottom: 0.5rem;"><strong>Atas Nama:</strong> ${payment.account}</p>` : ''}
        ${payment.info ? `<p style="margin-bottom: 0.5rem;">${payment.info}</p>` : ''}
        <p style="margin-top: 1rem; margin-bottom: 0.5rem;"><strong>Total Pembayaran:</strong></p>
        <p style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${formatCurrency(transaction.amount)}</p>
      </div>

      <div style="background: rgba(124, 58, 237, 0.1); padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
        <p style="font-size: 0.9rem;"><i class="fas fa-info-circle"></i> Setelah transfer, diamond/UC akan diproses otomatis dalam 1-5 menit</p>
      </div>

      <button onclick="closeProductModal()" class="btn-primary" style="margin-top: 2rem; padding: 0.75rem 2rem;">
        Tutup
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// Close product modal
function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  currentProduct = null;
  selectedItem = null;
}

// Show transaction modal
function showTransactionModal() {
  const modal = document.getElementById('transactionModal');
  modal.classList.add('active');
}

// Close transaction modal
function closeTransactionModal() {
  const modal = document.getElementById('transactionModal');
  modal.classList.remove('active');
  document.getElementById('transactionResults').innerHTML = '';
}

// Check transaction
async function checkTransaction(event) {
  event.preventDefault();

  const userId = document.getElementById('transactionUserId').value;
  const resultsDiv = document.getElementById('transactionResults');

  resultsDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i><p>Memuat transaksi...</p></div>';

  const transactions = await getTransactionsByUserId(userId);

  if (transactions.length === 0) {
    resultsDiv.innerHTML = '<p style="text-align: center; color: var(--text-color);">Tidak ada transaksi ditemukan</p>';
    return;
  }

  resultsDiv.innerHTML = transactions.map(tx => `
    <div class="transaction-item">
      <div class="transaction-header">
        <span class="transaction-id">#${tx.id.substring(0, 8)}</span>
        <span class="status-badge status-${tx.status}">${tx.status.toUpperCase()}</span>
      </div>
      <div class="transaction-details">
        <p><strong>Produk:</strong> ${tx.product_items?.products?.name || 'N/A'}</p>
        <p><strong>Item:</strong> ${tx.product_items?.name || 'N/A'}</p>
        <p><strong>Game ID:</strong> ${tx.game_id}</p>
        ${tx.server_id ? `<p><strong>Server ID:</strong> ${tx.server_id}</p>` : ''}
        <p><strong>Total:</strong> ${formatCurrency(tx.amount)}</p>
        <p><strong>Metode:</strong> ${tx.payment_method?.toUpperCase()}</p>
        <p><strong>Tanggal:</strong> ${formatDate(tx.created_at)}</p>
      </div>
    </div>
  `).join('');
}

// Setup contact form
function setupContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.', 'success');
    form.reset();
  });
}

// Setup smooth scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const productModal = document.getElementById('productModal');
  const transactionModal = document.getElementById('transactionModal');
  
  if (event.target === productModal) {
    closeProductModal();
  }
  if (event.target === transactionModal) {
    closeTransactionModal();
  }
}
