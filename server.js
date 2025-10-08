const express = require('express');
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());


// Simple authentication middleware
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345') {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }
  next();
};

// Validation middleware
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || price == null) {
    return res.status(400).json({ message: 'Name and price are required fields' });
  }
  next();
};


// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST new product
app.post('/api/products', (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    category,
    inStock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  Object.assign(product, req.body);
  res.json(product);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products.splice(index, 1);
  res.json({ message: 'Product deleted' });
});
// GET /api/products filtering and pagination
app.get('/api/products', (req, res) => {
  let results = [...products];

  // Filtering by category
  const { category, page = 1, limit = 5 } = req.query;
  if (category) {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
    // Pagination
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  const paginated = results.slice(start, end);

  res.json({
    total: results.length,
    page: parseInt(page),
    limit: parseInt(limit),
    products: paginated,
  });
});

app.get('', (req, res) => {
    res.send('Hello PLP');
});

app.listen(PORT, () => {
    console.log('Server is running on port${PORT}');
})

