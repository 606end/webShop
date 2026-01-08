<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 11:50:18
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2025-12-25 15:52:42
 * @FilePath: \app\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div id="app" :style="appStyle">
    <topBar />
    <!-- 路由组件出口的地方 -->
    <router-view class="router_component" />
    <!-- 在home、search显示，在登录、注册隐藏 -->
    <!-- <footerBar v-show="$route.path=='/home' || $route.path=='/search'"/> -->
    <footerBar v-show="$route.meta.show" />
  </div>
</template>

<script>
import topBar from './components/header/topBar.vue';
import footerBar from './components/footer/footerBar.vue';

export default {
  name: 'App',
  components: {
    topBar,
    footerBar
  },
  data() {
    return {
      scale: 1
    }
  },
  computed: {
    appStyle() {
      return {
        transform: `scale(${this.appScale})`,
        transformOrigin: 'top left',
        width: `${100 / this.appScale}%`,
        height: `${100 / this.appScale}%`
      }
    }
  },
  methods: {
    calcScale() {
      // 设计稿尺寸
      const designWidth = 1920 // 你的设计稿宽度
      const designHeight = 1080 // 你的设计稿高度

      // 当前窗口尺寸
      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight

      // 计算宽度和高度的缩放比例
      const widthScale = clientWidth / designWidth
      const heightScale = clientHeight / designHeight

      // 取较小的比例，确保内容完全显示在屏幕内
      this.appScale = Math.min(widthScale, heightScale)

      // 可选：限制缩放范围
      this.appScale = Math.max(0.5, Math.min(1.5, this.appScale))
    }
  },
  mounted() {
    console.log(this.$route.path)
    // 初始计算
    this.calcScale()

    // 监听窗口变化
    window.addEventListener('resize', this.calcScale)

    // 监听窗口完成变化（防抖优化）
    this.resizeTimer = null
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.calcScale()
      }, 100)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcScale)
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* 防止水平滚动条 */
}

.router_component {
  position: relative;
  z-index: 1000;
  width: 82%;
  margin: 0 8%;
}

#app {
  width: 1920px;
  /* 设计稿宽度 */
  /* 设计稿高度 */
  position: relative;
  overflow: hidden;
}
</style>