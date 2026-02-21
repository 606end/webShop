<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 10:36:46
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-29 18:41:30
 * @FilePath: \app\src\detailedPage\pages\DetailedPage.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
  <div class="DetailedPage router_component">
    <TopBarShortcut />
    <Breadcrumbs />
    <ShopHeader />
    <div class="w">
      <div class="product-intro clearfix" style="margin-bottom: 15px; margin-top: 24px; position: relative;">
        <div class="preview-wrap">
            <GalleryPreview />
            <DetailTabs />
        </div>
        <ItemInfoPanel />
      </div>
    </div>
  </div>
</template>

<script>
import TopBarShortcut from './TopBarShortcut.vue'
import Breadcrumbs from './BreadcrumbsPage.vue'
import ShopHeader from './ShopHeader.vue'
import GalleryPreview from './GalleryPreview.vue'
import DetailTabs from './DetailTabs.vue'
import ItemInfoPanel from './ItemInfoPanel.vue'

export default {
  name: 'DetailedPage',
  components: {
    TopBarShortcut,
    Breadcrumbs,
    ShopHeader,
    GalleryPreview,
    DetailTabs,
    ItemInfoPanel
  }
}
</script>

<style>
.product-intro .itemInfo-wrap .information-wrap {
    width: 594px;
    border-radius: 8px;
    position: relative;
    scrollbar-width: none;
}

.product-intro .itemInfo-wrap {
    float: right;
    width: 594px;
    height: 720px;
    min-height: 479px;
    position: relative;
    background: url(https://img12.360buyimg.com/imagetools/jfs/t1/316723/8/6968/21139/6842524fF976ecf4c/fd5b5e450adc7bf1.png) left top / 100% 100% no-repeat;
}

.product-intro .preview-wrap {
    float: left;
    width: 990px;
}

.DetailedPage .detail {
    width: 990px;
}

/* 公共样式 */
.top-bar .clickHover.dropdown-layer,
.top-bar .dropdown:hover .dropdown-layer,
.top-bar .shortcut_btn:hover .dropdown-layer {
    display: block;
}

.top-bar #ttbar-navs:hover .dropdown-layer {
    display: flex;
}

.fl {
    float: left;
    display: flex;
}

.w {
    margin: 0 auto;
}

/* 大于等于1680px的屏幕 */
@media screen and (min-width: 1680px) {

    .w,
    ._scoped_eidqb_1 {
        width: 1600px;
        /* 1680 - 136.4*2 = 1407.2 ≈ 1408px */
    }
}

/* 小于1680px的屏幕（最大1679px） */
@media screen and (max-width: 1679px) {

    .w,
    ._scoped_eidqb_1 {
        width: 1200px;
        /* 1679 - 136.4*2 = 1406.2，但京东设置1200px */
    }

    ._search_main_1pcds_1,
    .product-intro .itemInfo-wrap,
    .product-intro .itemInfo-wrap .information-wrap {
        width: 442px;
    }

    ._search_box_1pcds_7 {
        width: 428px;
    }

    .product-intro .detail,
    .product-intro .preview-wrap {
        width: 742px;
    }

    ._gallery_1azii_1 .thumbnails {
        width: 81px;
        height: 540px;
    }

    ._gallery_1azii_1 .stage .image-area .main-img,
    ._gallery_1azii_1 .stage .image-area .main-img {
        max-width: 540px;
    }

    ._gallery_1azii_1 .stage {
        width: 645px;
        height: 540px;
    }

    .sku-title .follow-btn {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: justify;
        height: 42px;
        width: 42px;
        justify-content: space-between;
        border-left: 1px solid rgba(0, 0, 0, .12);
    }

                .item_free_card {
                    min-width: 15% !important;
                }
}

@media screen and (min-width: 1536px) {
    .item_free_card {
        max-width: -webkit-calc(16.66666667% - 16px) !important;
        max-width: -moz-calc(16.66666667% - 16px) !important;
        max-width: calc(16.66666667% - 16px) !important;
        min-width: -webkit-calc(16.66666667% - 16px) !important;
        min-width: -moz-calc(16.66666667% - 16px) !important;
        min-width: calc(16.66666667% - 16px) !important;
    }
}

@media screen and (min-width: 1464px) {
    .item_free_card {
        max-width: -webkit-calc(16.66666667% - 16px) !important;
        max-width: -moz-calc(16.66666667% - 16px) !important;
        max-width: calc(16.66666667% - 16px) !important;
        min-width: -webkit-calc(16.66666667% - 16px) !important;
        min-width: -moz-calc(16.66666667% - 16px) !important;
        min-width: calc(16.66666667% - 16px) !important;
    }
}

/* 更小屏幕的适配 */
@media screen and (max-width: 1366px) {
    .w {
        width: 1100px;
        padding: 0 20px;
    }
}

@media screen and (max-width: 1200px) {
    .w {
        width: 100%;
        padding: 0 15px;
    }
}

.router_component {
    position: relative;
    z-index: 1000;
    width: 82%;
    margin: 0 8%;
}

.DetailedPage {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    background-color: #f6f7fb;
    font: 12px / 150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
    font-family: PingFang SC, Source Han Sans CN, Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, 宋体, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #666;
    overflow: hidden;
}
</style>