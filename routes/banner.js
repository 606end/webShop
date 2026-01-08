/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-17 16:04:36
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-12-17 22:15:28
 * @FilePath: \api-server\routes\banner.js
 * @Description: 
 * 
 * Copyright (c) 2025 by Sea.H.J,, All Rights Reserved. 
 */
/**
 * 📦 菜单相关API路由
 * 
 * 这个文件定义了所有菜单相关的API端点
 * 当启用Mock时，这些端点返回模拟数据
 * 当禁用Mock时，可以配置为转发到真实API
 */

const express = require('express');
const router = express.Router();  
const config = require('../config');

// 导入Mock数据
const bannerList = require( '../mock/bannerList.json');

/**
 * ⏱️ 模拟网络延迟函数
 * @param {number} ms 延迟毫秒数
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API 端点定义
/* 
* Get /banner/bannerList
* 获取菜单分类列表
*原接口：http://39.98.123.211/banner/bannerList
*/
router.get('/bannerList', async (req, res) => {
    try {
        // ✏️ 修改：如果启用Mock，添加延迟模拟真实网络
        if (config.mock.enabled) {
            await delay(config.mock.delay);

            // 📝 方法：从JSON文件读取Mock数据（适合大量数据）
            const mockData = {
                status: 200,
                code: 200,
                message: 'success',
                data: bannerList,  // 从JSON文件导入
                mock: true
            };

            return res.json(mockData.data);
        }

        // 📝 如果没有启用Mock，可以在这里实现转发逻辑
        // ✏️ 修改：如果需要实现自定义转发逻辑，可以在这里添加
        res.status(501).json({
            error: 'Not Implemented',
            message: 'Mock data is disabled and no proxy configured',
            // ✏️ 提示：可以在这里集成axios转发到真实API
        });

    } catch (error) {
        console.error('Product route error:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
});
// 导出路由
module.exports = router;