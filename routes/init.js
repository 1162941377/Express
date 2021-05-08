/* const express = require("express");
const app = express();

app.use(require("./staticMiddleware"));

app.get("/news/one", (req, res, next) => {
  console.log("handle1");
  // throw new Error("error happened");
  // 上和下两种方式是等同关系
  next(new Error("error happened"));
});

app.use("/news", require("./errorMiddleware"));

const port = 8080;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
 */

const express = require("express");
const app = express();
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");

/** 映射关系（ Mapping Relation ）
 * 当请求时，会根据请求路径（ req.path ），从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
 * 如果不存在，则直接移交给后续的中间件处理
 * 默认情况下，如果映射的结果是一个目录，则会自动使用 index.html 文件
 */
app.use(express.static(staticRoot));
// 可以配置 index，用于表示 默认文件

/**
 * 加入cookie-parser中间件
 * 加入之后，会在req对象中注入cookie属性，用于获取所有请求传递过来的cookie
 * 加入之后，会在res对象中注入cookie方法，用于设置cookie
 */
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 应用token中间件
app.use(require("./tokenMiddleware"));

// 解析application/x-www-form-urlencoded格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析application/json格式的请求体
app.use(express.json());

// 处理api的请求
app.use("/api/student", require("./api/student"));
app.use("api/admin", require("./api/admin"));

// 处理错误的中间件
app.use(require("./errorMiddleware"));

// 要监听的端口，并开启服务器
const port = 8080;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
