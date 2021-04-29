const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);
const port = 8080;

server.listen(port, () => {
  console.log(`server listen on ${port}`);
});
