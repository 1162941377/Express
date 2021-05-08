// 使用对称加密算法：aes 128位
const secret = Buffer.from("l6dzkcwvv5d5zkkmok8erm");
const crypto = require("crypto");

// 准备一个iv，随机向量
const iv = Buffer.from("g5v5ovhcumbjl0537pet3c");

// 加密
exports.encrypto = function (str) {
  const cry = crypto.createCipheriv("aes-128-cbc", secret, iv);
  let result = cry.update(str, "utf-8", "hex");
  result += cry.final("hex");
  return result;
};

// 解密
exports.decrypto = function (str) {
  const decry = crypto.createDecipheriv("aes-128-cbc", secret, iv);
  let result = decry.update(str, "hex", "utf-8");
  result += decry.final("utf-8");
  return result;
};
