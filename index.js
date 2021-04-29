const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});

/* app.get("/news/:id", (req, res) => {
  // console.log("请求头", req.headers);
  // console.log("请求路径", req.path);
  // console.log("请求参数", req.params);
  // console.log("请求查询条件", req.query);

  // 响应
  // res.send({
  //   id: 2,
  //   name: "zjc",
  //   age: 20,
  // });

  // res.setHeader("sex", "male");
  // res.setHeader([1, 2, 3, 4, 5]);

  // res.status(302).header("location", "https://duyi.ke.qq.com").end();
  // res.status(302).location("https://duyi.ke.qq.com").end();
  res.redirect(302, "https://duyi.ke.qq.com");
}); */

app.get("*", (req, res) => {
  console.log("匹配到了任意路径的请求");
});
