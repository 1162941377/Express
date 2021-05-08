const allowOrigins = ["http://127.0.0.1:5500", "null"];

module.exports = function (req, res, next) {
  // 处理预检请求
  if (req.method === "OPTIONS") {
    res.headers(
      "Access-Control-Allow-Methods",
      req.headers["access-control-allow-method"]
    );
    res.headers(
      "Access-Control-Allow-Methods",
      req.headers["access-control-allow-method"]
    );
  }
  res.header("Access-Control-Allow-Credentials", true);
  // 处理简单请求
  if ("origin" in req.headers && allowOrigins.includes(req.headers.origin)) {
    res.header("access-control-allow-origin", req.headers.origin);
  }
  next();
};
