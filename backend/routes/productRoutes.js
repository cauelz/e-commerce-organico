const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/productModel');

// @desc Fetch all Products
// @route GET /api/products
// @access Public

router.get('/', asyncHandler(async (req, resp) => {
  const products = await Product.find({});
  resp.json(products);
}))


// @desc Fetch single Products
// @route GET /api/products/:id
// @access Public

router.get('/:id', asyncHandler(async (req, resp) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    resp.json(product)
  } else {
    resp.status(404);
    throw new Error('Product not found!');
  }

}))

module.exports = router;