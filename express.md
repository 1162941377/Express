# Express

> 基于 Node.js 平台、快速、开放、极简的 Web 开发框架

```js
const express = require("express");
const app = express(); // 创建一个 express 应用
```

## 断点调试

> node --inspect 启动模块，node 进程会监听 9229 端口

## Seesion

> cookie 存储在客户端，不占用服务器的资源；session 存储在服务端，如果多的话，会严重影响服务器的效率

> cookie 只能是字符串格式，存储量有限，数据容易被获取和篡改，容易丢失；session 可以 hi 是任何格式，存储量理论上是无上限（只要服务器内存允许），数据难以被获取和篡改，不易丢失

> 如果使用的是 session 存储数据的话，当客户端向服务器请求数据时，服务器会返回一个 UUID（ Universal Unique Identity ）
