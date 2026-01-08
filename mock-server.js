/**
 * 🎭 纯Mock服务器
 * 
 * 功能：只提供Mock数据，不进行代理
 * 适用场景：
 * 1. 远程API不可用或不稳定
 * 2. 前端独立开发，不依赖后端
 * 3. 测试特定场景（如错误状态）
 * 
 * 优势：
 * 1. 不依赖网络，开发速度快
 * 2. 可以模拟各种边界情况
 * 3. 数据稳定，不受外部影响
 * 
 * 缺点：
 * 1. 数据可能与真实API不一致
 * 2. 需要维护Mock数据
 */

const express = require('express');
const cors = require('cors');
const config = require('./config');
const path = require( 'path');

const app = express();

// 启用CORS和JSON解析
app.use(cors());
app.use(express.json());

console.log('🤖 Starting Mock Server...');

// 导入路由（只使用Mock功能）
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

// 使用路由 - 注意路径前缀
app.use('api/product', productRoutes);
app.use('api/user', userRoutes);
// 🛠️ 添加：直接处理 /product/* 路径，兼容旧版本
// app.use('/product', productRoutes);
// app.use('/user', userRoutes);

// 主页 - 显示可用接口
app.get('/', (req, res) => {
    res.json({
        message: '🎭 Mock Server is running!',
        description: 'This server provides mock data for development',
        endpoints: {
            // ✏️ 两种路径都支持，兼容不同配置
            product: {
                list: 'GET /api/product/getBaseCategoryList',
                // / product / getBaseCategoryList
                detail: 'GET /api/product/detail/:id',
                search: 'GET /api/product/search?keyword=xxx',
                recommend: 'GET /api/product/recommend'
            },
            user: {
                login: 'POST /api/user/login',
                info: 'GET /api/user/info',
                logout: 'POST /api/user/logout',
                register: 'POST /api/user/register'
            }
        },
        config: {
            mockDelay: config.mock.delay + 'ms',
            port: config.port + 1
        },
        note: '⚠️ This is mock data only, for development purposes'
    });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Mock endpoint ${req.method} ${req.url} not found`,
        suggestion: 'Check the root endpoint / for available endpoints',
        availablePaths: [
            '/api/product/getBaseCategoryList',
            '/product/getBaseCategoryList',
            '/api/user/login',
            '/user/login'
        ],
        mock: true
    });
});

// 启动服务器（使用不同端口避免冲突）
const mockPort = config.port + 1;
app.listen(mockPort, () => {
    console.log(`
    ============================================
    🎭 Mock Server Running!
    🌐 http://localhost:${mockPort}
    ⏰ Response Delay: ${config.mock.delay}ms
    📊 Data Source: In-memory mock data
    ⚠️  Note: This is pure mock mode, no proxy to real API
    ============================================
    `);
});