/*
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-26 13:48:59
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-27 22:28:41
 * @FilePath: \app\src\detailedPage\detailedPage.js
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
 */
// ...existing code...
import Vue from 'vue';
import App from './DetailedPageApp.vue';
import router from '@/router'; // 如需独立路由可新建 src/newpage/router.js

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
// ...existing code...