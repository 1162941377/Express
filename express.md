# Express

> 基于 Node.js 平台、快速、开放、极简的 Web 开发框架

```js
const express = require("express");
const app = express(); // 创建一个 express 应用
```

## 监听一个端口

```js
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 8080;
server.listen(port, () => {
  console.log(`server listen on ${port}`);
});
```

或可以简写

```js
const express = require("express");
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
```

## 映射

> 请求方法和请求路径形成映射，如果均满足条件，交给后续的处理函数

```js
app.请求方法("请求路径", (req, res) => {
  // req、res 都是 express 重新封装过的对象
  // 分别表示的是：请求信息，响应信息
});
```

### 匹配请求

> get("\*", (req, res) => {})：表示的是匹配任何 get 请求

> use((req, res) ={})：表示的是匹配任何请求

- 支持传递第一个参数，表示以什么开头

## 响应

> 通过 send 方法，可以传递请求体，设置请求头，调用 send 的时候，express 会自动帮我们调用 end 方法，断开连接

### 重定向

> 通过 redirect 方法，接收两个参数，第一个参数为响应状态码（默认为 301 永久重定向），第二个参数为请求路径

> 通过 status(302).header("location", 请求路径).end()

> 通过 status(302).location("请求路径").end()
