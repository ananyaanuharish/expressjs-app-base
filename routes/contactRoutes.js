const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Get all contacts" });
});

router.route("/").post((req, res) => {
  res.json({ message: "create contacts" });
});

router.route("/:id").get((req, res) => {
  res.json({ message: `get contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.json({ message: `delete contact for ${req.params.id}` });
});

module.exports = router;

// run all this in postman
// http://localhost:8080/api/contacts
