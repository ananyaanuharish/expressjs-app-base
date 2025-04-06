// const asyncHandler = require("express-async-handler");
// // @desc register user
// // @route POST /api/users/register
// // @access public
// const registerUser = asyncHandler(async (req, res) => {
//   res.json({ message: "Register the user" });
// });

// // @desc login user
// // @route POST /api/users/login
// // @access public
// const loginUser = asyncHandler(async (req, res) => {
//   res.json({ message: "Login the user" });
// });

// // @desc Cureent user info
// // @route POST /api/users/current
// // @access private
// const currentUser = asyncHandler(async (req, res) => {
//   res.json({ message: "Current user information" });
// });

// module.exports = { registerUser, loginUser, currentUser };

// another method for userModel.js file

const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");
const bcrypt = require("bcrypt");
// when client send email and password we need to match password and give access
const jwt = require("jsonwebtoken");
// @desc register user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotory");
  }
  const userAvailable = await UserActivation.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already register");
  }

  // Hash password -> install bcrypt

  const HashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", HashedPassword);
  const user = await UserActivation.create({
    username,
    email,
    password: HashedPassword,
  });
  console.log(`user created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { emial, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  // to identify user is alreday present in the database or not
  const user = await User.findOne({ email });
  // compare password with hasgPassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          // payload that we are embed in token
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

// @desc Cureent user info
// @route POST /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
