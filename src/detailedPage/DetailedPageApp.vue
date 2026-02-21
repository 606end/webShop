<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-26 13:49:47
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-27 22:57:43
 * @FilePath: \app\src\detailedPage\DetailedPageApp.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
// ...existing code...
<template>
    <div id="app">
        <DetailedPage />
        <!-- 直接渲染 detailed 页面或通过路由渲染 -->
    </div>
</template>

<script>
import DetailedPage from '@/detailedPage/pages/DetailedPage.vue';

export default {
  components: { DetailedPage },
    name: 'DetailedPageApp',
}
</script>

<style scoped>
/* 可放新页面专用样式 */
#app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 1920px;
    position: relative;
    overflow: hidden;
    transform-origin: left top;
}
</style>
// ...existing code...