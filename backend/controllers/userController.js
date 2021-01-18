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

module.exports = { authUser };