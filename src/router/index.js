/*
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-03 16:15:39
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2026-01-03 16:28:10
 * @FilePath: \app\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Register from '@/pages/register/register.vue';
import Home from '@/pages/home/home.vue';
import Search from '@/pages/search/search.vue';
import Login from '@/pages/login/login.vue';
// 先把VueRouter原型对象的push先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push和replace
// 第一个参数：告诉原来push方法，往哪里跳转
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

//配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'homePage',
            component: Home,
            meta: { show: true }
        },
        {
            path: '/Product/Search',
            name: 'searchPage',
            component: Search,
            meta: { show: true },
            // 路由组件传递props数据
            // 1：布尔值写法：params
            // props: true,
            // 对象写法：额外的给路由组件传递一些props
            // props: {a: 1,b: 2},
            // 函数写法：可以把params、query参数，通过props传递给路由组件
            props: (route) => {
                return { keyword: route.params, ...route.query, route: route };
            }
        },
        {
            path: '/login',
            name: 'loginPage',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            name: 'registerPage',
            component: Register,
            meta: { show: false }
        },
        //重定向，在项目跑起来的时候，访问/ 立马定向到首页
        {
            path: '/',
            redirect: '/home'
        }
    ]
})