// 模拟实现 express.urlencoded

const qs = require("querystring");

module.exports = (req, res, next) => {
  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    let result = "";
    req.on("data", (chunk) => {
      result += chunk.toString("utf-8");
    });
    req.on("end", () => {
      const query = qs.parse(result);
      req.body = query;
      next();
    });
  } else {
    next();
  }
};

exports.urlencoded = (options = {}) => {
  options.type = options.type || "application/w-www-form-urlencoded";
  return (req, res, next) => {
    if (req.headers["content-type"] === options.type) {
      let result = "";
      req.on("data", (chunk) => {
        result += chunk.toString("utf-8");
      });
      req.on("end", () => {
        const query = qs.parse(result);
        res.body = query;
        next();
      });
    } else {
      next();
    }
  };
};
