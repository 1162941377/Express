# Express

> 基于 Node.js 平台、快速、开放、极简的 Web 开发框架

```js
const express = require("express");
const app = express(); // 创建一个 express 应用
```

## 登录和验证

> 使用 cookie-parser

> 登录后给予 token：

1）通过 cookie 给予，适配浏览器

2）通过 header 给予，适配其它终端

> 对后续请求进行验证：

1）解析 cookie 或 header 中的 token

2）验证 token（通过继续后续处理；未通过给予错误）
