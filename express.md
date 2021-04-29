# Express

> 基于 Node.js 平台、快速、开放、极简的 Web 开发框架

```js
const express = require("express");
const app = express(); // 创建一个 express 应用
```

## 中间件

_接收三个参数，分别表示的是：请求信息，响应结果，处理函数，和 vue 的 router 类似，如果要后续的代码执行，调用 next 方法；如果是错误中间件，第一个参数是 error，其它一样_

> 当匹配到了请求后，交给第一个处理函数执行，函数中需要手动地交给后续中间件处理

> 细节

1）如果后续没有了中间件，express 如果发现响应没有结果，会返回 404 状态码

2）如果中间件发生了错误，不会停止服务器，而是会执行 throw new Error() 函数，相当于调用了 next(错误对象)；寻找后续的错误处理中间件，如果没有，则响应 500

### 常用

1）express.static()

2）express.json()

3）express.urlencoded()
