// whenever we create api method we need to give labels to them

// // @desc Get all contacts
// // @route GET /api/contacts
// // @access public
// const getContact = (req, res) => {
//   res.json({ message: "Get all contacts" });
// };

// // @desc create new contacts
// // @route POST /api/contacts
// // @access public
// const createContact = (req, res) => {
//   console.log("The request body is:", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   res.json({ message: "create contacts" });
// };

// // @desc Get contacts
// // @route GET /api/contacts/:id
// // @access public
// const getContacts = (req, res) => {
//   res.json({ message: `get contact for ${req.params.id}` });
// };

// // @desc update contacts
// // @route PUT /api/contacts/:id
// // @access public
// const updateContact = (req, res) => {
//   res.json({ message: `Update contact for ${req.params.id}` });
// };

// // @desc delete contacts
// // @route DELETE /api/contacts/:id
// // @access public
// const deleteContact = (req, res) => {
//   res.json({ message: `delete contact for ${req.params.id}` });
// };

// module.exports = {
//   getContact,
//   createContact,
//   getContacts,
//   updateContact,
//   deleteContact,
// };

// another method when we use mongodb we need async await and try catch with that, but we need to add try catch block in each so there is an better way to do so by making use of middleware which is express asynchandler which is going to handle our exceptions inside async express routes, install express asynchandler-> npm i express-async-handler
// and we pass them in express errorHandler.js

// // @desc Get all contacts
// // @route GET /api/contacts
// // @access public
// const getContact = async (req, res) => {
//   res.json({ message: "Get all contacts" });
// };

// // @desc create new contacts
// // @route POST /api/contacts
// // @access public
// const createContact = async (req, res) => {
//   console.log("The request body is:", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   res.json({ message: "create contacts" });
// };

// // @desc Get contacts
// // @route GET /api/contacts/:id
// // @access public
// const getContacts = async (req, res) => {
//   res.json({ message: `get contact for ${req.params.id}` });
// };

// // @desc update contacts
// // @route PUT /api/contacts/:id
// // @access public
// const updateContact = async (req, res) => {
//   res.json({ message: `Update contact for ${req.params.id}` });
// };

// // @desc delete contacts
// // @route DELETE /api/contacts/:id
// // @access public
// const deleteContact = async (req, res) => {
//   res.json({ message: `delete contact for ${req.params.id}` });
// };

// module.exports = {
//   getContact,
//   createContact,
//   getContacts,
//   updateContact,
//   deleteContact,
// };

// another method after downloading npm i express-async-handler

// const asyncHandler = require("express-async-handler");
// // @desc Get all contacts
// // @route GET /api/contacts
// // @access public
// const getContact = asyncHandler(async (req, res) => {
//   res.json({ message: "Get all contacts" });
// });

// // @desc create new contacts
// // @route POST /api/contacts
// // @access public
// const createContact = asyncHandler(async (req, res) => {
//   console.log("The request body is:", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   res.json({ message: "create contacts" });
// });

// // @desc Get contacts
// // @route GET /api/contacts/:id
// // @access public
// const getContacts = asyncHandler(async (req, res) => {
//   res.json({ message: `get contact for ${req.params.id}` });
// });

// // @desc update contacts
// // @route PUT /api/contacts/:id
// // @access public
// const updateContact = asyncHandler(async (req, res) => {
//   res.json({ message: `Update contact for ${req.params.id}` });
// });

// // @desc delete contacts
// // @route DELETE /api/contacts/:id
// // @access public
// const deleteContact = asyncHandler(async (req, res) => {
//   res.json({ message: `delete contact for ${req.params.id}` });
// });

// module.exports = {
//   getContact,
//   createContact,
//   getContacts,
//   updateContact,
//   deleteContact,
// };

// this is for models folder -> contactModel.js

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(201).json(contacts);
});

// @desc create new contacts
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

// @desc Get contacts
// @route GET /api/contacts/:id
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.json({ message: `get contact for ${req.params.id}` });
});

// @desc update contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
});

// @desc delete contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
