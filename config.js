// ============================================
// 📋 配置文件 - 需要根据实际情况修改
// ============================================

const config = {
    // ⚙️ 服务器端口配置
    // ✏️ 修改：如果3000端口被占用，可以改成其他端口如 3001, 8081
    port: 3000,

    // 🔄 代理配置 - 转发到远程API
    proxy: {
        // ✏️ 修改：这里改成你要代理的真实API地址
        target: 'http://39.98.123.211',

        // ✏️ 修改：超时时间，根据网络状况调整
        timeout: 30000, // 30秒

        // ✏️ 修改：是否改变Origin头
        changeOrigin: true,

        // 🛣️ 代理路由配置
        // ✏️ 修改：根据你的API路径进行配置
        routes: [
            {
                path: '/product',  // 当访问 /product 时
                target: 'http://39.98.123.211', // 转发到这个地址
                pathRewrite: { '^/product': '' } // 可选：重写路径
            },
            {
                path: '/user',     // 当访问 /user 时
                target: 'http://39.98.123.211',
                pathRewrite: { '^/user': '' }
            },
            {
                path: '/api',      // 当访问 /api 时
                target: 'http://39.98.123.211',
                pathRewrite: { '^/api': '' }
            }
            // ✏️ 添加：可以在这里添加更多API路由
        ]
    },

    // 🎭 Mock数据配置
    mock: {
        // ✏️ 修改：是否启用Mock数据
        // true: 当代理失败时返回Mock数据
        // false: 只进行代理，代理失败返回错误
        enabled: true,

        // ✏️ 修改：模拟网络延迟，单位毫秒
        delay: 200,

        // 📁 Mock数据文件路径
        dataPath: './mock/'
    },

    // 🌐 CORS跨域配置
    cors: {
        // ✏️ 修改：允许访问的域名
        // 开发时通常是Vue开发服务器的地址
        origin: [
            'http://localhost:8080',  // Vue默认开发端口
            'http://localhost:3000',  // 本服务器
            'http://localhost:8081',  // 其他可能的前端端口
            'http://192.168.3.15:8080' // 你的局域网IP
        ],
        credentials: true  // 是否允许发送Cookie
    },

    // 📝 日志配置
    log: {
        level: 'dev',  // 日志级别: dev, combined, common, short, tiny
        format: ':method :url :status :response-time ms'
    }
};

module.exports = config;