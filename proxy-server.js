/**
 * 🔄 纯代理服务器
 * 
 * 功能：只做请求转发，不提供Mock数据
 * 适用场景：远程API可用，只需要解决跨域问题
 * 
 * 优势：
 * 1. 简单直接，性能好
 * 2. 保持与真实API的一致性
 * 3. 适用于开发环境
 * 
 * 缺点：
 * 1. 依赖远程API的可用性
 * 2. 网络延迟可能影响开发体验
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

const app = express();

console.log('🚀 Starting Pure Proxy Server...');
console.log(`📡 Target: ${config.proxy.target}`);
console.log(`🎯 Port: ${config.port}`);

// 配置代理路由
config.proxy.routes.forEach(route => {
    app.use(route.path, createProxyMiddleware({
        target: route.target,
        changeOrigin: true,
        pathRewrite: route.pathRewrite || {},
        onProxyReq: (proxyReq, req, res) => {
            console.log(`[PROXY] ${req.method} ${req.url} -> ${proxyReq.path}`);
        },
        onError: (err, req, res) => {
            console.error(`[PROXY ERROR] ${req.url}:`, err.message);
            // ✏️ 纯代理模式：代理失败直接返回错误，不提供Mock
            res.status(502).json({
                error: 'Bad Gateway',
                message: 'Proxy server failed to connect to target',
                details: err.message
            });
        }
    }));
});

// 健康检查
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'pure-proxy-server',
        target: config.proxy.target,
        timestamp: new Date().toLocaleString()
    });
});

// 启动服务器
app.listen(config.port, () => {
    console.log(`
    ============================================
    🔄 Pure Proxy Server Running!
    🌐 http://localhost:${config.port}
    🎯 Proxying to: ${config.proxy.target}
    ⚠️  Note: This is pure proxy mode, no mock data provided
    ============================================
    `);
});