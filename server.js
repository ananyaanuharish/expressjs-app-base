const express = require("express");

const app = express();
const port = 8080;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
