const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

//@desc    Create new order
//@route   POST /api/orders
//@access  Private

const addOrderItems = asyncHandler(async (req, resp) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems === 0) {
    resp.status(400);
    throw new Error('No order Items');
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    resp.status(201).json(createdOrder);
  }
})

module.exports = { addOrderItems }