/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 11:50:18
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-12-09 23:28:19
 * @FilePath: \app\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // pathRewrite: { '^/api': ''}, 后端文件已配置
      }
    }
  }
})
