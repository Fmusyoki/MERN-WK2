# MERN-WK2
## Getting Started

### Prerequisites
- Node.js v18 or higher  
- npm (comes with Node.js)  
- Postman, Thunder Client, or cURL (for testing endpoints)


### Installation

Clone the repository the repo

# Task 1: Express.js Setup
Initialize a new Node.js project <BR>
Install Express.js and required dependencies <BR>
Create a basic Express server that listens on port 3000 <BR>
Implement a "Hello World" route at the root endpoint <BR>
# Task 2: RESTful API Routes
Create a resource called products with the following fields: <BR>
id (unique identifier) <BR>
name (string)<BR>
description (string)<BR>
price (number)<BR>
category (string)<BR>
inStock (boolean)<BR>
Implement the following RESTful routes:<BR>
GET /api/products: List all products<BR>
GET /api/products/:id: Get a specific product by ID<BR>
POST /api/products: Create a new product<BR>
PUT /api/products/:id: Update an existing product<BR>
DELETE /api/products/:id: Delete a product<BR>
# Task 3: Middleware Implementation
Create a custom logger middleware that logs the request method, URL, and timestamp<BR>
Implement a middleware to parse JSON request bodies<BR>
Create an authentication middleware that checks for an API key in the request headers<BR>
Add validation middleware for the product creation and update routes<BR>
# Task 4: Error Handling
Implement global error handling middleware<BR>
Create custom error classes for different types of errors (e.g., NotFoundError, ValidationError)<BR>
Add proper error responses with appropriate HTTP status codes<BR>
Handle asynchronous errors using try/catch blocks or a wrapper function<BR>
# Task 5: Advanced Features
Implement query parameters for filtering products by category<BR>
Add pagination support for the product listing endpoint<BR>
Create a search endpoint that allows searching products by name<BR>
Implement route for getting product statistics (e.g., count by category)<BR>
# SCREENSHOTS OF SUCCESSFULL QUERIES
<img width="1911" height="1018" alt="image" src="https://github.com/user-attachments/assets/30321bda-0d9a-4a6e-8e4c-9289bc43f96b" />
<img width="1917" height="1019" alt="image" src="https://github.com/user-attachments/assets/591febf9-4f05-4096-b4ad-f21e081bd372" />

