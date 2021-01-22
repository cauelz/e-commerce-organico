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
    throw new Error('Sem itens no pedido');
  } else {
    const order = new Order({
      user: req.user._id,
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

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, resp) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    resp.json(order);
  } else {
    resp.status(404);
    throw new Error('Order not found')
  }
})

module.exports = { addOrderItems, getOrderById };