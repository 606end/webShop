/**
 * 👤 用户相关API路由
 * 
 * 这个文件定义了所有用户相关的API端点
 * 包括登录、注册、获取用户信息等
 */

const express = require('express');
const router = express.Router();
const config = require('../config');

// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * POST /user/login
 * 用户登录接口
 * 
 * ✏️ 修改：根据实际登录API调整请求参数和响应格式
 * 原接口可能：http://39.98.123.211/user/login
 * 
 * @body {string} username - 用户名
 * @body {string} password - 密码
 */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // 模拟网络延迟
    await delay(config.mock.delay);

    // ✏️ 修改：这里实现你的登录验证逻辑
    // 实际项目中应该查询数据库验证用户
    if (username === 'admin' && password === '123456') {
        res.json({
            code: 200,
            data: {
                // ✏️ 修改：根据实际JWT token格式调整
                token: 'mock-jwt-token-' + Date.now(),
                expiresIn: 86400,  // token有效期，单位秒（24小时）
                tokenType: 'Bearer',

                // ✏️ 修改：根据实际用户信息结构调整
                userInfo: {
                    id: 1,
                    username: 'admin',
                    nickname: '系统管理员',
                    avatar: 'https://example.com/avatars/admin.jpg',
                    email: 'admin@example.com',
                    phone: '13800138000',
                    role: 'admin',           // 用户角色
                    permissions: ['*:*:*'],  // 权限列表
                    createTime: '2023-01-01 00:00:00'
                }
            },
            message: '登录成功',
            mock: true
        });
    } else if (username === 'user' && password === '123456') {
        // ✏️ 添加：更多测试用户
        res.json({
            code: 200,
            data: {
                token: 'mock-jwt-token-user-' + Date.now(),
                expiresIn: 86400,
                userInfo: {
                    id: 2,
                    username: 'user',
                    nickname: '普通用户',
                    avatar: 'https://example.com/avatars/user.jpg',
                    email: 'user@example.com',
                    phone: '13800138001',
                    role: 'user',
                    permissions: ['user:view', 'user:edit'],
                    createTime: '2023-01-02 00:00:00'
                }
            },
            message: '登录成功',
            mock: true
        });
    } else {
        // ✏️ 修改：根据实际错误响应格式调整
        res.status(401).json({
            code: 401,
            message: '用户名或密码错误',
            data: null,
            mock: true
        });
    }
});

/**
 * GET /user/info
 * 获取当前用户信息
 * 
 * ✏️ 修改：根据实际用户信息API调整
 * 通常需要从请求头中获取token进行验证
 */
router.get('/info', async (req, res) => {
    await delay(config.mock.delay);

    // ✏️ 修改：实际项目中需要验证token
    const token = req.headers.authorization;

    // 简单的token验证（实际项目应该用JWT库验证）
    if (token && token.includes('admin')) {
        res.json({
            code: 200,
            data: {
                user: {
                    id: 1,
                    username: 'admin',
                    nickname: '系统管理员',
                    email: 'admin@example.com',
                    phone: '13800138000',
                    avatar: 'https://example.com/avatar.jpg',
                    gender: 1,  // 1:男, 2:女, 0:未知
                    birthday: '1990-01-01',
                    address: '北京市朝阳区',
                    signature: '我是系统管理员',
                    role: 'admin'
                },
                // ✏️ 修改：根据实际权限系统调整
                permissions: [
                    'dashboard',
                    'user:view',
                    'user:edit',
                    'user:delete',
                    'product:view',
                    'product:edit',
                    'product:delete',
                    'order:view',
                    'order:edit',
                    'system:settings'
                ],
                roles: ['admin']
            },
            message: 'success',
            mock: true
        });
    } else {
        // 默认返回普通用户信息
        res.json({
            code: 200,
            data: {
                user: {
                    id: 2,
                    username: 'user',
                    nickname: '普通用户',
                    email: 'user@example.com',
                    phone: '13800138001',
                    avatar: 'https://example.com/avatar2.jpg',
                    gender: 0,
                    role: 'user'
                },
                permissions: [
                    'dashboard',
                    'user:view',
                    'product:view',
                    'order:view'
                ],
                roles: ['user']
            },
            message: 'success',
            mock: true
        });
    }
});

/**
 * POST /user/logout
 * 用户退出登录
 */
router.post('/logout', async (req, res) => {
    await delay(config.mock.delay);

    res.json({
        code: 200,
        data: null,
        message: '退出成功',
        mock: true
    });
});

/**
 * POST /user/register
 * 用户注册接口
 * 
 * ✏️ 添加：根据实际注册API调整
 */
router.post('/register', async (req, res) => {
    const { username, password, email, phone } = req.body;

    await delay(config.mock.delay);

    // 简单的验证逻辑
    if (!username || !password) {
        return res.status(400).json({
            code: 400,
            message: '用户名和密码不能为空',
            mock: true
        });
    }

    // 模拟注册成功
    res.json({
        code: 200,
        data: {
            userId: Date.now(),  // 模拟用户ID
            username: username
        },
        message: '注册成功',
        mock: true
    });
});

// ✏️ 添加：更多用户相关API
// 例如：修改密码、更新用户信息、上传头像等

module.exports = router;