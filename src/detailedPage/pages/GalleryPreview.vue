<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 21:50:38
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-02-10 18:40:14
 * @FilePath: \app\src\detailedPage\pages\GalleryPreview.vue
 * @Description: 新增鼠标进入轮播图移动实现滚动效果，修复点击滚动箭头异常问题
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
  <div class="main-image">
    <div class="_gallery_1azii_1">
      <div class="image-carousel vertical thumbnails">
        <div class="image-carouse-prev" :style="CarouselContent.Y >= 0 ? 'display: none' : 'display: block;'" @click="handlePrev">
          <div class="image-carouse-prev-arrow"></div>
        </div>
        <div class="image-carousel-content">
          <div class="image-carousel-track vertical"
            :style="imageCarouselContent">
            <div v-for="(item, index) in carouselData.images" :key="index"
             ref="itemImg" @mousemove="onThumbnailHover(index)" :class="{ current: thisIndex === index}"  class="item ">
              <img class="image"
                :src="item">
              <img v-if=" index === 0"
                class="thumbnails-play-icon"
                :src="carouselData.playIcon">
            </div>
            <div class="item " @mouseenter="controlLastEl()" :class="{ current: thisIndex === totalThumbItems }">
              <div class="parameter">
                <div class="icon"></div><span class="text">规格参数</span>
              </div>
            </div>
          </div>
        </div>
        <div class="image-carouse-next" :style=" CarouselContent.Y <= maxScrollY ? 'display: none;': 'display: block;'" @click="handleNext">
          <div class="image-carouse-next-arrow"></div>
        </div>
      </div>

      <div class="stage" id="spec-n1">
        <div class="centre">
          <div class="image-area">
            <div class="image-zoom-container main-img" @mousemove="handleMousemove" @mouseenter="handleMouseenter"
              @mouseleave="handleMouseleave" ref="mainImage">
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
      previewWidth: 594,
      previewHeight: 594,

      // 图片容器信息
      containerRect: { width: 0, height: 0 },
      markRect: { width: 297, height: 297 },

      // 添加缓存和标志位
      markSizeInitialized: false,
      containerSizeInitialized: false,
      imgLoaded: false, // 添加图片加载状态
      isComponentDestroyed: false,

      // 右图片轮播相关数据
      CarouselContent: {
        Y: 0,
      },
      totalThumbItems: 0,
      thisIndex: 0,
      hoverTimer: null,
      lastHoverIndex: -1,

      carouselData: {
        playIcon: 'https://img12.360buyimg.com/imagetools/jfs/t1/268427/6/7334/5868/677778bfFdfcd1873/09c35cebfaf51498.png',
        images: [
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/384260/8/16073/94122/696613d4F16e0e29d/b4483b5af080d7ea.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/341831/14/26350/33189/69131b57Ff6bb1825/3da0a0eb9f693eb6.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/385211/32/1327/121983/69555800Ffb2c0040/16e65c0322df60ca.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/354586/1/10557/45480/69131b58F64a74399/7ba5102f7c2a631a.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/242430/4/35199/146708/69131b5cFb925cc95/4029ad3005ea13ec.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/345395/1/25550/55113/69131b5bFc9b981e0/f365c7be423ed7d2.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/344726/34/27417/106348/69131b5aF77879590/7b13ccb54e9550fa.jpg.avif',
          'https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/348881/33/25654/81991/69131b59Fcf2d5333/d97fa7fc61d4893d.jpg.avif',
        ]
        
      }
    };
  },
  computed: {
    previewStyle() {
      if (!this.containerSizeInitialized) {
        return {};
      }
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
        // left: `${this.markfierpos.x}px`,
        // top: `${this.markfierpos.y}px`,
        // 使用transform触发GPU加速，性能更好。left/top是cpu计算，触发回流/重绘。
        // transform需要使用绝对定位将元素初始为left/top: 0从左上角开始，否则将跟随父元素定位进行移动
        transform: `translate( ${this.markfierpos.x}px, ${this.markfierpos.y}px)`
        // position: 'absolute',
        // border: '2px solid #ff0000',
        // boxSizing: 'border-box',
        // pointerEvents: 'none' // 防止遮挡鼠标事件
      };
    },
    imageCarouselContent() {
      return{
        transform: `translateY( ${this.CarouselContent.Y}px)`,
        transition: 'transform 0.3s ease-in-out',
      }
    },
    // 计算缩略图总个数
    totalItems() {
      return this.carouselData.images.length + 1;
    },
    // 计算最大滚动距离
    maxScrollY() {
      // 每个项目高度：114px + 7px margin-bottom = 121px
      const itemHeight = 121;
      // 容器可见高度：720px（总高度） - 48px（上下箭头高度）= 672px
      const visibleHeight = 720;
      /*XXX 容器可见高度大小决定第一页显示的高度，过大会与第二页可见高度重叠导致压缩第二页显示的高度，将第二页内容推出减小最大滚动距离 
       反之会压缩第一页可见高度,实际使用第一页正常显示但会增大最大滚动高度 */
      // 总内容高度
      const totalContentHeight = this.totalThumbItems * itemHeight - 7;//
      // 最大滚动距离（负数，因为向下滚动是负值）
      const maxScroll = -(totalContentHeight - visibleHeight);

      // 如果内容高度小于可见高度，不需要滚动，返回0
      return maxScroll < 0 ? maxScroll : 0;
    },
  },
  mounted() {
    /* 在mounted钩子中，图片容器宽高都为0，这说明图片还没有加载完成 需要异步加载优化 */
    // XXX 1.等待图片加载完成
    this.waitForImageLoad();
    // this.initContainerSize()

    // this.initMarkSize() // 未渲染，无法获取尺寸。area-mark 在 mounted 时 没有在 DOM 中
    // 使用 Promise 确保初始化顺序
    /* Promise.resolve()
      .then(() => this.initContainerSize())
      .then(() => {
        // 延迟初始化标记尺寸，确保 DOM 渲染完成
        return new Promise(resolve => {
          this.$nextTick(() => {
            // this.initMarkSize();
            resolve();
          });
        });
      });
    // 监听窗口变化，重新获取容器尺寸 ,使用防抖减少性能开销
    this.debouncedResize = this.debounce(() => {
      this.initContainerSize();
      // this.initMarkSize();
    }, 200);
    window.addEventListener('resize', this.debouncedResize); */
    window.addEventListener('resize', this.initContainerSize);
    // window.addEventListener('resize', this.initMarkSize);
    // 初始化总项目数
    this.totalThumbItems = this.totalItems
  },
  beforeUnmount() {
    this.isComponentDestroyed = true;
    window.addEventListener('resize', this.initContainerSize);
    // window.removeEventListener('resize', this.debouncedResize);
    //   window.removeEventListener('resize', this.initMarkSize);
  },
  methods: { 
    onThumbnailHover(index) {
      // 防抖，避免频繁触发
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
      }

      // 避免重复触发相同索引
      if (this.lastHoverIndex === index) {
        return;
      }

      this.hoverTimer = setTimeout(() => {
        this.changeMainImage(index);
        this.lastHoverIndex = index;
      }, 50); // 50ms延迟
    },
    // 自动滚动到选中的缩略图
    scrollToSelectedThumb(index) {
      console.log('scrollToSelectedThumb触发，index:', index);
      const itemHeight = 121;
      const visibleHeight = 720;
      const visibleItems = Math.floor(visibleHeight / itemHeight);
      console.log('visibleItems', visibleItems)
      // 计算需要滚动到的位置
      const targetY = -Math.max(0, (index - 1) * itemHeight - visibleItems / 2 * itemHeight);

      // 限制滚动范围
      this.CarouselContent.Y = Math.max(this.maxScrollY, Math.min(0, targetY));
    },
    controlLastEl() {
      this.thisIndex = this.totalThumbItems
    },     
    // 获取高清大图
    getHighResolutionImage(index) {
      return this.carouselData.images[index].replace('/s228x228_', '/s1440x1440_');
    },
    // 鼠标进入切换主图
    changeMainImage(index) {
      console.log('changeMainImage触发，index:', index);
      this.thisIndex = index,
      this.currentImage = this.getHighResolutionImage(index)
      this.scrollToSelectedThumb(index)
    },
    
    // 轮播图点击位移(90为提出下外边距高度，元素高度114-上/下标签高度24)
    handlePrev() {
      if ( this.CarouselContent.Y < 0) {
        this.CarouselContent.Y += 605;
      }
      if ( this.CarouselContent.Y >= 0) {
        this.CarouselContent.Y = 0;
      }
    },
    handleNext() {
      console.log('handleNext触发，当前Y:', this.CarouselContent.Y, 'maxScrollY:', this.maxScrollY);
      if ( this.CarouselContent.Y > this.maxScrollY) {
        this.CarouselContent.Y -= 605;
        console.log('滚动605后Y:', this.CarouselContent.Y);
      }
      if ( this.CarouselContent.Y < this.maxScrollY) {
        this.CarouselContent.Y = this.maxScrollY;
        console.log('调整到maxScrollY:', this.CarouselContent.Y);
      }
    },

    // 使用防抖函数
    /* debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }, */

    // 初始化容器尺寸
    initContainerSize() {
      // const container = this.$el.querySelector('.image-zoom-container') 避免直接操作DOM
      const container = this.$refs.mainImage;
      if (container) {
        const rect = container.getBoundingClientRect()
        // console.log('rect', rect);
        //获取元素相对于视口的位置和尺寸信息
        // 只有在尺寸发生变化时才更新，避免不必要的渲染
        if (rect.width !== this.containerRect.width || rect.height !== this.containerRect.height) {
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
          this.containerSizeInitialized = true;
        }


      }
    },

    initMarkSize() {
      const mark = this.$refs.areaMark;
      console.log('mark', mark);
      if (mark) {
        const rectM = mark.getBoundingClientRect();
        console.log('rectM', rectM);
        // 只有在尺寸发生变化时才更新
        if (rectM.width !== this.markRect.width || rectM.height !== this.markRect.height) {
          this.markRect = {
            width: rectM.width,
            height: rectM.height
          };
          this.markSizeInitialized = true;
        }
      }
    },

    markPosition(markX, markY, rect) {
      /* let centerX = 0;
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
      } */
      markX = Math.max(0, Math.min(markX, rect.width));
      markY = Math.max(0, Math.min(markY, rect.height));
      const { width: markWidth, height: markHeight } = this.markRect;
      const { width: containerWidth, height: containerHeight } = this.containerRect;
      // 预计算边界值
      const halfMarkWidth = markWidth / 2;
      const halfMarkHeight = markHeight / 2;
      const maxX = containerWidth - halfMarkWidth;
      console.log('maxX', maxX);
      const maxY = containerHeight - halfMarkHeight;

      // 优化计算逻辑 - 使用数学表达式减少条件判断
      let centerX = markX - halfMarkWidth;
      let fixedRight = containerWidth - markWidth;

      // 使用 clamp 函数优化边界处理
      if (centerX < 0) {
        centerX = 0;
      } else if (markX > maxX) {
        centerX = fixedRight;
      }
      /* 1. x轴小于标记框X轴一半的宽度，默认靠左 
         2. x轴大于maxX（框内宽度 - 标记框一般宽度） 默认靠右
         3. 如果条件都不匹配 则标记框自动跟随鼠标居中*/
      let centerY = markY - halfMarkHeight;
      let fixedBottom = containerHeight - markHeight;
      if (centerY < 0) {
        centerY = 0;
      } else if (markY > maxY) {
        centerY = fixedBottom;
      }
      return { x: centerX, y: centerY };
    },


    handleMousemove(e) {
      // if (!this.showMagnifier || !this.markSizeInitialized || !this.containerSizeInitialized) return;
      if (!this.showMagnifier || !this.containerSizeInitialized) {
        console.warn('放大镜未初始化或容器尺寸为0');
        return;
      }

      // 检查容器尺寸是否有效
      if (this.containerRect.width === 0 || this.containerRect.height === 0) {
        console.warn('容器尺寸为0，重新初始化');
        this.initContainerSize();
        return;
      }
      // 使用 requestAnimationFrame 优化性能
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

      // let markX = Math.max(0, Math.min(mouseX, rect.width));
      // let markY = Math.max(0, Math.min(mouseY, rect.height));
      // const centerX = markX - this.markRect.width / 2;
      // const centerY = markY - this.markRect.height / 2;
      // 计算标记框位置
      const { x: centerX, y: centerY } = this.markPosition(mouseX, mouseY, rect);

      // 只有位置发生变化时才更新
      if (centerX !== this.markfierpos.x || centerY !== this.markfierpos.y) { this.markfierpos = { x: centerX, y: centerY }; }
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
      // const XPercent = mouseX / rect.width;
      // const YPercent = mouseY / rect.height;
      /* 百分比与容器尺寸无关，是相对值
         便于在不同尺寸的容器中复用逻辑
         便于计算放大后的位置 */

      // 计算背景图移动位置
      // const bgX = -(XPercent * rect.width * this.scale - this.previewWidth / 2);
      // const bgY = -(YPercent * rect.height * this.scale - this.previewHeight / 2);

      // 计算放大镜背景位置
      // 优化：预计算常用值
      const invRectWidth = 1 / rect.width;
      const invRectHeight = 1 / rect.height;
      const scaledWidth = rect.width * this.scale;
      const scaledHeight = rect.height * this.scale;
      const halfPreviewWidth = this.previewWidth / 2;
      const halfPreviewHeight = this.previewHeight / 2;

      const XPercent = mouseX * invRectWidth;
      const YPercent = mouseY * invRectHeight;

      const bgX = -(XPercent * scaledWidth - halfPreviewWidth);
      const bgY = -(YPercent * scaledHeight - halfPreviewHeight);

      // 只有位置发生变化时才更新
      if (bgX !== this.magnifierpos.x || bgY !== this.magnifierpos.y) {
        this.magnifierpos = { x: bgX, y: bgY };
      }

      // this.magnifierpos = { x: bgX, y: bgY };
    },
    handleMouseenter() {
      this.showMagnifier = true;

      // 延迟初始化，避免阻塞主线程
      /* if (!this.markSizeInitialized) {
        requestAnimationFrame(() => {
          // this.initMarkSize();
        });
      } */
    },
    handleMouseleave() {
      this.showMagnifier = false;
    },

    // 等待图片加载完成
    waitForImageLoad() {
      const img = this.$refs.mainImage?.querySelector('img');
      if (img) {
        if (img.complete) {
          // console.log('图片已经加载完成');
          this.onImageLoaded()
        } else {
          // 监听图片加载事件，load 事件是确保资源可用后再进行操作的关键机制。
          console.log('complete未完成');
          img.addEventListener('load', this.onImageLoaded);
          // 设置超时，避免图片加载失败
          setTimeout(() => {
            if (!this.imgLoaded) {
              console.warn('图片加载超时，使用备用方案');
              this.onImageLoaded();
              img.removeEventListener('load', this.onImageLoaded);
            }

          }, 3000); // 超时移除监听，防止内存泄漏
        }
      } else {
        console.log('如果找不到图片，延迟初始化')
        setTimeout(() => {
          this.waitForImageLoad();
        }, 100);
      }
    },
    onImageLoaded() {
      // console.log('图片加载完成，开始初始化');
      this.imgLoaded = true;

      // 确保 DOM 更新完成
      this.$nextTick(() => {
        this.initContainerSize();
      });
    },
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

.current{
    border: 1px solid #ff0f23 !important;
}

._gallery_1azii_1 .thumbnails .thumbnails-play-icon {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

._gallery_1azii_1 .thumbnails .image-carouse-prev-arrow:after,
._gallery_1azii_1 .thumbnails .image-carouse-next-arrow:after {
  content: " ";
  position: absolute;
  width: 12px;
  height: 12px;
}

._gallery_1azii_1 .thumbnails .image-carouse-next-arrow:after {
  content: " ";
  position: absolute;
  width: 12px;
  height: 12px;
  background: url(https://img14.360buyimg.com/imagetools/jfs/t1/260409/1/4004/517/676e4b5aF4164c995/296d825f3f929a6a.png) left top / 100% 100% no-repeat;
}

._gallery_1azii_1 .thumbnails .image-carouse-prev-arrow:after {
  content: " ";
  position: absolute;
  width: 12px;
  height: 12px;
  background: url(https://img13.360buyimg.com/imagetools/jfs/t1/261254/24/4000/566/676e4bc1F503ba8a9/6d1a84d14e57f629.png) left top / 100% 100% no-repeat;
}

.image-carousel.vertical .image-carouse-next-arrow {
  bottom: 0;
  left: 0;
}

.image-carousel.vertical .image-carouse-prev-arrow {
  left: 0;
  top: 0;
}

._gallery_1azii_1 .thumbnails .image-carouse-prev-arrow, 
._gallery_1azii_1 .thumbnails .image-carouse-next-arrow {
  width: 100%;
  height: 24px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  background: #fff;
}

.area-mark {
  width: 297px;
  height: 297px;
  background-color: rgba(255, 245, 247, 0.6);
  position: absolute;
  border-radius: 16px;
  pointer-events: none;
  top: 0;
  left: 0;
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

._gallery_1azii_1 .thumbnails .parameter .text {
  color: #828794;
  font-size: 16px;
  margin-top: 16px;
}

._gallery_1azii_1 .thumbnails .current .parameter .text {
  color: #e53029;
}

._gallery_1azii_1 .thumbnails .parameter .icon {
  width: 32px;
  height: 32px;
  background: url(https://img12.360buyimg.com/imagetools/jfs/t1/302010/31/25201/1205/68ff1bdaF89d88587/7edca9c66fcb526d.png) left top / 100% 100% no-repeat;
}

._gallery_1azii_1 .thumbnails .current .parameter .icon {
  background: url(https://img12.360buyimg.com/imagetools/jfs/t1/332700/32/26261/1161/68f87bcfF60167482/c6cb6016424fc171.png) left top / 100% 100% no-repeat;
}

._gallery_1azii_1 .thumbnails .parameter {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

._gallery_1azii_1 .thumbnails .current .parameter {
  background: linear-gradient( 0deg, rgba(255, 240, 244, .3), rgba(255, 240, 244, .3)),
  linear-gradient(0deg, #fff, #fff);
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