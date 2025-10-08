# MERN-WK2
# Task 1: Express.js Setup
Initialize a new Node.js project <BR>
Install Express.js and required dependencies
Create a basic Express server that listens on port 3000
Implement a "Hello World" route at the root endpoint
# Task 2: RESTful API Routes
Create a resource called products with the following fields:
id (unique identifier)
name (string)
description (string)
price (number)
category (string)
inStock (boolean)
Implement the following RESTful routes:
GET /api/products: List all products
GET /api/products/:id: Get a specific product by ID
POST /api/products: Create a new product
PUT /api/products/:id: Update an existing product
DELETE /api/products/:id: Delete a product
# Task 3: Middleware Implementation
Create a custom logger middleware that logs the request method, URL, and timestamp
Implement a middleware to parse JSON request bodies
Create an authentication middleware that checks for an API key in the request headers
Add validation middleware for the product creation and update routes
# Task 4: Error Handling
Implement global error handling middleware
Create custom error classes for different types of errors (e.g., NotFoundError, ValidationError)
Add proper error responses with appropriate HTTP status codes
Handle asynchronous errors using try/catch blocks or a wrapper function
# Task 5: Advanced Features
Implement query parameters for filtering products by category
Add pagination support for the product listing endpoint
Create a search endpoint that allows searching products by name
Implement route for getting product statistics (e.g., count by category)
