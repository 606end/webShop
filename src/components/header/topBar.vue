<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 11:58:43
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2025-12-30 16:35:58
 * @FilePath: \app\src\components\header\topBar.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 10:59:54
 * @LastEditors: cc19530632908@163.com cc19530632908@163.com
 * @LastEditTime: 2025-11-04 20:23:40
 * @FilePath: \breakVue2.0\app\src\components\header\topBar.vue
 * @Description: 商城网站顶部
 * 
 * Copyright (c) 2025 by Sea.H.J, All Rights Reserved. 
-->
<template>
    <header class="topBar">
        <div id="wrapper_w">
            <div class="topBar-wrapper">
                <ul class="tl" type="none">
                    <li><a href="">中国大陆版</a></li>
                    <li class="spacer"></li>
                    <li>你好，<a href="">
                            <!-- 声明式导航：务必要有to属性 -->
                            <router-link to="/login">请登录 </router-link>
                            <router-link to="/register">免费注册</router-link>
                        </a></li>
                    <li class="spacer"></li>
                    <li><a href="">切换至企业版</a></li>
                </ul>

                <ul class="tr" type="none">
                    <li><a href="">购物车</a></li>
                    <li class="spacer"></li>
                    <li><a href="">我的订单</a></li>
                    <li class="spacer"></li>
                    <li><a href="">我的京东</a></li>
                    <li class="spacer"></li>
                    <li><a href="">企业采购</a></li>
                    <li class="spacer"></li>
                    <li><a href="">商家服务</a></li>
                    <li class="spacer"></li>
                    <li><a href="">网站导航</a></li>
                    <li class="spacer"></li>
                    <li><a href="">京东手机</a></li>
                    <li class="spacer"></li>
                    <li><a href="">网站无障碍</a></li>
                    <li class="spacer"></li>
                </ul>
            </div>
        </div>

        <div class="bgc"
            style=" background-image: linear-gradient(rgb(255, 15, 35) 0%, rgb(255, 15, 35) 50%, transparent 100%)">
            <div class="bg">
            </div>
        </div>

        <div class="topBar-search" :style="changeStyle">
            <div class="w">
                <div id="logo" class="logo">
                    <h1 class="logo_tit">
                        <a class="logo_tit_link">
                            <router-link to="/home"><img src="./image/log.png" alt="京东，多快好省"></router-link>
                        </a>
                    </h1>
                </div>
            </div>
            <div id="search">
                <div class="search_box">
                    <input type="text" class="search_input" v-model="keyword">
                    <div class="search_bg"> </div>
                    <div class="search_photo">
                        <img src="https://img12.360buyimg.com/imagetools/jfs/t1/217403/22/44880/1174/670e0640F3236a0eb/a277335c97c54895.png"
                            alt="" class="photo_img">
                    </div>
                    <div class="search_select">
                        <span class="selected">{{searchTypeName}}</span>
                        <!-- TODO：完成展示，元素被home组件遮挡，后边还需要判断发送请求中的type属性，判断搜索类型 -->
                        <img src="https://img10.360buyimg.com/img/jfs/t1/311576/16/11940/466/68592c3aF916d167b/d74caae2639f2499.png"
                            alt="" class="selected_img">
                        <ul class="select_options" >
                            <li class="option1" @click= "toggleSearchType('product')"
                            :class="{ active: searchType === 'product'}">商品</li>
                            <li class="option2" @click= "toggleSearchType('shop')"
                            :class="{ active: searchType === 'shop' }">店铺</li>
                        </ul>
                    </div>
                    <!-- 编程式导航 -->
                    <button class="button" @click="goSearch">搜索</button>
                    <div class="hotWords">
                        <span class="hot-txt">屏幕护眼灯</span>
                        <span class="hot-txt">护眼台灯</span>
                        <span class="hot-txt">屏幕挂灯yeelight</span>
                        <span class="hot-txt">显示器灯</span>
                        <span class="hot-txt">台灯电脑桌专用</span>
                        <span class="hot-txt">屏幕挂灯京东自营</span>
                        <span class="hot-txt">显示器屏幕挂灯</span>
                        <span class="hot-txt">电脑灯</span>
                        <span class="hot-txt">桌面灯</span>
                        <span class="hot-txt">床头灯</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "topBar",
    data() {
        return {
            keyword: "",
            searchType: "product",
            searchTypeName: "商品",
        }
    },

    methods: {
        // 搜索按钮的回调函数：需要向search路由进行跳转
        async goSearch() {
            // 路由传递参数
            // 1：字符串形式
            // this.$router.push("/search/"+ this.keyword+ "?k="+ this.keyword.toUpperCase());
            // 2.模板字符串
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
            // 3.对象写法
            // this.$router.push({name: "searchPage", params:{keyword: this.keyword}, query:{k:this.keyword.toUpperCase()}})

            // 面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用
            // 答：路由跳转传参的时候，对象的写法可以是name、path形式，但是需要注意的是，path这种写法不能与params参数一起使用的
            // this.$router.push({path:'/search', params:{keyword: this.keyword}, query:{k:this.keyword.toUpperCase()}})

            // 面试题2：如何指定params参数可传可不传
            // 如果路由要求传递params参数，但是你就不传递params参数，发现一件事情，URL会有问题
            // 如何指定params参数可以不传递，或者不传递，在配置路由的时候，在占位的后边加上一个问号【params】可以传递或者不传递
            // this.$router.push({name: "searchPage", query:{k:this.keyword.toUpperCase()}})

            // 面试题3：params参数可以传递也可以不传递，但是如果传递空字符串，如何解决
            // 使用undefined解决：params参数可以传递、不传递（空的字符串）
            // this.$router.push({name: "searchPage", params:{keyword: '' || undefined}, query:{k:this.keyword.toUpperCase()}})

            // 面试题4：路由组件能不能传递props数据
            // 可以的，有三种写法


            // *********************************路由跳转+发送请求
            // 1.路由跳转
            // XXX:第一种方法由搜索按钮跳转兼顾请求发送
            console.log('搜索关键词:', this.keyword);
            this.$router.push({ name: "searchPage", params: { keyword: this.keyword }, query: { keyword: this.keyword, type: this.searchType, k: Date.now() } });
            console.log(this.$route)
            // 2.发起搜索请求
            // try {
            //     const searchParams = {
            //         keyword: this.keyword,
            //         page: 1,
            //         limit: 20
            //     };
            //     await this.$store.dispatch( 'userSearch', searchParams)
            // } catch (error) {
            //     console.log('搜索失败：', error)
            // }
            

        },
        toggleSearchType(type) {
            this.searchType = type;
            this.searchTypeName = type === 'product' ? '商品' : '店铺'
            console.log('搜索类型已切换为：', this.searchTypeName)
        }
    },
    computed: {
        changeStyle() {
            if (this.$route.name === 'searchPage') {
                return {
                    left: '300px',
                }
            } else {
                return {
                    left: '230px',
                    height: '226px'
                }
            }
        },
    }
}
</script>

<style scoped>
.hot-txt {
    display: inline-block;
    height: 16px;
    margin-right: 24px;
    line-height: 16px;
}

.hotWords {
    height: 16px;
    margin-top: 12px;
    overflow: hidden;
    font-family: PingFang SC;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    color: #505259;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.topBar {
    position: relative;
    width: 100%;
    z-index: 1000;
    /* 确保顶部栏在最上层 */
}

.topBar-wrapper {
    height: 36px;
    width: 100%;
    line-height: 36px;
    font-size: 12px;
    font-family: "PingFang SC", "Microsoft YaHei",
        system-ui, -apple-system, tahoma, arial,
        "Hiragino Sans GB", u5b8bu4f53, sans-serif;
    padding: 0 54px;
}

ul {
    display: flex;
}

li {
    padding: 0 8px;
}

li:hover {
    color: red;
}

.tl {
    float: left;
}

.tr {
    float: right;
}

.spacer {
    width: 0.5px;
    padding: 0 4px;
}

.bgc {
    width: 100%;
    height: 718px;
    background-image: linear-gradient(rgb(255, 15, 35) 0%, rgb(255, 15, 35) 50%, transparent 100%);
    position: absolute;
}

.bg {
    width: 100%;
    height: 242px;
    background: url('https://m.360buyimg.com/babel/jfs/t1/345146/2/19844/73348/6903687cFc818f8b8/9bd32906c5381a29.png');
    background-position-x: center;
    background-position-y: top;
    background-size: auto 242px;
    background-repeat: no-repeat;
}

.topBar-search {
    width: 100%;
    position: relative;
    left: 230px;
}

.w {
    height: 134px;
    position: relative;
}

.logo {
    width: 240px;
    height: 70px;
    position: absolute;
    left: 54px;
    top: 32px;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    overflow-clip-margin: content-box;
    overflow: clip;
}

#search {
    width: 1364px;
    height: 76px;
    position: absolute;
    top: 0px;
    left: 58px;
}

.search_box {
    width: 686px;
    height: 44px;
    margin: 0 auto;
    position: relative;
    top: 32px;
    background: #fff;
    border-radius: 8px;
}

.search_input {
    height: 40px;
    width: 100%;
    padding: 2px 128px 2px 90px;
    border-radius: 8px;
}

.search_select:hover .select_options {
    display: block;
    /* 悬停时显示 */
}

.search_select {
    width: 77px;
    height: 100%;
    color: #1A1A1A;
    font-family: PingFang SC;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    top: 0px;
    border-radius: 8px;
    background: #f7f8fc;
}

.select_options{
    width: 77px;
        position: absolute;
        display: none;
        top: 100%;
        left: 0;
        padding: 4px 0;
        border-radius: 8px;
        background: white;
        border: 1px solid #ddd;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
}

.option1, .option2{
    display: flex;
        justify-content: center;
        align-items: center;
        height: 42px;
        padding: 5px;
        margin-bottom: 4px;
        cursor: pointer;
            /* 添加手型指针 */
            transition: background-color 0.2s;
        
}

.active {
        border: 0.8px solid rgb(255, 15, 35);
            border-radius: 6px;
            color: rgb(255, 15, 35);
            background: rgb(255, 235, 241);
}
/* .selected{  
    
} */

.selected_img {
    width: 8px;
    height: 8px;
    margin-left: 4px;
    transition: transform 0.3s;
}

.search_select:hover .selected_img {
    transform: rotate(180deg);
}

.search_photo {
    width: 20px;
    height: 100%;
    position: absolute;
    right: 100px;
    top: 0px;
    display: flex;
    align-items: center;
}

.photo_img {
    height: 20px;
}

.search_box .button {
    width: 80px;
    height: 36px;
    color: #FFFFFF;
    font-family: PingFang SC;
    font-size: 16px;
    background: #ff0f23;
    border-radius: 6px;
    position: absolute;
    top: 4px;
    right: 2px;
}
</style>