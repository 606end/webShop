<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-12-03 22:07:32
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-12-18 16:25:40
 * @FilePath: \app\src\pages\home\BannerRight\BannerRight.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="banner_right">
        <div class="banner_right_container">
            <a class="banner_right_item" v-for="(image, index) in bannerRt" :key="index" :style="mtActive(index)"></a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BannerRight',
    data() {
        return {

        }
    },
    computed: {
        bannerRt() {
            return this.$store.state.banner.bannerRt
        }
    },
    methods: {
        mtActive(index) {
            const baseStyle = {
                backgroundImage:`url(${this.bannerRt[index]})`
            };

            if (index > 0) {
                return {
                    ...baseStyle,
                    marginTop: '9px'
                };
            }
            return baseStyle;
        }
    },

}
</script>

<style scoped>
.banner_right {
    width: 256px;
    height: 400px;
    border-radius: 8px;
    background-color: #f7f8fc;
    position: absolute;
    top: -76px;
    right: 105px;
}

a {
    width: 256px;
    height: 88px;
    display: inline-block;
    border-radius: 8px;
    background-size: cover;
    background-position: 50%;
}
</style>