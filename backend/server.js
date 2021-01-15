const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const products = require('./data/products');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, resp) => {
  resp.send('Api is running!');
})

app.get('/api/products', (req, resp) => {
  resp.json(products);
})

app.get('/api/products/:id', (req, resp) => {
  const product = products.find(p => p._id === req.params.id);
  resp.json(product);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`));