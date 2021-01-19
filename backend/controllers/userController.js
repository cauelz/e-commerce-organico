const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    resp.json({

      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    resp.status(401);
    throw new Error('Invalid email or password');
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, resp) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email })

  if (userExists) {
    resp.status(400);
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if (user) {
    resp.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    resp.status(400);
    throw new Error('Ivalid user data')
  }
})


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, resp) => {

  const user = await User.findById(req.user._id);

  if (user) {
    resp.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    resp.status(404);
    throw new Error('User not found');
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, resp) => {

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    resp.json({

      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    resp.status(404);
    throw new Error('Usuário não encontrado');
  }
})

module.exports = { authUser, getUserProfile, registerUser, updateUserProfile };