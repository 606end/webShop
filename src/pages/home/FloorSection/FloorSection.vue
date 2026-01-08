<!--
 * @Author: Sam cc19530632908@163.com
 * @Date: 2025-12-21 13:59:56
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2026-01-04 19:49:53
 * @FilePath: \app\src\pages\home\FloorSection\FloorSection.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by Sea.H.J,, All Rights Reserved. 
-->
<template>
    <div class="floors" :style="changeStyle.redirectFloors">
        <div class="FloorContent" :style="changeStyle.redirectFloorsContent">
            <ul class="FloorContentWrapper" style="display: flex; flex-wrap: wrap;">
                <li class=" FloorContentItem" v-for="product in productData" :id="product.id" :key="product.id"
                    :style="changeStyle.redirectFloorsContentItem">
                    <a class=" item_lk" :href="product.href" :title="product.title"
                        :aria-label="product.more2_info_name" data-sku="product.sku">
                        <div class="item_img">
                            <img :src="product.advertCard">
                        </div>
                        <div class="item_content">
                            <div class="item_title">
                                <p>{{ product.description }}</p>
                            </div>
                            <div class="item_tags">
                                <div v-for="(tag, index) in product.tags" :key="index">
                                    <img :src="tag">
                                </div>
                            </div>
                            <div class="item_prices">
                                <div class="item_price">
                                    <i
                                        style="font-weight: 700; margin-right: 2px;font-family: Microsoftyale-regular, Arial, Helvetica, sans-serif;">¥</i>
                                    <span style="font-size: 24px; font-weight: 500;">{{ product.price }}<span
                                            style="font-size:  16px;">{{ product.decimal }}</span></span>
                                </div>
                                <!-- <a style="background-image: url(https://img13.360buyimg.com/imagetools/jfs/t1/2664…/13108/630/678a184aFb9512db9/b1a22c498eb9245e.png);"></a> -->
                                <span class="price_txt" title="798.00">{{ product.originalPrice }}</span>
                            </div>
                            <div class="shopFloor" v-show="$route.name === 'searchPage'">
                                <span class="sp-name">
                                    <span
                                        style="font-size: 14px; line-height: 16px; color: #888b94; text-overflow: ellipsis; white-space: nowrap;">{{ product.shopInfo }}</span>
                                    <img style="height: 8px; margin-left: 4px;" class="link_icon"
                                        src="https://img12.360buyimg.com/img/jfs/t1/256497/11/20529/621/67aeeb77Ff060ed27/78e88c35acf3518e.png">
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// 组件挂载 → mounted() 执行 → dispatch action → action 更新 state → computed 检测到 state 变化 →自动更新 → 模板重新渲染
export default {
    name: 'FloorSection',
    props: ['searchList'],
    data() {
        return {
            // productData: '',
            // loading: false,
        }
    },
    async mounted() {
        // await this.reqRecommend();
        try {
            // 数据获取后，会自动更新到 computed 的 recommendList
            await this.$store.dispatch('Recommend')
        } catch (error) {
            this.$message.error('获取商品列表失败')
        }

    },
    // computed 是计算属性，当依赖的 state 变化时自动更新
    computed: {
        loading() {
            return this.$store.state.product.loading
        },
        // 当 Vuex 中的 recommendList 变化时，这里会自动更新
        productData() {
            if (this.$route.name === 'searchPage') {
                return this.$props.searchList
            } else {
                return this.$store.state.product.productData
            }
            // Vuex模块化后读取数据一定要在.state后加模块名称
        },
        // XXX:利用计算属性动态判断当前页面，动态修改部分元素样式。后边修改是否可以拿到元素的id，避免在元素内联添加样式
        changeStyle() {
            if (this.$route.name === 'searchPage') {
                return {
                    redirectFloors: {
                        width: 'auto',
                        position: 'static',
                    },
                    redirectFloorsContent: {
                        padding: '0 8px',
                        width: 'auto'
                    },
                    redirectFloorsContentItem: {
                        width: '238px',
                        height: '380px'
                    }

                }
            } else {
                return {
                    redirectFloors: {
                        position: 'relative',
                        top: '-70px',
                        right: '-90px'
                    },
                }
            }

        }
        // 也可以使用...mapState（需要使用import引入）({
        // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
        // 注入一个参数state，其实际为大仓库中的数据
        // Recommend: (state) =>{
        //  return state.product.productData
        // }
        // })
    },
    methods: {
        // 组件中发送网络请求，已转到Vuex管理
        // async reqRecommend() {
        //     this.loading = true;
        //     try{
        //         const data = await requests({ url: '/product/recommend', method: 'get' });
        //         this.productData = data;    
        //     } catch(error) {
        //         this.$message.error('获取商品列表失败');
        //     } finally {
        //         this.loading = false;
        //     }
        // }
    }
}
</script>

<style scoped>
.sp-name {
    display: flex;
    align-items: center;
    overflow: hidden;
}

.shopFloor {
    height: 16px;
    margin-top: 8px;
    font-size: 14px;
    color: #888b94;
}

.FloorContentItem:hover {
    border: 1px solid #ff475d;
    border-radius: 12px;
    box-shadow: 2px 4px 16px #00000029;
}

.price_txt {
    color: #8C8C8C;
    font-size: 14px;
    line-height: 1;
    margin-left: 4px;
    position: relative;
    top: 3px;
}

.item_price {
    height: 16px;
    color: #ff0f23;
    line-height: 14px;
    font-size: 16px;
    display: inline-flex;
    -webkit-box-align: end;
    align-items: flex-end;
    position: relative;
    top: 3px;
}

.item_prices {
    height: 24px;
    display: flex;
    align-items: flex-end;
}

.item_tags img {
    height: 18px;
    line-height: 24px;
    margin-right: 4px;
}

.item_tags {
    height: 24px;
    margin-top: 6px;
    display: flex;

}

.item_title>p {
    line-height: 24px;
    height: 48px;
    font-size: 16px;
    text-align: left;
    color: #1a1a1a;
    overflow: hidden;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 控制商品主题的显示行，避免主题过长溢出容器 */
}

.item_img>img {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}

.item_content {
    height: 100px;
    margin: 8px 0 12px;
    line-height: 24px;
}

.FloorContentItem {
    width: 208.8px;
    height: 328.8px;
    margin: 0 8px 10px 8px;
}

.FloorContent {
    width: 1364.8px;
    /* height: 3124.2px; */
    padding: 16px 8px 0 8px;
}

.floors {
    width: 1364.8px;
    /* height: 3124.2px; */
    background-color: #fff;
    position: relative;
    top: -70px;
    right: 32px;
    border-radius: 12px;
    background-color: #f7f8fc;
}
</style>