// 静态资源处理的中间件

module.exports = (req, res, next) => {
  if (req.path.startsWith("/api")) {
    // 表明请求的是 api 接口
    next();
  } else {
    if (true) {
      // 判断是否是静态资源，如果是的话，返回，不是的话，执行后续函数
      res.send("静态资源");
    } else {
      next();
    }
  }
};
