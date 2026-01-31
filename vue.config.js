/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 11:50:18
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-26 22:34:24
 * @FilePath: \app\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
// @vue/cli-service: Vue CLI 的服务层，用于构建和开发 Vue.js 应用程序
const path = require('path');
// path: Node.js 的内置模块，用于处理和转换文件路径

// const APP = process.env.APP_NAME || 'main'; // 'main' 或 'newpage'
/* process.env.APP_NAME: 读取环境变量中的 APP_NAME
|| 'main': 如果没有设置 APP_NAME，默认使用 'main'
作用: 决定当前运行 / 构建哪个应用 */

/* const pages = {
  main: {
    entry: 'src/main/main.js',
    template: 'public/index.html',
    filename: 'index.html',
  },
  detailedpage: {
    entry: 'src/detailedpage/main.js',
    template: 'public/detailedpage.html',
    filename: 'detailedpage.html',
  }
}; */
/* pages对象: 定义了所有的页面应用

每个页面有三个关键属性：

entry: 该应用的 JavaScript 入口文件

template: 使用的 HTML 模板文件

filename: 打包后生成的 HTML 文件名 */

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pages: {
    // [APP]: pages[APP]
    main: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Main Page',
    },
    detailedpage: {
      entry: 'src/detailedPage/detailedPage.js',
      template: 'public/detailedPage.html',
      filename: 'detailedPage.html',
      title: 'Detailed Page',
    }
  },
  /* [APP]: ES6 计算属性名语法，根据 APP 变量的值动态生成属性名 
  main: pages.main*/
  devServer: {
    // port: APP === 'detailedpage' ? 7100 : 8080,
    port: 8080,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // pathRewrite: { '^/api': ''}, 后端文件已配置
      }
    },
    // 添加路由重写，允许直接访问HTML文件
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/detailed/, to: '/detailedPage.html' }
      ]
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  // @/components/Hello.vue 相当于 src/components/Hello.vue
})
