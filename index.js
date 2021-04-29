const express = require("express");
const app = express();

console.log(process.env.NODE_ENV);

const port = 8080;

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});

app.get("*", (req, res) => {
  res.send("Hello World");
});
