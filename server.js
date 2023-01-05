const express = require("express");
const route = require("./router");
const app = express();
app.use(express.json());
const port = 3000;

app.use("", route);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
