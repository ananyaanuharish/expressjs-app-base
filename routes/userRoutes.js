// const express = require("express");

// const router = express.Router();

// router.post("/register", (req, res) => {
//   res.json({ message: "Register the user" });
// });

// router.post("/login", (req, res) => {
//   res.json({ message: "Login the user" });
// });

// router.get("/current", (req, res) => {
//   res.json({ message: "Current user information" });
// });

// module.exports = router

// // another method for userController.js

// const express = require("express");
// const {
//   registerUser,
//   loginUser,
//   currentUser,
// } = require("../Controller/userController");

// const router = express.Router();

// router.post("/register", registerUser);

// router.post("/login", loginUser);

// router.get("/current", currentUser);
// module.exports = router;

// another method for validateTokenHandler.js
// since current route is private we can make use of validateToken

const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../Controller/userController");
const validateToken = require("../middleware/validateTokenHanlder");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current",validateToken, currentUser);
module.exports = router;
