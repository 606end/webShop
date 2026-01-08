/**
 * 🚀 API 代理/Mock 服务器 - 主入口文件
 * 
 * 功能：
 * 1. 提供API代理功能，转发请求到远程服务器
 * 2. 当代理失败时，返回Mock数据（可配置）
 * 3. 提供健康检查接口
 * 4. 支持CORS跨域
 * 5. 详细的请求日志
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');          // ✏️ 配置文件
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

// 导入路由模块
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const bannerRoutes = require('./routes/banner')

class ApiServer {
    constructor() {
        // 创建Express应用实例
        this.app = express();

        // ✏️ 修改：服务器端口，可以设置环境变量覆盖
        this.port = process.env.PORT || config.port;

        // 初始化各功能模块
        this.initMiddleware();    // 初始化中间件
        this.initRoutes();        // 初始化路由
        this.initProxy();         // 初始化代理
        this.initErrorHandling(); // 初始化错误处理

        // 保存服务器实例引用
        this.server = null;
    }

    /**
     * 🔧 初始化中间件
     * 中间件是处理HTTP请求的函数，按顺序执行
     */
    initMiddleware() {
        // 1. Helmet: 设置安全相关的HTTP头
        // ✏️ 注意：生产环境可能需要根据需求调整
        this.app.use(helmet());

        // 2. Morgan: HTTP请求日志
        // ✏️ 修改：可以在config.js中配置日志格式
        this.app.use(morgan(config.log.format || 'dev'));

        // 3. Body Parser: 解析JSON和URL编码的请求体
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // 4. CORS: 跨域资源共享
        // ✏️ 修改：允许的前端地址在config.js中配置
        this.app.use(cors(config.cors));

        // 5. 静态文件服务
        // ✏️ 修改：如果需要提供静态文件，可以配置这个
        this.app.use('/static', express.static(path.join(__dirname, 'public')));

        // 6. 自定义请求日志中间件
        this.app.use((req, res, next) => {
            console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
            next();
        });
    }

    /**
     * 🛣️ 初始化路由
     * 定义服务器处理的各种API端点
     */
    initRoutes() {
        // ✅ 健康检查端点 - 用于监控服务器状态
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'healthy',
                timestamp: new Date().toLocaleString(),
                service: 'api-proxy-server',
                version: '1.0.0'
            });
        });

        // 📋 API版本信息
        this.app.get('/api/version', (req, res) => {
            res.json({
                name: 'API Proxy Server',
                version: '1.0.0',
                environment: process.env.NODE_ENV || 'development',
                features: ['proxy', 'mock', 'cors', 'logging']
            });
        });

        // 🔌 业务API路由
        // ✏️ 修改：根据你的业务需求添加/修改路由
        this.app.use('/api/product', productRoutes);  // 产品相关API
        this.app.use('/api/user', userRoutes);        // 用户相关API
        this.app.use('/api/banner', bannerRoutes);    //横幅相关API

        // 🏠 根路径 - 服务器信息
        this.app.get('/', (req, res) => {
            res.json({
                message: 'API Proxy Server is running!',
                endpoints: {
                    health: '/health',
                    version: '/api/version',
                    product: '/api/product/*',
                    user: '/api/user/*',
                    cateMenu: '/api/banner/*',
                    proxy: '/proxy/* (proxies to target API)'
                },
                config: {
                    port: this.port,
                    mockEnabled: config.mock.enabled,
                    proxyTarget: config.proxy.target
                }
            });
        });

    }

    /**
     * 🔄 初始化代理配置
     * 将请求转发到远程API服务器
     */
    initProxy() {
        // 检查是否有配置代理路由
        if (config.proxy.routes && config.proxy.routes.length > 0) {
            config.proxy.routes.forEach(route => {
                const proxyOptions = {
                    target: route.target || config.proxy.target,
                    changeOrigin: route.changeOrigin || config.proxy.changeOrigin,
                    timeout: route.timeout || config.proxy.timeout,
                    pathRewrite: route.pathRewrite || {},

                    // 代理请求时的回调
                    onProxyReq: (proxyReq, req, res) => {
                        console.log(`[PROXY] ${req.method} ${req.url} -> ${proxyReq.path}`);
                    },

                    // 代理失败时的回调
                    onError: (err, req, res) => {
                        console.error(`[PROXY ERROR] ${req.url}:`, err.message);

                        // ✏️ 重要：如果代理失败且启用了Mock，返回Mock数据
                        if (config.mock.enabled) {
                            console.log(`[MOCK] Falling back to mock data for ${req.url}`);

                            // 根据请求路径返回不同的Mock数据
                            // ✏️ 修改：这里可以根据需求添加更多Mock逻辑
                            if (req.url.includes('/product')) {
                                // 返回产品Mock数据
                                res.status(200).json({
                                    code: 200,
                                    message: 'Using mock product data',
                                    mock: true,
                                    path: req.url
                                });
                            } else if (req.url.includes('/user')) {
                                // 返回用户Mock数据
                                res.status(200).json({
                                    code: 200,
                                    message: 'Using mock user data',
                                    mock: true,
                                    path: req.url
                                });
                            } else {
                                // 通用Mock响应
                                res.status(200).json({
                                    message: 'Using mock data (proxy failed)',
                                    mock: true,
                                    path: req.url
                                });
                            }
                        } else {
                            // 如果Mock未启用，返回代理错误
                            res.status(502).json({
                                error: 'Bad Gateway',
                                message: 'Proxy failed and mock is disabled',
                                details: err.message
                            });
                        }
                    }
                };

                // 创建代理中间件
                this.app.use(route.path, createProxyMiddleware(proxyOptions));
            });
        }

        // 🔧 通用代理端点 - 处理所有未被特定路由匹配的/proxy请求
        this.app.use('/proxy', createProxyMiddleware({
            target: config.proxy.target,
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': ''  // 去掉/proxy前缀
            },
            onProxyReq: (proxyReq, req, res) => {
                console.log(`[GENERIC PROXY] ${req.method} ${req.originalUrl}`);
            }
        }));
    }

    /**
     * ❌ 初始化错误处理
     * 处理404和服务器错误
     */
    initErrorHandling() {
        // 1. 404处理 - 访问不存在的路由
        this.app.use((req, res, next) => {
            res.status(404).json({
                error: 'Not Found',
                message: `Route ${req.method} ${req.url} not found`,
                timestamp: new Date().toLocaleString()
            });
        });

        // 2. 全局错误处理中间件
        this.app.use((err, req, res, next) => {
            console.error('[SERVER ERROR]', err.stack);

            // ✏️ 修改：生产环境不返回错误堆栈
            res.status(err.status || 500).json({
                error: 'Internal Server Error',
                message: process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.message,
                stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
                timestamp: new Date().toLocaleString()
            });
        });
    }

    /**
     * 🚀 启动服务器
     * @returns {Promise} 启动成功后解析
     */
    start() {
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(this.port, () => {
                // ✏️ 修改：这里的启动信息可以根据需要调整
                console.log(`
        ============================================
        🚀 API Server Started Successfully!
        
        🌐 Local: http://localhost:${this.port}
        📡 Environment: ${process.env.NODE_ENV || 'development'}
        ⏰ Time: ${new Date().toLocaleString()}
        🔧 Features: Proxy, Mock, CORS, Logging
        
        📋 Available Endpoints:
            • Health Check: /health
            • API Version: /api/version
            • Product API: /api/product/*
            • User API: /api/user/*
            • Banner API: /api/banner/*
            • Proxy: /proxy/*
        
        🔄 Proxying to: ${config.proxy.target}
        🤖 Mock Enabled: ${config.mock.enabled}
        ============================================
        `);
                resolve(this.server);
            });

            this.server.on('error', reject);
        });
    }

    /**
     * 🛑 停止服务器
     * @returns {Promise} 停止成功后解析
     */
    stop() {
        return new Promise((resolve, reject) => {
            if (this.server) {
                this.server.close((err) => {
                    if (err) reject(err);
                    else {
                        console.log('Server stopped successfully');
                        resolve();
                    }
                });
            } else {
                resolve();
            }
        });
    }
}

// ============================================
// 🚦 主程序入口
// ============================================

// 判断是否直接运行此文件（而不是被其他模块导入）
if (require.main === module) {
    const server = new ApiServer();

    // 启动服务器
    server.start().catch(err => {
        console.error('Failed to start server:', err);
        process.exit(1);  // 退出进程，退出码1表示错误
    });

    // ✏️ 优雅关闭处理 - 捕获系统信号
    process.on('SIGINT', async () => {  // Ctrl+C
        console.log('\nShutting down server... (SIGINT)');
        await server.stop();
        process.exit(0);  // 正常退出
    });

    process.on('SIGTERM', async () => {  // kill命令
        console.log('\nReceived SIGTERM, shutting down...');
        await server.stop();
        process.exit(0);
    });
}

// 导出ApiServer类，方便其他模块导入
module.exports = ApiServer;