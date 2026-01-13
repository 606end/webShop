<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-11 13:36:24
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-13 18:37:28
 * @FilePath: \app\src\pages\detailed\detailed.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
    <div class="DetailedPage">
        <div class="shortcut">
            <div class="top-bar">
                <div class="top-bar-wrapper">
                    <ul class="fl">
                        <li id="bar-home" class="shortcut_btn">
                            <div id="my-home" class="dt">
                                <a class="logo-icon" target="_blank" href="#"></a>
                                <svg> </svg>
                                <a target="_blank" href="#">京东首页</a>
                            </div>
                        </li>
                        <li class="shortcut_btn dropdown" id="ttbar-mycity-2024">
                            <div id="areamini-2024" class="dt" aria-expanded="false">
                                <a class="logo-icon" target="_blank" href="#">中国大陆版 - 陕西</a>
                                <span class="iconfont"></span>
                            </div>
                            
                        </li>
                        <li class="spacer"></li>
                        <li id="ttbar-login-2024" class="shortcut_btn fore1 dropdown shortcut_userico3">
                            <div class="dt cw-icon">
                                <i class="shortcut_userico_ico"></i>
                                <a class="nickname" target="_blank" rel="noopener noreferrer"
                                    href="//home.jd.com/">圆圆蜜柑</a>
                                <i class="iconfont usericonfont"></i>
                            </div>
                        </li>
                        <div class="shortcut_btn" style="float: left; display: flex;">
                            <li class="spacer"></li>
                            <li class="shortcut_btn">
                                <div class="dt">
                                    <div class="tooltip-trigger"><a>找同款比价神器</a></div>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <ul class="fr">
                        <li class="shortcut_btn fore2">
                            <div id="my-cart" class="dt">
                                <svg></svg>
                                <a target="_blank" href="#" aria-label="购物车&nbsp;131">购物车&nbsp;131</a>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn fore2">
                            <div class="dt">
                                <a target="_blank" href="#" aria-label="我的订单">我的订单</a>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn" id="shortcut_btn fore3 dropdown">
                            <div class="dt">
                                <a target="_blank" href="#" aria-label="我的京东">我的京东</a>
                                <i class="iconfont"></i>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn fore5 dropdown className shortcut_btn_company">
                            <div class="dt cw-icon">
                                <a target="_blank" href="#" aria-label="企业采购">企业采购</a>
                                <i class="iconfont"></i>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn fore9 dropdown" id="ttbar-navs">
                            <div class="dt cw-icon" id="shortcutSitenavButton" role="button" aria-label="网站导航">
                                网站导航
                                <i class="iconfont"></i>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn fore10 mobile dropdown" id="J_mobile">
                            <div class="dt cw-icon">
                                手机京东
                                <i class="iconfont"></i>
                            </div>
                        </li>
                        <li class="spacer"></li>
                        <li class="shortcut_btn" id="shortcut_btn fore3 dropdown">
                            <div class="dt">
                                <a target="_blank" href="#" aria-label="网站无障碍">网站无障碍</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailedPage',

}
</script>

<style scoped>
.usericonfont{
    position: absolute;
        right: 6px;
        top: 12px;
}

.nickname{
    display: block;
    max-width: 70px;
    overflow: hidden;
    padding-right: 6px;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 50px;
}

.shortcut_userico_ico{
    display: block;
    width: 40px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 9px;
    background-image: url(https://img10.360buyimg.com/imagetools/jfs/t1/301708/17/415/2638/680f5e02F45d33ba5/457cbe6abf1f78e3.png);
    background-repeat: no-repeat;
    background-size: 40px 16px;
}

li.spacer{
    width: .5px;
    height: 8px;
    margin: 14px 2px 0;
    overflow: hidden;

}

.iconfont {
    background-image: url(https://img10.360buyimg.com/img/jfs/t1/311576/16/11940/466/68592c3aF916d167b/d74caae2639f2499.png);
    width: 9px;
    height: 9px;
    margin-top: 2px;
    margin-left: 6px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    /* 适配背景图大小 */
}

svg {
    height: 14px;
    margin-right: 4px;
    vertical-align: middle;
    width: 14px;
}

#bar-home .logo-icon {
    background: url(https://img12.360buyimg.com/img/jfs/t1/109080/21/58367/14698/675171baFb8b7a6d2/22ad515c81c73261.png);
    height: 17px;
    width: 55px;
    background-size: 100%;
    margin-top: -3px;
    margin-right: 10px;
}

#my-home,
.dt {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    padding-left: 6px;
    padding-right: 6px;
    position: relative ;
}

.fr {
    display: flex;
}

.fl {
    float: left;
    display: flex;
}

.top-bar-wrapper {
    width: 100%;
    height: 36px;
    line-height: 36px;
    max-width: 1600px;
    min-width: 1180px;
    padding: 0 40px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.shortcut {
    height: 36.5px;
    margin-bottom: 24px;
}

.top-bar {
    height: 36.5px;
    background-color: #fff;
    border-bottom: .5px solid rgba(0, 0, 0, .06);
    color: #505259;
    font: 12px / 1.5 PingFang SC, Microsoft YaHei, system-ui, -apple-system, tahoma, arial, Hiragino Sans GB, u5b8bu4f53, sans-serif;

}

.DetailedPage {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f6f7fb;
    font: 12px / 150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #666;
    background: #fff;
}
</style>