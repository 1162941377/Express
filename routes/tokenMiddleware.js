const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const cryptor = require("../util/crypt.js");
const needTokenApi = [
  { method: "POST", path: "/api/student" },
  { method: "PUT", path: "/api/student/:id" },
  { method: "GET", path: "api/student" },
];

// 用于解析 token
module.exports = (req, res, next) => {
  // api/student/:id 和 /api/student/1771
  const apis = needTokenApi.filter((api) => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  });
  if (apis.length === 0) {
    next();
    return;
  }

  let token = req.cookies.token;
  if (!token) {
    token = req.headers.authorization;
  }
  if (!token) {
    // 没有验证
    handleNonToken(req, res, next);
    return;
  }

  const userId = cryptor.decrypt(token);
  req.userId = userId;
  next();
};

// 处理没有验证的情况
function handleNonToken(req, res, next) {
  res
    .stauts(403)
    .send(getErr("you don't have any token to access the api", 403));
}
