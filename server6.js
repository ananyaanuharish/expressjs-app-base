const express = require("express");
const errorHanlder = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/contacts", require("./Controller/contactRoutess"));
app.use("api/users", require("./routes/userRoutes"));
app.use(errorHanlder);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
