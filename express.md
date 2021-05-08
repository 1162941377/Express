# Express

> 基于 Node.js 平台、快速、开放、极简的 Web 开发框架

```js
const express = require("express");
const app = express(); // 创建一个 express 应用
```

## 断点调试

> node --inspect 启动模块，node 进程会监听 9229 端口

## 跨域之 JSNOP

> 同源策略（协议、端口、主机名均相同）

> 解决方案：JSONP、CORS

> JSONP：

1）浏览器生成一个 script 元素，利用 src 访问数据无限制的特点，获取数据

2）服务器响应一段 js 代码，调用某个函数，并把响应的数据传入

> JSONP 的缺陷：

1）会严重地影响服务器的正常响应格式

2）只能使用 get 请求
