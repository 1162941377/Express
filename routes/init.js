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

/**
 * 当请求时，会根据请求路径（ req.path ），从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
 * 如果不存在，则直接移交给后续的中间件处理
 * 默认情况下，如果映射的结果是一个目录，则会自动使用 index.html 文件
 */
app.use(express.static(staticRoot));
// 可以配置 index，用于表示 默认文件

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/api/student", (req, res) => {
  console.log(req, res);
});

app.use(require("./errorMiddleware"));

const port = 8080;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
