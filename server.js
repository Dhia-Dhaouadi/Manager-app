const express = require("express");
const route = require("./router");
const app = express();
app.use(express.json());
const port = 3100;

;
app.use("", route);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
