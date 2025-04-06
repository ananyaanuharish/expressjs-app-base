const express = require("express");
const errorHanlder = require("./errorHandler");

const app = express();
const port = 8080;

app.use(express.json())
app.use("/api/contacts", require("../Controller/contactRoutess"));
app.use(errorHanlder)

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

