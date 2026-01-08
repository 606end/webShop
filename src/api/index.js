/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-09 11:27:53
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2026-01-03 22:20:20
 * @FilePath: \app\src\api\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
// 当前这个模块：api进行统一管理
import requests from "./request";

// 首页商品接口 （每次数据返回服务器进行打乱随机，模拟实现推荐功能）
// /api/product/recommend get 无参数
// 发请求:axios发请求返回结果promise对象
// export const reqRecommend = ()=>{
//     return requests({ url: '/product/getBaseCategoryList', method: 'get'});
// }
export const reqRecommend = () => requests({ url: '/product/recommend', method: 'get' })

//首页商品列表接口
// /api/cateMenu/cateMenuList get 无参数
export const reqBannerList = () => requests({ url: '/banner/bannerList', method: 'get' })

//首页搜索框接口
export const reqSearchProduct = (params) => requests({
    url: '/product/search', method: 'get',
    params: params
})

// 分类搜索接口

export const reqCategoryProduct = (params) => requests({
    url: '/product/category', method: 'get',
    params: params
})
