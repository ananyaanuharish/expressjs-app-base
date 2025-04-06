const express = require("express");

const app = express();
const port = 8080;

app.use(express.json())

app.use("/api/contacts", require("./contactRoutess"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

