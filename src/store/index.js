/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-12 15:07:18
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2025-12-25 22:56:10
 * @FilePath: \app\src\store\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex)
import product from "./product";
import banner from "./bannerDta";
import searchModule from "./searchDta";

// state:仓库存储数据的地方
// const state = {};
// action：处理action，可以书写自己的业务逻辑，也可以处理异步
// const action = {};
// mutations：修改state的唯一手段
// const mutations = {};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};
// 对外暴露store类的一个实例
export default new Vuex.Store({
    // vuex模块化开发仓库存储数据
    modules: {
        product,
        banner,
        searchModule,
    }
})