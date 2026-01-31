<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 21:50:38
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-31 18:40:47
 * @FilePath: \app\src\detailedPage\pages\GalleryPreview.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
  <div class="main-image">
    <div class="_gallery_1azii_1">
      <div class="image-carousel vertical thumbnails">
        <div class="image-carousel-content">
          <div class="image-carousel-track vertical"
            style="transform: translateY(0px); transition: transform 0.3s ease-in-out;">
            <div class="item ">
              <img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif">
              <img class="thumbnails-play-icon"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/268427/6/7334/5868/677778bfFdfcd1873/09c35cebfaf51498.png">
            </div>
            <div class="item current"><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/384260/8/16073/94122/696613d4F16e0e29d/b4483b5af080d7ea.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/341831/14/26350/33189/69131b57Ff6bb1825/3da0a0eb9f693eb6.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/385211/32/1327/121983/69555800Ffb2c0040/16e65c0322df60ca.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/354586/1/10557/45480/69131b58F64a74399/7ba5102f7c2a631a.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/242430/4/35199/146708/69131b5cFb925cc95/4029ad3005ea13ec.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/345395/1/25550/55113/69131b5bFc9b981e0/f365c7be423ed7d2.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/344726/34/27417/106348/69131b5aF77879590/7b13ccb54e9550fa.jpg.avif">
            </div>
            <div class="item "><img class="image"
                src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/348881/33/25654/81991/69131b59Fcf2d5333/d97fa7fc61d4893d.jpg.avif">
            </div>
            <div class="item ">
              <div class="parameter">
                <div class="icon"></div><span class="text">规格参数</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stage" id="spec-n1">
        <div class="centre">
          <div class="image-area">
            <div class="image-zoom-container main-img" @mousemove="handleMousemove" @mouseenter="handleMouseenter"
              @mouseleave="handleMouseleave" ref="mianImage">
              <img class="zoom-img" id="spec-img" :src="currentImage">
            </div>
            <div class="magnifier-area" v-show="showMagnifier">
              <div class="area-mark" ref="area-mark" :style="areaMark"></div>
            </div>
          </div>

          <div class="mainImg-preview" v-show="showMagnifier">
            <div class="preview-image" :style="previewStyle"></div>
          </div>
          <div class="attribute"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GalleryPreview',
  data() {
    return {
      // 放大镜相关数据
      showMagnifier: false,
      magnifierpos: { x: 0, y: 0 },
      markfierpos: { x: 0, y: 0 },

      // 当前显示的图片
      currentImage: 'https://img10.360buyimg.com/pcpubliccms/s1440x1440_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif',

      // 放大倍数
      scale: 2,

      // 放大窗口尺寸
      previewWidth: 400,
      previewHeight: 400,

      // 图片容器信息
      containerRect: { width: 0, height: 0 },
      markRect: { width: 442, height: 442 }
    };
  },
  computed: {
    previewStyle() {

      return {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${this.currentImage})`,
        backgroundSize: `${this.containerRect.width * this.scale}px ${this.containerRect.height * this.scale}px`,
        backgroundPosition: `${this.magnifierpos.x}px ${this.magnifierpos.y}px`,
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden'
      };
    },
    areaMark() {
      // const markWidth = this.previewWidth / this.scale;
      // const markHeight = this.previewHeight / this.scale;
      return {
        // width: `${markWidth}px`,
        // height: `${markHeight}px`,
        left: `${this.markfierpos.x}px`,
        top: `${this.markfierpos.y}px`,
        // position: 'absolute',
        // border: '2px solid #ff0000',
        // boxSizing: 'border-box',
        // pointerEvents: 'none' // 防止遮挡鼠标事件
      };
    }
  },
  mounted() {
    this.initContainerSize()
    // this.initMarkSize() // 未渲染，无法获取尺寸。area-mark 在 mounted 时 没有在 DOM 中
    // 监听窗口变化，重新获取容器尺寸 
    window.addEventListener('resize', this.initContainerSize);
    window.addEventListener('resize', this.initMarkSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initContainerSize);
    window.removeEventListener('resize', this.initMarkSize);
  },
  methods: {
    // 初始化容器尺寸
    initContainerSize() {
      // const container = this.$el.querySelector('.image-zoom-container') 避免直接操作DOM
      const container = this.$refs.mianImage;
      if (container) {
        const rect = container.getBoundingClientRect()
        //获取元素相对于视口的位置和尺寸信息
        this.containerRect = {
          width: rect.width,
          height: rect.height
          /* left / x：元素左侧到视口左侧的距离

          top / y：元素顶部到视口顶部的距离

          right：元素右侧到视口左侧的距离

          bottom：元素底部到视口顶部的距离

          width：元素宽度

          height：元素高度 */
        }

      }
    },

    initMarkSize() {
      const mark = this.$refs.areaMark;
      console.log('mark', mark);
      if (mark) {
        const rectM = mark.getBoundingClientRect();
        console.log('rectM', rectM);
        this.markRect = {
          width: rectM.width,
          height: rectM.height
        };
      }
    },

    markPosition(markX, markY) {
      let centerX = 0;
      let centerY = 0;
      if (markX < this.markRect.width / 2) {
        centerX = 0;
      } else if (markX > this.containerRect.width - this.markRect.width / 2) {
        centerX = this.containerRect.width - this.markRect.width;

      } else {
        centerX = markX - this.markRect.width / 2;
      }
      if (markY < this.markRect.height / 2) {
        centerY = 0;
      } else if (markY > this.containerRect.height - this.markRect.height / 2) {
        centerY = this.containerRect.height - this.markRect.height;
      } else {
        centerY = markY - this.markRect.height / 2;
      }
      return { x: centerX, y: centerY };
    },


    handleMousemove(e) {
      if (!this.showMagnifier) return;
      this.$nextTick(() => {
        this.initMarkSize();
      });

      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      // 计算鼠标在图片内的相对位置
      /* event.clientX // 鼠标相对于浏览器视口的X坐标
        event.clientY // 鼠标相对于浏览器视口的Y坐标
        event.pageX   // 鼠标相对于文档的X坐标（包含滚动）
        event.pageY   // 鼠标相对于文档的Y坐标（包含滚动）
        event.offsetX // 鼠标相对于事件源元素的X坐标
        event.offsetY // 鼠标相对于事件源元素的Y坐标 */
      let mouseX = e.clientX - rect.left;
      let mouseY = e.clientY - rect.top;

      // 边界检查
      mouseX = Math.max(0, Math.min(mouseX, rect.width));
      mouseY = Math.max(0, Math.min(mouseY, rect.height));

      let markX = Math.max(0, Math.min(mouseX, rect.width));
      let markY = Math.max(0, Math.min(mouseY, rect.height));
      // const centerX = markX - this.markRect.width / 2;
      // const centerY = markY - this.markRect.height / 2;
      // 计算标记框位置
      const { x: centerX, y: centerY } = this.markPosition(markX, markY);

      this.markfierpos = { x: centerX, y: centerY };
      /* 从内向外解释
          Math.min(mouseX, rect.width 取mouseX和rect.width中较小的值，防止超出右边界
            mouseX > rect.width 时，取 rect.width
            mouseX <= rect.width 时，取 mouseX
          Math.max(0, ...) 取上一步结果和0中较大的值，防止超出左边界
            如果上一步结果 < 0 时，取0
            如果上一步结果 >= 0 时，取上一步结果
        mouseX 被限制在 [0, rect.width] 范围内
      */

      // 转换为百分比(0-1)
      const XPercent = mouseX / rect.width;
      const YPercent = mouseY / rect.height;
      /* 百分比与容器尺寸无关，是相对值
         便于在不同尺寸的容器中复用逻辑
         便于计算放大后的位置 */

      // 计算背景图移动位置
      const bgX = -(XPercent * rect.width * this.scale - this.previewWidth / 2);
      const bgY = -(YPercent * rect.height * this.scale - this.previewHeight / 2);

      this.magnifierpos = { x: bgX, y: bgY };
    },
    handleMouseenter() {
      this.showMagnifier = true;
    },
    handleMouseleave() {
      this.showMagnifier = false;
    }
  },
}

</script>

<!-- 放大镜核心逻辑
 原图尺寸：720x720
放大倍数：2倍
放大窗口尺寸：400x400

鼠标位置：在容器的 (360, 360) 处（正中心）

计算：
1. 在原图坐标系中，鼠标对应原图的 (360, 360)
2. 在放大2倍的图片中，这个点对应 (720, 720)
3. 为了让放大窗口显示以鼠标为中心的区域：
   - 放大窗口应该显示放大图片的 (720-200, 720-200) 到 (720+200, 720+200) 的区域
   - 即：放大图片从 (520, 520) 开始显示
   - CSS中：background-position: -520px -520px
   
公式推导：
bgMoveX = mouseX * scale - previewWidth/2
         = 360 * 2 - 200
         = 520
background-position = -bgMoveX = -520px -->

<style scoped>
.area-mark {
  width: 442px;
  height: 442px;
  background-color: rgba(255, 245, 247, 0.6);
  position: absolute;
  border-radius: 16px;
  pointer-events: none;
}

.mainImg-preview .preview-image {
  width: 100%;
  height: 100%;
}

.mainImg-preview {
  position: absolute;
  right: -611px;
  /* left: -611px; */
  /* 放在主图右侧 */
  top: -1px;
  /* transform: translateY(-50%); */
  width: 594px;
  height: 594px;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px 2px rgba(0, 0, 0, .15);
  z-index: 21;
  /* 如果元素被遮挡,检查父元素时候使用overflow:hidden裁剪 */
  pointer-events: none;
  /* 防止干扰鼠标事件 */
}

.image-zoom-container .zoom-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
}

.image-zoom-container {
  display: flex;
  height: 100%;
  position: relative;
  cursor: move;
}

._gallery_1azii_1 .image-area .main-img {
  max-width: 720px;
}

._gallery_1azii_1 .image-area {
  width: 720px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

._gallery_lazii_1 .centre {
  width: 100%;
  display: flex;
  min-height: 0;
  flex: 1;
  align-items: center;
}

._gallery_1azii_1 .stage {
  width: 860px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
  /* overflow: hidden; */
  position: relative;
}

._gallery_1azii_1 .thumbnails .item {
  width: 114px;
  height: 114px;
  margin-bottom: 7px;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

.image-carousel .image-carousel-track.vertica {
  display: flex;
  flex-direction: column;
}

.image-carousel .image-carousel-content {
  flex: 1;
  overflow: hidden;
}

._gallery_1azii_1 .thumbnails {
  height: 720px;
  width: 114px;
  display: flex;
  position: relative;
}

._gallery_1azii_1 {
  display: flex;
  justify-content: space-between;
}
</style>