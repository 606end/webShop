/*
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-08 16:43:38
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-26 15:00:16
 * @FilePath: \app\src\main\main.js
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router';

// 引入三级联动全局组件
import CateMenu from '@/pages/home/CateMenu/CateMenu.vue';

// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component ( CateMenu.name, CateMenu);

// 引入仓库
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由（底下的写法kv一直省略v）
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$router,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
