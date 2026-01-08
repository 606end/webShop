<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-03 16:10:29
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2025-12-24 17:39:52
 * @FilePath: \app\src\pages\home\home.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="home_router">
    <!-- 三级联动全局组件 -->
    <CateMenu class="nav_menu" />
    <ListBanner />
    <BannerRight />
    <FloorSection />
  </div>
</template>

<script>
// 
import ListBanner from './ListBanner/ListBanner.vue';
import BannerRight from './BannerRight/BannerRight.vue';
import FloorSection from './FloorSection/FloorSection.vue';

export default {
  name: 'homePage',
  components: {
    ListBanner,
    BannerRight,
    FloorSection
  },
  async mounted() {
    await this.$store.dispatch('Banner')
  },
}

</script>
<style scoped></style>