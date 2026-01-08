<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-07 16:49:38
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-12-18 16:23:43
 * @FilePath: \app\src\pages\home\ListBanner\ListBanner.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by Sea.H.J, All Rights Reserved. 
-->
<template>
    <div class="list_banner">
        <!-- 添加调试文本 -->
        <div v-if="false" style="color: red; position: fixed; top: 0; left: 0; z-index: 9999;">
            ListBanner组件已加载 - currentIndex: {{ currentIndex }}
        </div>
        <div class="slide_container">
            <div class="slide_inner">
                    <div>
                        <a href="" class="slide_item_lk" :style="{ backgroundImage: `url(${currentAdd})` }">
                            <div class="slide_item_title">
                                <div class="slide_item_title-top">{{ currentTitleTop }}</div>
                                <div class="slide_item_title-middle">{{ currentTitleMiddle }}</div>
                                <div class="slide_item-subtitle">{{ currentTitleSubtitle }}</div>
                            </div>
                        </a>
                    </div>
            </div>
        </div>
        <ul class="con_container" style="display: flex; position: relative; top: -28px; right: -15px;">
            <li class="dot" :key="dotIndex" v-for="(dot, dotIndex) in carousel" :class="{
                switch: dotIndex === currentIndex
            }" @click="li_Switch(dotIndex)">
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'ListBanner',
    methods: {
        /**
        * 轮播图切换方法 - 替代原生的show函数
        */
        show() {
            // 更新当前显示的图片
            // 注意：在Vue中直接绑定currentImage到img的src属性即可

            // 更新指示器激活状态
            // 在模板中使用:class="{ active: currentIndex === index }"实现

            // 更新背景图片
            // 在模板中使用:style="{ backgroundImage: `url('${currentBgImage}')` }"实现

            // 只有当有数据时才执行轮播
            if (this.carousel.length === 0) return;

            // 递增索引
            this.currentIndex++

            // 循环判断
            if (this.currentIndex >= this.carousel.length) {
                this.currentIndex = 0
            }

            // 调试日志
            // console.log(this.currentAdd)
            // console.log(`.a-con a:nth-child(${this.currentIndex + 1})`)
        },
        startAutoPlay() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            if (this.carousel.length > 0) {
                this.intervalId = setInterval(this.show, 2800);
            }
        },
        li_Switch(index) {
            this.currentIndex = index;
            this.startAutoPlay();
        }

    },
    // 现在不由mounted中直接启动轮播，而是在数据加载完成后启动
    mounted() {
        // console.log('ListBanner组件已挂载')
        // console.log('当前索引:', this.currentIndex)
        // console.log('图片数量:', this.images.length)
        // 组件挂载后启动自动轮播
    },
    beforeDestroy() {
        // 组件销毁前清除定时器
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    },
    watch: {
        carousel: {
            handler(newValue){
                if (newValue && newValue.length > 0) {
                    this.currentIndex = 0;
                    this.$nextTick(() => {
                        this.startAutoPlay();
                    });
                }
            },
            immediate: true
        }
    },
    computed: {
        carousel() {
            return this.$store.state.banner.carouselDta || [];
        },
        // 当前显示的图片
        currentAdd() {
            return this.carousel[this.currentIndex]?.add || ''
        },
        // 当前显示的top文字
        currentTitleTop() {
            return this.carousel[this.currentIndex]?.titleTop || ''
        },
        // 当前显示的middle文字
        currentTitleMiddle() {
            return this.carousel[this.currentIndex]?.titleMiddle || ''
        },
        // 当前显示的subtitle文字
        currentTitleSubtitle() {
            return this.carousel[this.currentIndex]?.titleSubtitle || ''
        }
    },
    data() {
        return {
            currentIndex: 0, // 添加缺失的currentIndex
            intervalId: null,
            
        }
    }

}

</script>

<style scoped>

@keyframes switch {
    0% {
        transform: scale(1);
        width: 9px;
        background-color: rgba(255, 255, 255, 0.6);
    }

    50% {
        transform: scale(1.3);
        width: 18px;
        background-color: #ff0f23;
        opacity: 0.9;
    }

    100% {
        transform: scale(1);
        width: 9px;
        background-color: rgba(255, 255, 255, 0.6);
    }
}

.switch {
    animation: switch 2.6s ease-in-out;
}

li {
    width: 9px;
    height: 9px;
    margin: 0 4px;
    background-color: rgb(255, 255, 255, .6);
    border: 1px solid rgb(255, 255, 255, .2);
    border-radius: 6px;
}

.slide_item-subtitle {
    font-size: 16px;
    line-height: 24px;
    font-family: JDZhengHT-Regular;
    margin-top: 12px;
    margin-left: 4px;
}

.slide_item_title-top,
.slide_item_title-middle {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    font-family: JDZhengHT-Regular;
}

.slide_item_title {
    width: 420px;
    height: 110px;
    color: rgb(250, 255, 255);
    position: relative;
    margin-left: 24px;
    margin-top: 80px;
}

.slide_item_lk {
    width: 732px;
    height: 400px;
    display: inline-block;
    background-size: cover;
    background-position: 80%;
    border-radius: 8px;
}

.slide_container {
    width: 732px;
    height: 400px;
}

.list_banner {
    height: auto;
    width: auto;
    position: absolute;
    top: -92px;
    left: 405px;
    padding: 0 16px;
    margin: 16px 0;
}
</style>