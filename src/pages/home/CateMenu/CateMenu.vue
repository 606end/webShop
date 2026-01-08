<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-05 11:03:01
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2026-01-04 14:00:34
 * @FilePath: \app\src\pages\home\CateMenu\CateMenu.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="cate_menu">
        <div class="cate_nav" @click="menuClick">
            <ul class="cate_menu_list">
                <!-- v-for 循环渲染每个菜单项 :class 动态绑定类名
                当 activeIndex === index 时添加 active 类 
                @mouseenter 鼠标进入时调用 showPopup(index) @mouseleave 鼠标离开时调用 hidePopup()-->
                <li class="cate_menu_item" v-for="(item, index) in menuItems" :key="index"
                    :class="{ active: activeIndex === index }" @mouseenter="showPopup(index)" @mouseleave="hidePopup()"
                    :data-classification="item.parent_id">
                    <i class="cate_menu_icon" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></i>
                    <template v-for="(link, linkIndex) in item.links">
                        <a :key="linkIndex" class="cate_menu_lk" :data-first-classification="link.sub_name" :data-classification="link.sub_tit">{{ link.sub_name }}</a>
                        <span v-if="linkIndex < item.links.length - 1" :key="'sep-' + linkIndex">/</span>
                    </template>
                </li>
            </ul>
            <!-- v-show="activeIndex !== -1" 当有激活项时显示弹出层
            @mouseenter 和 @mouseleave 处理弹出层本身的鼠标事件 -->
            <div class="cate_menu_pop" v-show="activeIndex !== -1" @mouseenter="onPopupEnter"
                @mouseleave="onPopupLeave">
                <div class=" cate_part">
                    <div class="cate_part_coll">
                        <div class="cate_channel"></div>
                        <div class="cate_detail">
                            <!-- 使用计算属性 activeCategories 会返回当前鼠标索引的数据 循环渲染当前激活菜单项的分类内容 
                            自动响应 activeIndex 的变化 -->
                            <dl v-for="(category, categoryIndex) in activeCategories" class="cate_detail_item"
                                :key="categoryIndex">
                                <dt class="cate_detail_tit">
                                    <a href="" class="cate_detail_tit_lk">
                                        <span class="cate_detail_tit_content"
                                            :data-second-classification="category.title"
                                            :data-classification="category.sons_id">{{
                                                category.title }}</span>
                                        <i class="cate_detail_tit_arrow"></i>
                                    </a>
                                </dt>
                                <dd class="cate_detail_con">
                                    <a v-for="(subItem, subIndex) in category.subItems" :key="subIndex"
                                        :href="subItem.url" class="cate_detail_con_lk" target="_blank">
                                        <span class="cate_detail_tit_content"
                                            :data-third-classification="subItem.name"
                                            :data-classification="subItem.grandson_id">{{
                                                subItem.name }}</span>
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'CateMenu',
    data() {
        return {
            activeIndex: -1,/* activeIndex 记录当前鼠标悬停的菜单项索引，初始为-1表示没有激活项 */
        }
    },
    // 迁移到home组件统一发送请求
    // async mounted() {
    //     await this.$store.dispatch( 'cateMenuList')
    // },
    computed: {
        // 这是一个响应式计算属性，当依赖的数据变化时会自动重新计算。如果不是 -1，返回对应菜单项的 categories 数据
        activeCategories() {
            // console.log('activeIndex:', this.activeIndex); // 调试用
            if (this.activeIndex === -1) return [];
            const categories = this.menuItems[this.activeIndex].categories;
            // console.log('activeCategories:', categories); // 调试用
            return categories;
        },
        //返回Vuex中cateMenu数据，当menuItems变化时，自动更新
        menuItems() {
            return this.$store.state.banner.menuItems
            // Vuex模块化后读取数据一定要在.state后加模块名称
        },
    },
    methods: {
        //检查是否有正在运行的隐藏定时器 (hideTimer)，如果有，清除定时器（防止立即隐藏）
        showPopup(index) {
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }
            // console.log('showPopup:', index); // 调试用
            this.activeIndex = index;
        },
        //设置一个200毫秒的定时器，200毫秒后执行回调函数，将 activeIndex 设为 - 1（隐藏弹出层）
        hidePopup() {
            this.hideTimer = setTimeout(() => {
                // console.log('hidePopup'); // 调试用
                this.activeIndex = -1
            }, 200);
        },
        // 为弹出层添加鼠标事件.当鼠标移动到弹出层时，清除隐藏定时器。防止弹出层在用户还在操作时突然消失       
        onPopupEnter() {
            // 清除隐藏定时器
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }
        },
        //当鼠标离开弹出层时，触发隐藏逻辑 重新开始200毫秒的延迟隐藏
        onPopupLeave() {
            this.hidePopup();
        },
        // 三级菜单的点击事件（使用事件代理委托给父元素，统一响应）自定义属性必须写在要拿值的元素上
        menuClick(e) {
            e.preventDefault();
            let { firstClassification, secondClassification, thirdClassification } = e.target.dataset
            // console.log(e.target.dataset)
            //解构 let name = event.target.dataset.name; 从 event.target.dataset 对象中提取 name 属性
            if (firstClassification || secondClassification || thirdClassification) {
                const goNull = (dataBase) => {
                    for (const [key, value] of Object.entries(dataBase)) {
                        if (value) {
                            return {
                                categoryName: value,
                                level: key,
                            };
                        }
                    }
                }

                const newData = goNull({ firstClassification, secondClassification, thirdClassification })
                if (newData.level === 'thirdClassification') {
                    // 通过DOM层级查询找到对应的二级标题
                    // if语句中的判断要为字符串
                    const secondTitle = this.getSecondTitleByDOM(e.target);
                    console.log('被点击的二级标题', secondTitle)
                    if (secondTitle) {
                        newData.parentSecondTitle = secondTitle
                    }
                }
                
                newData.dataClassification = e.target.dataset.classification
                // console.log(newData)
                this.$router.push({
                    name: 'searchPage', 
                    params: { 
                        categoryName: newData.categoryName || 'default' //确保有keyword值                        
                    }, 
                    query: {
                        ...newData, // 展开newData的所有属性 
                    }
                })
                // console.log(this.$route)
            }

        },
        getSecondTitleByDOM(clickedElement) {
            // console.log('我被调用了', clickedElement)
            // 向上找到最近的.cate_detail_item(dl元素)
            const cateDetailItem = clickedElement.closest('.cate_detail_item');
            if (cateDetailItem) {
                // 在 dl 中找到二级标题的 dt 元素
                const secondTitleElement = cateDetailItem.querySelector('.cate_detail_tit .cate_detail_tit_content');
                // console.log(secondTitleElement)
                if (secondTitleElement) {
                    return secondTitleElement.textContent || secondTitleElement.innerText
                }
            }
        }
    }
}
</script>

<style scoped>
.active {
    background-color: #ff0f23 !important;
    opacity: 0.8;
    color: #fff;
}

.active .cate_menu_lk {
    color: #fff;
}

.active .cate_menu_icon {
    filter: brightness(0) invert(1);
}

.cate_detail_con a {
    color: #666;
    font-size: 12px;
}

.cate_detail_tit_content {
    width: auto;
    text-align: left;
    overflow: visible;
    display: inline-block;
    white-space: nowrap;
    text-overflow: unset;
    color: #1a1a1a;
}

.cate_detail_tit_lk {
    color: #1a1a1a;
    font-weight: 700;
}

.cate_detail_con_lk {
    height: 16px;
    width: auto;
    margin: 3px 0;
    padding: 0 5px;
    line-height: 16px;
    white-space: nowrap;
}

.cate_part {
    padding: 16px;
}

.cate_detail_item {
    width: auto;
    height: auto;
    padding-left: 80px;
    position: relative;
}

.cate_detail_tit {
    position: absolute;
    left: 0px;
    top: 6px;
}

.cate_detail_con {
    padding: 5px 0;
}

.cate_part_coll {
    width: 746px;
    float: left;
}

.cate_detail {
    width: auto;
    height: auto;
    padding-top: 16px;
}

.cate_menu_pop {
    width: 1023px;
    height: 400px;
    border: 1px solid #ff0f23;
    position: absolute;
    top: 0px;
    left: 240px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 1000;
}

span {
    font-size: 12px;
    padding: 0 4px;
    color: #666;
}

.cate_menu_lk {
    font-family: PingFang SC;
    font-size: 14px;
    color: #1a1a1a;
    transition: color 0.2s ease;
}

.cate_menu_icon {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-top: -10px;
    margin-right: 8px;
    vertical-align: middle;
    background-size: 100%;
    transition: color 0.2s ease;
}

.cate_menu_item:hover .cate_menu_icon {
    filter: brightness(0) invert(1);
    /* 图标变白色 */
}

.cate_menu_lk:hover {
    color: #000000;
}

.cate_menu_item:hover {
    background-color: #d9d9d9;
}

.cate_menu_item {
    height: 34px;
    line-height: 34px;
    padding-left: 18px;
    font-size: 0;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
}

.cate_menu_list {
    color: #636363;
    padding-top: 8px;
}

.cate_nav {
    background-color: #f7f8fc;
    width: 248px;
    position: relative;
    top: -92px;
    height: 400px;
    margin-right: 16px;
    border-radius: 8px;
}

.cate_menu {
    width: 100%;
    height: 423px;
    margin-right: 16px;
    padding: 16px;
}
</style>