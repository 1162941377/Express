/**
 * 返回的是错误信消息
 * @param {*} err
 * @param {*} errCode
 */
exports.getErr = function (err = "server interval error", errCode = 500) {
  return {
    code: errCode,
    msg: err,
  };
};

/**
 * 得到正常响应的结果
 * @param {*} result
 */
exports.getResult = function (result) {
  return {
    code: 0,
    msg: "",
    data: result,
  };
};

/**
 * 接收一个函数，返回一个函数
 * 如果正常的话，那么调用 getResult 函数；否则，调用错误处理函数
 * @param {*} hanlder
 */
exports.asyncHanlder = (hanlder) => {
  return async (req, res, next) => {
    try {
      const result = await hanlder(req, res, next);
      res.send(exports.getResult(result));
    } catch (err) {
      next(err);
    }
  };
};
