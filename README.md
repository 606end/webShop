<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-09 18:44:28
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2025-12-26 22:53:07
 * @FilePath: \api-server\README.md
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
# 🚀 API 代理与Mock服务器

一个基于Node.js的API代理和Mock数据服务器，支持请求转发、Mock数据生成、跨域处理等功能。

## ✨ 功能特性

- **🔄 智能代理**: 自动转发请求到远程API服务器
- **🎭 Mock数据**: 当远程API不可用时提供模拟数据
- **🌐 CORS支持**: 解决前端开发中的跨域问题
- **📊 详细日志**: 记录所有请求和响应信息
- **⚡ 多种模式**: 支持代理/Mock混合、纯代理、纯Mock三种模式
- **🚀 生产就绪**: 支持PM2进程管理和集群部署

## 📁 项目结构

```bash
api-server/
├── config.js # 配置文件（需要修改）
├── server.js # 主服务器（混合模式）
├── proxy-server.js # 纯代理服务器
├── mock-server.js # 纯Mock服务器
├── routes/ # API路由
│ ├── product.js # 产品相关API
│ └── user.js # 用户相关API
├── mock/ # Mock数据文件
│ ├── product.json # 产品数据
│ └── category.json # 分类数据
├── package.json # 项目配置
└── README.md # 项目文档
```

## 🚦 快速开始

### 1. 安装依赖

```bash
npm install
```

## Happy Coding! 🎉总结

### 三种模式的优势对比

| 模式 | 优势 | 适用场景 |
| ------ | ------ | ---------- |
| **完整服务器** | 1. 智能降级（代理失败转Mock）</br>2. 开发体验好</br>3. 数据稳定可用 | 前端独立开发，不依赖后端 |
| **纯代理服务器** | 1. 简单直接</br>2. 性能好</br>3. 数据实时 | 后端API稳定可用，前端需要实时数据 |
| **纯Mock服务器** | 1. 不依赖网络</br>2. 开发速度快</br>3. 可模拟各种场景 | 后端API不可用，或需要测试特定场景 |

### Mock文件夹 vs Routes文件夹

- **mock/文件夹**：存放**静态JSON数据文件**，适合大量固定的数据
- **routes/文件夹**：存放**动态路由处理逻辑**，适合需要逻辑处理的数据

### 这是一个Node.js项目吗？

**是的，这是一个基于Node.js的服务器项目。** 它使用：

1. **Node.js** 作为运行时环境
2. **Express** 作为Web框架
3. **npm** 作为包管理器
4. **CommonJS** 模块系统

**项目是用JavaScript编写的**，运行在Node.js环境中，不是用其他语言生成的。

### 需要你修改的地方总结

1. **config.js**：代理地址、CORS设置、端口等
2. **routes/product.js**：产品数据结构和业务逻辑
3. **routes/user.js**：用户认证逻辑和数据
4. **mock/*.json**：静态Mock数据
5. **package.json**：项目名称、作者等信息
6. 根据实际API响应格式调整所有接口的返回数据结构

## 🔧 常见问题

### Q1: 代理连接超时怎么办？

- 检查网络连接

- 在 config.js 中增加 proxy.timeout

- 确认远程API地址正确

- 临时使用Mock模式开发：npm run mock

### Q2: 跨域问题依旧存在？

- 在 config.js 的 cors.origin 中添加你的前端地址

- 确保Vue项目中代理配置正确

- 重启服务器使配置生效

### Q3: 如何添加新的API接口？

- 在 routes/ 目录下创建新的路由文件

- 在 server.js 中导入并使用

- 或直接在现有路由文件中添加新端点

### Q4: Mock数据不满足需求？

- 修改 routes/ 目录下的对应路由文件

- 或在 mock/ 目录下创建/修改JSON数据文件

- 调整 config.mock.delay 模拟网络延迟

### Q5: 性能优化建议？

- 生产环境使用PM2集群模式

- 调整Nginx缓存策略

- 对静态资源使用CDN

- 数据库连接池优化

### 📚 相关技术

- Node.js: JavaScript运行时环境

- Express: Web应用框架

- http-proxy-middleware: HTTP代理中间件

- PM2: 生产进程管理器

- CORS: 跨域资源共享

### 🤝 贡献指南

- Fork 项目

- 创建功能分支 (git checkout -b feature/AmazingFeature)

- 提交更改 (git commit -m 'Add some AmazingFeature')

- 推送到分支 (git push origin feature/AmazingFeature)

- 开启Pull Request

### 📄 许可证

- 本项目基于 MIT 许可证 - 查看 LICENSE 文件了解详情

### 📞 支持与反馈

- 如有问题或建议，请：

- 查看 常见问题 部分

- 提交 Issue

- 或通过邮件联系

## server.js 和 product.js 的区别和分工

``` text
├── server.js          # 🏗️ 服务器主入口 - 框架层
└── routes/
    └── product.js    # 📦 产品路由 - 业务逻辑层
```

### 🏗️ server.js - 服务器框架/基础设施

特点：

通用性：不包含具体业务逻辑

配置性：负责服务器的整体配置

管理性：管理中间件、路由、错误处理

代理功能：提供API转发能力

### 📦 product.js - 业务逻辑/产品相关API

定义具体的API端点

实现业务逻辑

特点：

具体性：针对特定业务领域（产品）

业务逻辑：包含具体的业务处理规则

数据操作：负责数据的CRUD操作

接口定义：定义API的具体参数和响应格式

``` text
浏览器请求
    ↓
server.js (接收请求)
    ├── 中间件处理（日志、解析、CORS等）
    ├── 路由分发
    │   ├── 如果是 /api/product/*→ 转发到 product.js
    │   ├── 如果是 /api/user/*    → 转发到 user.js
    │   └── 如果是 /proxy/*      → 代理到真实API
    │
    └── product.js (处理业务)
        ├── 解析请求参数
        ├── 执行业务逻辑
        ├── 访问数据库/Mock数据
        └── 返回响应数据
            ↓
server.js (发送响应)
    ↓
浏览器接收
```

| 方面 | server.js | product.js |
| ----- | ------ | ------ |
| 角色 | 服务器框架 | 业务模块 |
| 功能 | 基础设施、路由分发 | 具体业务逻辑 |
| 修改频率 | 低（配置稳定） | 高（业务变化） |
| 依赖 | 依赖 Express 等框架 | 依赖 server.js 的路由机制 |
| 测试重点 | 中间件、代理功能 | 业务逻辑、数据处理 |
| 扩展方式 | 添加中间件、路由 | 添加新的API端点 |

``` javascript
// 1. 浏览器请求：GET /api/product/search?keyword=手机&page=1
// 2. server.js 接收请求
//    - Morgan 记录日志
//    - BodyParser 解析参数
//    - CORS 处理跨域
// 3. 路由匹配到 /api/product/*
// 4. 转发到 product.js 路由
// 5. product.js 的 search 方法处理：
//    - 获取 req.query.keyword = "手机"
//    - 从 product.json 读取数据
//    - 过滤包含"手机"的产品
//    - 分页处理
//    - 返回响应
// 6. server.js 发送响应给浏览器
```
