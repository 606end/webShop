<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 10:37:15
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-29 14:27:17
 * @FilePath: \app\src\detailedPage\pages\TopBarShortcut.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
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
                        <div class="dropdown-layer" tabindex="-1" area-labelledby="areamini" role="menu">
                            <div class="areamini_inter">
                                <div class="areamini_inter_list">
                                    <div class="areamini_inter_item selected"><a class="areamini_inter_lk" href="#"
                                            data-ver-id="0" data-area="1" data-ver-href="//jd.com" role="menuitem"
                                            tabindex="-1">
                                            <div class="areamini_inter_name">中国大陆版</div>
                                        </a></div>
                                    <div class="areamini_inter_item"><a class="areamini_inter_lk" href="#"
                                            data-ver-id="1" data-area="52993" data-ver-href="//hk.jd.com"
                                            role="menuitem" tabindex="-1">
                                            <div class="areamini_inter_name">中國港澳版</div>
                                        </a></div>
                                    <div class="areamini_inter_item"><a class="areamini_inter_lk" href="#"
                                            data-ver-id="2" data-area="32" data-ver-href="//tw.jd.com" role="menuitem"
                                            tabindex="-1">
                                            <div class="areamini_inter_name">中國台灣版</div>
                                        </a></div>
                                    <div class="areamini_inter_item"><a class="areamini_inter_lk" href="#"
                                            data-ver-id="3" data-area="53283" data-ver-href="//global.jd.com"
                                            role="menuitem" tabindex="-1">
                                            <div class="areamini_inter_name">京东全球版</div>
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li id="ttbar-login-2024" class="shortcut_btn fore1 dropdown shortcut_userico3">
                        <div class="dt cw-icon">
                            <i class="shortcut_userico_ico"></i>
                            <a class="nickname" target="_blank" rel="noopener noreferrer" href="//home.jd.com/">圆圆蜜柑</a>
                            <i class="iconfont usericonfont"></i>
                        </div>
                        <div class="dd dropdown-layer">
                            <div class="userinfo"><a class="u-pic" target="_blank" rel="noopener noreferrer"
                                    href="//home.jd.com/"><img
                                        src="//storage.360buyimg.com/i.imageUpload/6a645f3637346166373631616331363831363538313032363636363733_mid.jpg"
                                        width="60" height="60"></a>
                                <div class="u-msg"><a
                                        href="//plus.jd.com/index?flow_system=appicon&amp;flow_entrance=appicon1&amp;flow_channel=pc"
                                        target="_blank" rel="noopener noreferrer">体验更多尊享特权<img class="arrow-2024"
                                            src="//img14.360buyimg.com/imagetools/jfs/t1/237010/31/28274/393/675b251cF461edeb5/522413f8709f596a.png"></a>
                                    <div class="link-action-wrap"><a href="javascript:void(0)"
                                            class="link-change link-change-color">切换账号</a><a href="javascript:void(0)"
                                            class="link-logout link-change-color">退出</a></div>
                                </div>
                            </div>
                            <div class="userbadge">
                                <div class="slider badge_list">
                                    <div class="slider_list" style="overflow: hidden;">
                                        <div class="slider_wrapper"
                                            style="opacity: 1; width: 630px; transform: translate3d(0px, 0px, 0px); transition: none;">
                                            <div class="slider_item badge_item fore1 slider_active" data-index="0"
                                                style="float: left; width: 70px;"><a href="https://plus.jd.com/index"
                                                    target="_blank" rel="noopener noreferrer"><i
                                                        class="icobadage_common"
                                                        style="background-image: url(&quot;https://m.360buyimg.com/babel/jfs/t1/233587/17/35309/9892/67603419Fa9a0cfd8/c580237319888a20.png&quot;);"></i>
                                                    <p class="u-name">PLUS专享</p>
                                                </a></div>
                                            <div class="slider_item badge_item slider_active" data-index="1"
                                                style="float: left; width: 70px;"><a
                                                    href="https://plus.jd.com/right/index#item-freight" target="_blank"
                                                    rel="noopener noreferrer"><i class="icobadage_common"
                                                        style="background-image: url(&quot;https://m.360buyimg.com/babel/jfs/t1/231494/7/36361/8491/67603424Fcdbecba8/daec4d0aa1b32367.png&quot;);"></i>
                                                    <p class="u-name">无限免邮</p>
                                                </a></div>
                                            <div class="slider_item badge_item slider_active" data-index="2"
                                                style="float: left; width: 70px;"><a
                                                    href="https://plus.jd.com/right/index#item-change180"
                                                    target="_blank" rel="noopener noreferrer" tabindex="-1"><i
                                                        class="icobadage_common"
                                                        style="background-image: url(&quot;https://m.360buyimg.com/babel/jfs/t1/256119/26/10937/6499/677ea4dfFb2de7e39/23ecd3f6a3e5b1b2.png&quot;);"></i>
                                                    <p class="u-name">只换不修</p>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <div id="my-cart" class="dt cw-icon">
                            <svg></svg>
                            <a target="_blank" href="#" aria-label="购物车&nbsp;131">购物车&nbsp;131</a>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li class="shortcut_btn fore2">
                        <div class="dt cw-icon">
                            <a target="_blank" href="#" aria-label="我的订单">我的订单</a>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li class="shortcut_btn fore3 dropdown" id="ttbar-myjd-2024">
                        <div class="dt cw-icon">
                            <a target="_blank" href="#" aria-label="我的京东">我的京东</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dd dropdown-layer">
                            <div class="myjdlist">
                                <div class="fore1">
                                    <div class="item"><a href="//order.jd.com/center/list.action" target="_blank"
                                            rel="noopener noreferrer">待处理订单<span
                                                class="shortcut_num style-red">3</span></a></div>
                                    <div class="item"><a href="//myjd.jd.com/afs/indexNew.action?entry=1"
                                            target="_blank" rel="noopener noreferrer">返修退换货</a></div>
                                </div>
                                <div class="fore2">
                                    <div class="item"><a href="http://question.jd.com/myjd/getMyjdAnswerList.action"
                                            target="_blank" rel="noopener noreferrer">我的问答<span
                                                class="shortcut_num style-red">2</span></a></div>
                                    <div class="item"><a href="//t.jd.com/home/follow" target="_blank"
                                            rel="noopener noreferrer">我的关注</a></div>
                                </div>
                                <div class="fore3">
                                    <div class="item"><a
                                            href="//t.jd.com/product/followProductList.action?isReduce=true"
                                            target="_blank" rel="noopener noreferrer">降价商品<span
                                                class="shortcut_num style-red">0</span></a></div>
                                </div>
                            </div>
                            <div class="myjdlist myjdlist_2">
                                <div class="fore1">
                                    <div class="item"><a href="//bean.jd.com/myJingBean/list" target="_blank"
                                            rel="noopener noreferrer">我的京豆</a></div>
                                    <div class="item"><a href="//trade.jr.jd.com/centre/browse.action" target="_blank"
                                            rel="noopener noreferrer">我的理财</a></div>
                                </div>
                                <div class="fore2">
                                    <div class="item"><a href="//quan.jd.com/user_quan.action" target="_blank"
                                            rel="noopener noreferrer">我的优惠券<span
                                                class="shortcut_num style-red">50</span></a></div>
                                </div>
                                <div class="fore3">
                                    <div class="item baitiao"><a href="http://baitiao.jd.com"
                                            clstag="jr|keycount|njdhome|wdbaitiao" target="_blank"
                                            rel="noopener noreferrer">我的白条</a></div>
                                </div>
                            </div>
                            <div class="myjdlist myjdlist_3">
                                <div class="sitem"><a href="//help.jd.com/index.html" target="_blank" class="0"
                                        tabindex="-1" role="menuitem">帮助中心</a></div>
                                <div class="sitem"><a href="//myjd.jd.com/afs/indexNew.action?entry=2" target="_blank"
                                        class="0" tabindex="-1" role="menuitem">售后服务</a></div>
                                <div class="sitem"><a href="//chat.jd.com/jdchat/custom.action " target="_blank"
                                        class="0" tabindex="-1" role="menuitem">在线客服</a></div>
                                <div class="sitem"><a href="//myjd-crm.jd.com/opinion/orderList.action" target="_blank"
                                        class="0" tabindex="-1" role="menuitem">意见建议</a></div>
                                <div class="sitem"><a href="//telpc.jd.com/appoint/telebooking.action" target="_blank"
                                        class="0" tabindex="-1" role="menuitem">电话客服</a></div>
                                <div class="sitem"><a href="//www.jd.com/contact/service.html" target="_blank" class="0"
                                        tabindex="-1" role="menuitem">客服邮箱</a></div>
                                <div class="sitem"><a href="https://jrhelp.jd.com/" target="_blank" class="0"
                                        tabindex="-1" role="menuitem">金融咨询</a></div>
                                <div class="sitem"><a href="https://jdcs.jd.com?venderId=1&amp;entry=jd_web_hwqyzy"
                                        target="_blank" class="0" tabindex="-1" role="menuitem">全球售客服</a></div>
                                <div class="sitem"><a
                                        href="https://jdcs.jd.com/jdchat/custom.action?entry=jd_web_jdsyqyfw&amp;venderId=1"
                                        target="_blank" class="0" tabindex="-1" role="menuitem">企业客服</a></div>
                                <div class="sitem"><a href="https://jdcs.jd.com?venderId=1&amp;entry=jd_web_gaqyzy"
                                        target="_blank" class="0" tabindex="-1" role="menuitem">港澳台客服</a></div>
                            </div>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li class="shortcut_btn fore5 dropdown className shortcut_btn_company">
                        <div class="dt cw-icon">
                            <a target="_blank" href="#" aria-label="企业采购">企业采购</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dd dropdown-layer">
                            <div class="dd-inner">
                                <div class="item"><a
                                        href="https://b.jd.com?&amp;bjdSourceChannel=cjddingbudaohangqiyetuangou/"
                                        target="_blank" rel="noopener noreferrer" title="企业团购">企业团购</a></div>
                                <div class="item"><a href="https://isp.jd.com/passport/login?source=jd" target="_blank"
                                        rel="noopener noreferrer" title="京东工采">京东工采</a></div>
                                <div class="item"><a href="https://g.jd.com/" target="_blank" rel="noopener noreferrer"
                                        title="公共采购">公共采购</a></div>
                                <div class="item"><a href="https://vsp.jd.com" target="_blank" rel="noopener noreferrer"
                                        title="京东慧采">京东慧采</a></div>
                                <div class="item"><a href="https://jdjl.jd.com/#/" target="_blank"
                                        rel="noopener noreferrer" title="京东锦礼">京东锦礼</a></div>
                                <div class="item"><a href="https://o.jd.com/?from=topShortCut" target="_blank"
                                        rel="noopener noreferrer" title="礼品卡">礼品卡</a></div>
                                <div class="item"><a
                                        href="https://pro.jd.com/mall/active/2PhLXzBBkbq1jxoq4u3i8X3njKDF/index.html"
                                        target="_blank" rel="noopener noreferrer" title="微信企业购">微信企业购</a></div>
                                <div class="item"><a href="https://mro.jd.com/" target="_blank"
                                        rel="noopener noreferrer" title="五金城">五金城</a></div>
                                <div class="item"><a href="https://www.vipmro.com/?from=pc_reg&amp;flag=20092431"
                                        target="_blank" rel="noopener noreferrer" title="京东工品汇">京东工品汇</a></div>
                                <div class="item"><a
                                        href="https://pro.jd.com/mall/active/TD96TBxYmhLYqgH8SAWbSZzngSd/index.html?hdid=_1YMeeNhXjk"
                                        target="_blank" rel="noopener noreferrer" title="企业购专业版">企业购专业版</a></div>
                                <div class="item"><a href="https://vsp.jd.com/intro?entrance=jdpc" target="_blank"
                                        rel="noopener noreferrer" title="大中型客户采购">大中型客户采购</a></div>
                                <div class="item bottom"><a href="https://ic.jd.com" target="_blank"
                                        rel="noopener noreferrer" title="元器件">元器件</a></div>
                            </div>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li class="shortcut_btn fore9 dropdown" id="ttbar-navs">
                        <div class="dt cw-icon" id="shortcutSitenavButton" role="button" aria-label="网站导航">
                            网站导航
                            <i class="iconfont"></i>
                        </div>
                        <div class="dd dropdown-layer" tabindex="-1" aria-labelledby="shortcutSitenavButton"
                            role="menu">
                            <dl class="fore1">
                                <dt>特色主题</dt>
                                <dd>
                                    <div class="navitem-col">
                                        <div class="item"><a href="//jr.jd.com/" target="_blank" class="" tabindex="-1"
                                                role="menuitem">京东金融</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/kv2t7uxJPuFvTHpy17ZKDrLuW51/index.html?babelChannel=ttt8"
                                                target="_blank" class="" tabindex="-1" role="menuitem">京东拍卖</a></div>
                                        <div class="item"><a href="//diy.jd.com/" target="_blank" class="" tabindex="-1"
                                                role="menuitem">装机大师</a></div>
                                        <div class="item"><a href="//miaosha.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东秒杀</a></div>
                                        <div class="item"><a href="https://2.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">拍拍二手</a></div>
                                        <div class="item"><a href="//global.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">全球售</a></div>
                                        <div class="item"><a href="https://tw.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">台湾售</a></div>
                                        <div class="item"><a href="https://hk.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">港澳售</a></div>
                                    </div>
                                    <div class="navitem-col">
                                        <div class="item"><a href="https://www.jd.hk/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">全球购</a></div>
                                        <div class="item"><a href="https://play.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">云游戏</a></div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="fore2">
                                <dt>行业频道</dt>
                                <dd>
                                    <div class="navitem-col">
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/8tHNdJLcqwqhkLNA8hqwNRaNu5f/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">手机数码</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/BeDtXXVHSmYJns77dUQFW6W9XTS/index.html?babelChannel=ttt2"
                                                target="_blank" class="" tabindex="-1" role="menuitem">服饰美妆</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/2H8G6a7JecjqHH3t1ZWSoJjPtziP/index.html?babelChannel=ttt250"
                                                target="_blank" class="" tabindex="-1" role="menuitem">家电家居</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/tDeBrVaghdfk9fALcQY52RA61aF/index.html?babelChannel=ttt1"
                                                target="_blank" class="" tabindex="-1" role="menuitem">办公好物</a></div>
                                        <div class="item"><a href="https://fresh.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东生鲜</a></div>
                                        <div class="item"><a href="//book.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东图书</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/36yPbWm4JqFrmTgABydz6GkWNkca/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">京东超市</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/2bkTvuyAtEZS8bq8i3AKzYq54EqT/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">奢品馆</a></div>
                                    </div>
                                    <div class="navitem-col">
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/4AP3tAH2TrGite1X6eBDXEFBvox6/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">手机馆</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/4Xs847qJzeqf6ASxnEMWwe4Pz3kC/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">电脑馆</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/2TY2j1yJ9T2QKiQekTpHgvv68HiD/index.html?babelChannel=ttt47"
                                                target="_blank" class="" tabindex="-1" role="menuitem">宠物馆</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/48v7Xzb3FfKt6mKgMaS9EoHrvieE/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">家电馆</a></div>
                                        <div class="item"><a href="https://ic.jd.com" target="_blank" class=""
                                                tabindex="-1" role="menuitem">元器件</a></div>
                                        <div class="item"><a href="//mro.jd.com/" target="_blank" class="" tabindex="-1"
                                                role="menuitem">五金城</a></div>
                                        <div class="item"><a
                                                href="https://prodev.jd.com/mall/active/7buZFEUJouLZZywhvvRWkGNSRMS/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">整车</a></div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="fore3">
                                <dt>生活服务</dt>
                                <dd>
                                    <div class="navitem-col">
                                        <div class="item"><a href="//m.jr.jd.com/helppage/downApp/jrAppPromote.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">京东金融App</a></div>
                                        <div class="item"><a href="//trade.jr.jd.com/myxjk/jrbincome.action"
                                                target="_blank" class="" tabindex="-1" role="menuitem">京东小金库</a></div>
                                        <div class="item"><a href="//smart.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东小家</a></div>
                                        <div class="item"><a href="//chongzhi.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">充值中心</a></div>
                                        <div class="item"><a href="https://jiayouka.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">油卡充值</a></div>
                                        <div class="item"><a href="//jipiao.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">机票酒店</a></div>
                                        <div class="item"><a href="//daojia.jd.com/html/welcome.html" target="_blank"
                                                class="" tabindex="-1" role="menuitem">京东到家</a></div>
                                        <div class="item"><a href="https://huishou.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">拍拍回收</a></div>
                                    </div>
                                    <div class="navitem-col">
                                        <div class="item"><a
                                                href="https://www.jdl.com/send/sendSingleEntry/?isCnet=1&amp;source=PCtopbar"
                                                target="_blank" class="" tabindex="-1" role="menuitem">京东快递</a></div>
                                        <div class="item"><a href="https://huoyue.jd.com/forwardToJiaofeiFrame.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">水电煤</a></div>
                                        <div class="item"><a href="//movie.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">电影票</a></div>
                                        <div class="item"><a
                                                href="https://pro.jd.com/mall/active/2VefNAWU3jYuBRtWRWmj1GvQFebS/index.html"
                                                target="_blank" class="" tabindex="-1" role="menuitem">买车险</a></div>
                                        <div class="item"><a href="https://baitiao.jd.com" target="_blank" class=""
                                                tabindex="-1" role="menuitem">白条</a></div>
                                        <div class="item"><a href="//caipiao.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">彩票</a></div>
                                        <div class="item"><a href="https://ylc.m.jd.com/ylc/ylcp?ext=2066"
                                                target="_blank" class="" tabindex="-1" role="menuitem">游戏</a></div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="fore4">
                                <dt>商家服务</dt>
                                <dd>
                                    <div class="navitem-col">
                                        <div class="item"><a href="//jm.jd.com/index/index.html" target="_blank"
                                                class="1" tabindex="-1" role="menuitem">京麦工作台</a></div>
                                        <div class="item"><a href="https://lai.jd.com" target="_blank" class="1"
                                                tabindex="-1" role="menuitem">合作招商</a></div>
                                        <div class="item"><a href="https://xue.jd.com/" target="_blank" class="1"
                                                tabindex="-1" role="menuitem">学习中心</a></div>
                                        <div class="item"><a href="//shop.jd.com/" target="_blank" class="1"
                                                tabindex="-1" role="menuitem">商家后台</a></div>
                                        <div class="item"><a href="//helpcenter.jd.com/venderportal/index.html"
                                                target="_blank" class="1" tabindex="-1" role="menuitem">商家帮助</a></div>
                                        <div class="item"><a href="//rule.jd.com/rule/index.action" target="_blank"
                                                class="1" tabindex="-1" role="menuitem">规则平台</a></div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="fore5">
                                <dt>更多精选</dt>
                                <dd>
                                    <div class="navitem-col">
                                        <div class="item"><a href="https://jdgroupip.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">知识产权维权</a></div>
                                        <div class="item"><a href="https://www.jdallianz.com/mall" target="_blank"
                                                class="" tabindex="-1" role="menuitem">京东安联保险</a></div>
                                        <div class="item"><a href="https://bxdl.jd.com" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东保险代理</a></div>
                                        <div class="item"><a href="https://jdx.com" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东零售云</a></div>
                                        <div class="item"><a href="https://lai.jd.com" target="_blank" class=""
                                                tabindex="-1" role="menuitem">合作招商</a></div>
                                        <div class="item"><a href="//mobile.jd.com/index.do" target="_blank" class=""
                                                tabindex="-1" role="menuitem">京东通信</a></div>
                                        <div class="item"><a href="//o.jd.com/market/index.action" target="_blank"
                                                class="" tabindex="-1" role="menuitem">京东E卡</a></div>
                                        <div class="item"><a href="//b.jd.com/" target="_blank" class="" tabindex="-1"
                                                role="menuitem">企业采购</a></div>
                                    </div>
                                    <div class="navitem-col">
                                        <div class="item"><a href="//fw.jd.com/" target="_blank" class="" tabindex="-1"
                                                role="menuitem">服务市场</a></div>
                                        <div class="item"><a href="//lj.jd.com/campus/intro.do" target="_blank" class=""
                                                tabindex="-1" role="menuitem">校园加盟</a></div>
                                        <div class="item"><a href="https://about.jd.com/" target="_blank" class=""
                                                tabindex="-1" role="menuitem">关于我们</a></div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </li>
                    <li class="spacer"></li>
                    <li class="shortcut_btn fore10 mobile dropdown" id="J_mobile">
                        <div class="dt cw-icon">
                            手机京东
                            <i class="iconfont"></i>
                        </div>
                        <div class="dd dropdown-layer mobile-dropdown-layer">
                            <div class="mobile_pop_item">
                                <div class="mobile_pop_qrcode mobile_pop_qrcode_1"><img
                                        src="https://img10.360buyimg.com/babel/jfs/t20280907/348806/30/927/28110/68be6f46F1080e28b/3b383c24730422d0.png">
                                </div>
                                <div class="mobile_pop_info">
                                    <h5 class="mobile_pop_tit">手机京东</h5>
                                    <p class="mobile_pop_value">新人专享大礼包</p>
                                    <p class="mobile_pop_device"><a class="mobile_pop_device_lk mobile_pop_device_ios"
                                            href="https://itunes.apple.com/cn/app/id414245413" target="_blank">APP
                                            Store</a><a class="mobile_pop_device_lk mobile_pop_device_and"
                                            href="https://storage.jd.com/jdmobile/JDMALL-PC2.apk"
                                            target="_blank">安卓市场</a><a
                                            class="mobile_pop_device_lk mobile_pop_device_pad"
                                            href="https://itunes.apple.com/cn/app/jing-dong-hd/id434374726"
                                            target="_blank">APP Store</a></p>
                                </div>
                            </div>
                            <div class="mobile_pop_item">
                                <div class="mobile_pop_qrcode mobile_pop_qrcode_2"><img
                                        src="https://img14.360buyimg.com/babel/jfs/t20280907/297244/3/19576/39599/68be6f8cF552cec2e/515ebf99cf39c88e.jpg">
                                </div>
                                <div class="mobile_pop_info">
                                    <h5 class="mobile_pop_tit">关注京东JD.COM</h5>
                                    <p class="mobile_pop_value">天天抢红包</p>
                                </div>
                            </div>
                            <div class="mobile_pop_item">
                                <div class="mobile_pop_qrcode mobile_pop_qrcode_3"><img
                                        src="https://img20.360buyimg.com/babel/jfs/t20280907/338895/19/8292/11083/68be6fd7Fd6e4dd4a/7bde5ebb7164f6f9.jpg">
                                </div>
                                <div class="mobile_pop_info">
                                    <h5 class="mobile_pop_tit"><a
                                            href="https://m.jr.jd.com/integrate/download/html/pc.html"
                                            target="_blank">京东金融客户端</a></h5>
                                    <p class="mobile_pop_value">新人专享大礼包</p>
                                    <p class="mobile_pop_device"><a class="mobile_pop_device_lk mobile_pop_device_ios"
                                            href="https://itunes.apple.com/cn/app/jing-dong-jin-rong-hui-li/id895682747?mt=8"
                                            target="_blank">APP Store</a><a
                                            class="mobile_pop_device_lk mobile_pop_device_and"
                                            href="https://download.jr.jd.com/downapp/jrapp_jr9631.apk"
                                            target="_blank">安卓市场</a></p>
                                </div>
                            </div>
                            <div class="mobile_pop_item">
                                <div class="mobile_pop_qrcode mobile_pop_qrcode_4"><img
                                        src="https://img10.360buyimg.com/babel/jfs/t20280907/347492/20/935/28300/68be7004Fa03a2a52/f1762fb526b50e9f.png">
                                </div>
                                <div class="mobile_pop_info">
                                    <h5 class="mobile_pop_tit">京东健康客户端</h5>
                                    <p class="mobile_pop_value"></p>
                                    <p class="mobile_pop_device"><a class="mobile_pop_device_lk mobile_pop_device_ios"
                                            href="https://hlc.m.jd.com/download/?downloadSource=jdh_JDcom"
                                            target="_blank">APP Store</a><a
                                            class="mobile_pop_device_lk mobile_pop_device_and"
                                            href="https://hlc.m.jd.com/download/?downloadSource=jdh_JDcom"
                                            target="_blank">安卓市场</a></p>
                                </div>
                            </div>
                            <div class="mobile_pop_item">
                                <div class="mobile_pop_qrcode mobile_pop_qrcode_5"><img
                                        src="https://img12.360buyimg.com/babel/jfs/t20280907/350606/10/900/9085/68be703aFc4991612/90fe23328afb582f.jpg">
                                </div>
                                <div class="mobile_pop_info">
                                    <h5 class="mobile_pop_tit">关注京东小程序</h5>
                                    <p class="mobile_pop_value">新人0.1元购</p>
                                </div>
                            </div>
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
</template>

<script>
export default {
    name: 'TopBarShortcut' ,
    data() {
        return {
            hoverIn: false,
        };
    },
    computed: {
    },
}
</script>

<style scoped>
.top-bar .mobile_pop_device_pad {
    background-position: 0 -52px;
}

.top-bar .mobile_pop_device_and {
    background-position: 0 -26px;
}

.top-bar .mobile_pop_device_ios {
    background-position: 0 0;
}

.top-bar .mobile_pop_device_lk {
    float: left;
    height: 25px;
    margin-right: 2px;
    overflow: hidden;
    text-indent: -999px;
    width: 25px;
}

.top-bar .mobile_pop_device_lk {
    background-image: url(//misc.360buyimg.com/mtd/pc/index/home/images/sprite_mobile@1x.png);
}

.top-bar .mobile_pop_device {
    height: 25px;
    overflow: hidden;
}

.top-bar .mobile_pop_value {
    color: #f10214;
    font-size: 12px;
    line-height: 14px;
    margin: 3px 0;
}

.top-bar .mobile_pop_tit {
    color: #666 !important;
    font-size: 12px;
    line-height: 17px;
}

.top-bar .mobile_pop_info {
    display: flex;
    flex-direction: column;
    height: 64px;
    margin: 0 16px 0 93px;
    padding: 3px 0;
}

.top-bar .mobile_pop_qrcode img {
    height: 60px;
    margin: 4px 0 0 4px;
    width: 60px;
}

.top-bar .mobile_pop_qrcode {
    background-color: #f7f8fc;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 4px;
    height: 68px;
    left: 16px;
    position: absolute;
    width: 68px;
}

.top-bar .mobile_pop_item {
    padding: 6px 0;
    position: relative;
    z-index: 5;
}

.top_bar .mobile_pop_item:last-child {
    padding-bottom: 16px
}

.top-bar .mobile_pop_item:first-child {
    padding-top: 16px;
}

.top-bar .mobile-dropdown-layer {
    left: auto;
    right: 0;
    width: 218px;
}

.top-bar .dropdown-layer .item {
    height: 22px;
    margin-bottom: 12px;
}

.top-bar #ttbar-navs .item {
    max-width: 100%;
    min-width: fit-content;
}

.top-bar #ttbar-navs .navitem-col:not(:last-child) {
    margin-right: 24px;
}

.top-bar #ttbar-navs dd {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: max-content;
}

.top-bar #ttbar-navs dt {
    color: #666;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 12px;
}

.top-bar #ttbar-navs dl {
    border-left: 1px solid #eee;
    float: left;
    padding: 0 20px;
}

.top-bar #ttbar-navs dl.fore1 {
    border-left: none;
}

.top-bar #ttbar-navs .dd {
    min-width: 600px;
    padding: 20px 0;
    right: 0;
}

.top-bar .shortcut_btn_company .item.bottom {
    max-width:302px;
}

.top-bar .shortcut_btn_company .item {
    float: left;
    margin-right: 12px;
    max-width: 98px;
    min-width: 50px;
    overflow: hidden;
    padding: 0 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.top-bar .shortcut_btn_company .dropdown-layer {
    left: 0;
    padding: 16px 4px 4px 16px;
    width: 228px;
}

.top-bar .top-bar-wrapper .shortcut_num {
    font-family: JDZhengHeiVRegular2-1, "system-ui";
    margin-left: 4px;
}

.top-bar .style-red {
    color: #f10215
}

.top-bar #ttbar-myjd-2024 .myjdlist .item a {
    white-space: nowrap;
}

.top-bar #ttbar-myjd-2024 .myjdlist .fore3 {
    margin-right: 0;
}

.top-bar .dropdown-layer .item {
    height: 22px;
    margin-bottom: 12px;
}

.top-bar #ttbar-myjd-2024 .myjdlist_3>.sitem {
    float: left;
    height: 22px;
    margin-bottom: 12px;
    margin-right: 12px;
    padding-left: 4px;
    width: 87px;
}

.top-bar #ttbar-myjd-2024 .myjdlist .fore1,
.top-bar #ttbar-myjd-2024 .myjdlist .fore2,
.top-bar #ttbar-myjd-2024 .myjdlist .fore3 {
    float: left;
    margin-right: 12px;
    padding-left: 4px;
    width: 87px;
}

.top-bar #ttbar-myjd-2024 .myjdlist_2,
.top-bar #ttbar-myjd-2024 .myjdlist_3 {
    border-top: 1px solid rgba(0, 0, 0, .06);
}

.top-bar #ttbar-myjd-2024 .myjdlist {
    padding: 12px 0 0;
    overflow: hidden;
}

.top-bar #ttbar-myjd-2024 .myjdlist_3 {
    padding-bottom: 14px;
}

.top-bar #ttbar-myjd-2024 .dropdown-layer {
    left: 0;
    padding: 4px 16px 0;
    width: 331px;
}

.top-bar .icobadage_common {
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.top-bar .u-name {
    color: #505259;
    display: inline;
    font: 12px / 12px PingFang SC;
    white-space: nowrap;
}

.top-bar .badge_item.fore1 .u-name {
    color: #ceaa62;
}

.top-bar #ttbar-login-2024 .badge_item i {
    display: block;
    height: 24px;
    margin: 8px auto;
    width: 24px;
}

.top-bar .badge_item a {
    cursor: pointer;
    display: block;
    line-height: 12px;
}

.top-bar .badge_item {
    background: #f7f8fc;
    border-radius: 4px;
    float: left;
    height: 60px;
    margin: 0 4px;
    text-align: center;
    width: 62px !important;
}

.top-bar .badge_list {
    margin: auto;
    text-align: center;
    width: 210px;
}

.top-bar .link-change-color {
    color: #888b94 !important;
}

.top-bar .dropdown .link-change,
.top-bar .dropdown .link-logout {
    color: #888b94;
    display: block;
    margin-top: 6px;
}

.top-bar .dropdown .link-change{
    margin-right: 10px;
}

.top-bar .link-action-wrap {
    display: flex;
}

.top-bar .u-msg a .arropw-2024 {
    height: 6px;
    width: 6px;
    margin-left: 6px;
}

.top-bar .u-msg a {
    display: flex;
    align-items: center;
    color: #1a1a1a
}

.top-bar .u-msg {
    font: 14px / 16px PingFang SC;
    padding-top: 6px;
}

.top-bar .u-pic {
    border-radius: 50%;
    float: left;
    height: 48px;
    margin: 1px 8px 1px 0;
    overflow: hidden;
    position: relative;
    width: 48px;
}

.top-bar .userbadge {
    border-top: 1px solid rgba(0, 0, 0, .06);
    margin: 0 8px;
    overflow: hidden;
    padding-bottom: 16px;
    padding-top: 10px;
    position: relative;
}

.top-bar .userinfo {
    overflow: hidden;
    padding: 16px 16px 12px
}

.top-bar #ttbar-login-2024 .dropdown-layer {
    left: 0;
    width: 234px;
}

.top-bar .areamini_inter_name {
    float: left;
    font-family: Microsoft YaHei, tahoma, arial, Hiragino Sans GB, 宋体, sans-serif;
    text-align: center;
    width: 82px;
}

.top-bar #ttbar-mycity-2024 .item a.selected,
.top-bar .areamini_inter_item.selected .areamini_inter_name {
    background-color: #ff0f23;
    border-radius: 4px;
    color: #fff;
}

.top-bar .areamini_inter_lk {
    display: block;
    overflow: hidden;
}

.top-bar .areamini_inter_item {
    float: left;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    margin-bottom: 12px;
}

.top-bar .areamini_inter_list {
    overflow: hidden;
}

.top-bar .areamini_inter {
    height: 156px;
    padding: 16px;
    width: 114px;
}

.top-bar .dropdown-layer::before {
    background: rgba(0, 0, 0, 0);
    content: "";
    height: 10px;
    left: 0;
    position: absolute;
    top: -8px;
    width: 100%;
}

.top-bar .dd {
    line-height: 22px;
}

.top-bar .dropdown-layer{
    background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .06);
        border-radius: 8px;
        box-shadow: none;
        display: none;
        font-family: PingFang SC;
        font-size: 14px;
        position: absolute;
        top: calc(100% + 4px);
}

.usericonfont {
    position: absolute;
    right: 6px;
    top: 12px;
}

.nickname {
    display: block;
    max-width: 70px;
    overflow: hidden;
    padding-right: 6px;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 50px;
}

.shortcut_userico_ico {
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

li.spacer {
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
    position: relative;
}

.top-bar .fr .cw-icon {
    padding-right: 16px !important;
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

.top-bar .shortcut_btn:hover {
    z-index: 22;
}

.top-bar .shortcut_btn{
    position: relative;
    z-index: 21;
}

.shortcut {
    height: 36.5px;
    margin-bottom: 24px;
}

.top-bar li {
    float: left;
}

.top-bar {
    height: 36.5px;
    background-color: #fff;
    border-bottom: .5px solid rgba(0, 0, 0, .06);
    color: #505259;
    font: 12px / 1.5 PingFang SC, Microsoft YaHei, system-ui, -apple-system, tahoma, arial, Hiragino Sans GB, u5b8bu4f53, sans-serif;
    font-family: PingFang SC, Source Han Sans CN, Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, 宋体, sans-serif;
}
</style>