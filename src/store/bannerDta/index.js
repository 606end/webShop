/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-17 16:56:26
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-12-17 22:30:10
 * @FilePath: \app\src\store\bannerDta\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by Sea.H.J,, All Rights Reserved. 
 */
import { reqBannerList } from "@/api";
const state = {
    menuItems: [],
    carouselDta: [],
    bannerRt: [],
};
const actions = {
    async Banner( {commit}) {
        try {
            const result = await reqBannerList()
            commit( 'menuItems', result.menuItems)
            commit( 'carouselDta', result.carouselDta)
            commit( 'bannerRt', result.bannerRt)
        } catch (error) {
            commit('error', error.message)
            throw error
        }
    } 
};
const mutations = {
    menuItems( stat, data) {
        stat.menuItems = data
    },
    carouselDta( stat, data) {
        stat.carouselDta = data
    },
    bannerRt( stat, data) {
        stat.bannerRt = data
    }

};
const getters = {

};
export default{
    state, actions, mutations, getters
}