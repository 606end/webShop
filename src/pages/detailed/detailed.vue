<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-11 13:36:24
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-25 17:30:19
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

        <div class="crumb-wrap" id="crumb-wrap">
            <div class="w">
                <div class="crumb clearfix">
                    <div class="item first">
                        <a href="#" clstag="shangpin|keycount|product|mbNav-1">家用电器</a>
                    </div>
                    <div class="item sep">&gt;</div>

                    <div class="item">
                        <a href="#" clstag="shangpin|keycount|product|mbNav-2">厨卫大电</a>
                    </div>
                    <div class="item sep">&gt;</div>

                    <div class="item">
                        <a href="#" clstag="shangpin|keycount|product|mbNav-3">电热水器</a>
                    </div>
                    <div class="item sep">&gt;</div>

                    <div class="item">
                        <a href="#" clstag="shangpin|keycount|product|mbNav-4">即热式电热水器</a>
                    </div>
                    <div class="item sep">&gt;</div>

                    <div class="item">
                        <a href="#" clstag="shangpin|keycount|product|mbNav-5">飞利浦（PHILIPS）</a>
                    </div>
                    <div class="item sep">&gt;</div>

                    <div class="item ellipsis" title="飞利浦AWH1028/93(85HB)">飞利浦AWH1028/93(85HB)</div>
                </div>
            </div>
        </div>

        <div id="searchBar" style="background: none;">
            <div class="_scoped_eidqb_1" id="searchBar-root">

                <div class="_scoped_11goq_1">
                    <!-- 左店铺logo -->
                    <div class="top-border-img">
                        <img class="top-logo"
                            src="https://img30.360buyimg.com/popshop/jfs/t1/183438/17/11901/17502/60dbd5ffE777e7da7/4bb55b277ebe8344.jpg">
                    </div>
                    <!-- 右店铺名称及信息 -->
                    <div class="top-shop-info">
                        <div class="top-name-tag">
                            <div class="top-self-support-new"><img
                                    src="//img11.360buyimg.com/img/jfs/t1/273656/23/29811/731/681b1e9aF9ce3b5bc/6102ba8228118daf.png.avif">
                            </div>
                            <div class="top-name" title="飞利浦（PHILIPS ）热水器京东自营旗舰店">飞利浦（PHILIPS ）热水器京东自营旗舰店</div>
                        </div>

                        <div class="top-flex top-btns">
                            <div class="top-customer-service top-shop-btn">
                                <img alt="" class="top-shop-icon"
                                    src="https://img13.360buyimg.com/imagetools/jfs/t1/275881/32/10014/609/67e39713F50c8410d/d3fd68c5d0332d21.png">
                                <div class="top-text">关注店铺</div>
                            </div>

                            <div class="top-stroll top-shop-btn">
                                <img class="top-shop-icon"
                                    src="https://img12.360buyimg.com/imagetools/jfs/t1/272004/3/10316/603/67e3970eF48112794/73b06855fc070f75.png">
                                <div class="top-text">联系客服</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="_search_main_1pcds_1">
                    <div class="_search_box_1pcds_7 ">
                        <input class="_search_input_1pcds_74" autocomplete="off" aria-label="搜索" type="text"
                            value="飞利浦电热水龙头">
                        <input type="hidden" name="searchValHidden">
                        <input type="hidden" name="trandingValHidden">
                        <input type="hidden" name="defaultValHidden" value="飞利浦电热水龙头">
                        <button class="_search_btn_shop_1pcds_197">搜本店</button>
                        <button class="_search_btn_web_1pcds_196">搜全站</button>
                    </div>
                    <div id="hotword" class="_hotword_1pcds_226">
                        <span>热水器电热</span><i></i><span>即热式电热水器</span><i></i><span>电热水器京东自营</span><i></i><span>飞利浦电热水器</span><i></i><span>美的电热水器</span><i></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="w">
            <div class="product-intro clearfix" style="margin-bottom: 15px; margin-top: 24px; position: relative;">

                <div class="preview-wrap">
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
                                        <div class="image-zoom-container main-img">
                                            <img class="zoom-img" id="spec-img"
                                                src="https://img10.360buyimg.com/pcpubliccms/s1440x1440_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif">
                                        </div>
                                    </div>
                                    <div class="attribute"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="detail">
                        <div class="ETab" id="detail">

                            <div class="tab-main large" data-fixed="pro-detail-hd-fixed"
                                style="position: sticky; top: 16px; z-index: 20; background: rgb(255, 255, 255);">
                                <ul>
                                    <!-- 企业专项-参数上移 -->
                                    <li id="enterprise-attr-tab" style="display:none;">参数</li>

                                    <li data-tab="trigger" data-anchor="#detail" class="current"> 大家评 </li>
                                    <li data-tab="trigger" data-anchor="#detail" class=""> 店铺 </li>
                                    <li data-tab="trigger" data-anchor="#detail"
                                        clstag="undefinedshangpin|keycount|product|shangpinjieshao_1" class=""> 商品详情
                                    </li>
                                    <li data-tab="trigger" data-anchor="#detail"
                                        clstag="undefinedshangpin|keycount|product|psaleservice" class="">售后保障</li>
                                    <li data-tab="trigger" data-anchor="#detail" class=""> 推荐 </li>
                                </ul>

                                <div class="J_contrast_btn">
                                    <a class="compare J-compare J_contrast" id="comp_100037591427"
                                        data-sku="100037591427" href="#none"
                                        clstag="undefinedshangpin|keycount|product|jiaruduibi">
                                        <i class="sprite-compare"></i>
                                        <em style="font-style: normal;">商品对比</em>
                                    </a>
                                </div>
                            </div>

                            <div class="tab-con">
                                <div data-tab="item">
                                    <div id="comment">
                                        <div id="comment-root" class="comment-root"
                                            data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;evaluate_num&quot;:3}">
                                            <div class="top-block">
                                                <div class="comment-title">买家评价(2万+)</div>
                                                <div class="right-extra">
                                                    <div class="applause-rate">超98%买家赞不绝口<div class="icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tags">
                                                <div class="item">
                                                    <div>加热超快速</div>
                                                    <div class="count">&nbsp;1376</div>
                                                </div>
                                                <div class="item">
                                                    <div>操作超方便</div>
                                                    <div class="count">&nbsp;381</div>
                                                </div>
                                                <div class="item">
                                                    <div>出水量超足</div>
                                                    <div class="count">&nbsp;98</div>
                                                </div>
                                                <div class="item">
                                                    <div>水温很稳</div>
                                                    <div class="count">&nbsp;133</div>
                                                </div>
                                                <div class="item">
                                                    <div>小户型适用</div>
                                                    <div class="count">&nbsp;22</div>
                                                </div>
                                                <div class="item">
                                                    <div>洗澡超舒适</div>
                                                    <div class="count">&nbsp;8</div>
                                                </div>
                                                <div class="item">
                                                    <div>耗电超省</div>
                                                    <div class="count">&nbsp;46</div>
                                                </div>
                                                <div class="item">
                                                    <div>随时冲澡</div>
                                                    <div class="count">&nbsp;1</div>
                                                </div>
                                                <div class="item">
                                                    <div>安装尺寸合适</div>
                                                    <div class="count">&nbsp;16</div>
                                                </div>
                                                <div class="item">
                                                    <div>用着很安全</div>
                                                    <div class="count">&nbsp;55</div>
                                                </div>
                                                <div class="item">
                                                    <div>外形很简约</div>
                                                    <div class="count">&nbsp;75</div>
                                                </div>
                                                <div class="item">
                                                    <div>外观很漂亮</div>
                                                    <div class="count">&nbsp;875</div>
                                                </div>
                                            </div>
                                            <ul class="list">
                                                <li class="item"
                                                    data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;evaluateid&quot;:&quot;24852850683&quot;,&quot;index&quot;:0}">
                                                    <div class="comment-user"><img alt="" class="headimg"
                                                            src="https://storage.360buyimg.com/i.imageUpload/6a645f3530653634636636643234303131353936323632323037373731_sma.jpg">
                                                        <div class="nickname">杨杨jj12345678</div>
                                                    </div>
                                                    <div class="info text-ellipsis-2">
                                                        这款热水器非常喜欢，外观大气，还可以调功率，做工精细，安装师傅很快联系了安装，试了水挺好用，也感谢客服的热心讲解。</div>
                                                    <div class="imgs">
                                                        <div class="term"><img class="img"
                                                                src="https://jvod.300hu.com/img/2025/1088904730/1/img7.jpg"><img
                                                                alt="" class="video-flag"
                                                                src="https://img11.360buyimg.com/imagetools/jfs/t1/257894/4/3508/1579/676cc6adF966af6a5/a24e08cf2c65f8ea.png">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/296157/29/25261/71672/6900bc59Ffe86d801/06dec090066e9187.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/338354/9/25185/78305/6900bc5aFd0b3517f/1d2b611ed9a430dd.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/343716/10/18790/83632/6900bc5bFd36e7fb1/ce31878f7e8835ab.jpg.dpg">
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="item"
                                                    data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;evaluateid&quot;:&quot;103730950167090116&quot;,&quot;index&quot;:1}">
                                                    <div class="comment-user"><img alt="" class="headimg"
                                                            src="https://storage.360buyimg.com/default.image/6a645f6465665f696d675f393836323131373632333134353935323236_sma.jpg">
                                                        <div class="nickname">jd_4z8zlr6m74r25n</div>
                                                    </div>
                                                    <div class="info text-ellipsis-2">
                                                        产品收到了，很简单就自己安装了，两边都有出线口很实用，安装后很美观，出水后也很快升温，升温后水温也。很稳定，现在冬天开到55度来，水量也还可以不会很小，适合家里的老人放水洗澡来用，年轻人实现不了淋浴的快感刚好可以洗，主要方便快捷和省电，飞利浦产品还是值得购买推荐的
                                                    </div>
                                                    <div class="imgs">
                                                        <div class="term"><img class="img"
                                                                src="https://jvod.300hu.com/img/2026/1133285686/1/img6.jpg"><img
                                                                alt="" class="video-flag"
                                                                src="https://img11.360buyimg.com/imagetools/jfs/t1/257894/4/3508/1579/676cc6adF966af6a5/a24e08cf2c65f8ea.png">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/379845/8/23213/2596323/6960fa58Ff64079e7/00a900074008a3e6.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/387395/11/2047/3035708/6960fa5bF1d7a941e/00a90007403f6420.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/383827/28/19316/2858541/6960fa5bFba391eed/00a9740000c27527.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/385324/14/7968/2548089/6960fa5aF163e5887/00a9740000c6ad95.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/386274/6/6192/2410931/6960fa59F8d54209e/00a97400009d3e32.jpg.dpg">
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="item"
                                                    data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;evaluateid&quot;:&quot;103643760156575915&quot;,&quot;index&quot;:2}">
                                                    <div class="comment-user"><img alt="" class="headimg"
                                                            src="https://storage.360buyimg.com/i.imageUpload/4368696361676fc7d931343937323634303439333538_sma.jpg">
                                                        <div class="nickname">Qin-1377</div>
                                                    </div>
                                                    <div class="info text-ellipsis-2">
                                                        真心安利这款电热水器！体积小巧，安装不费劲，加热效率高，8500w功率可以满足全家用水需求，而且自带的安全防护功能让人放心，节能模式还能省不少电费。这次楼上楼下各装了一个，洗澡不用再担心热水不够用了，最后，点名表扬下&amp;ldquo;售后11号&amp;rdquo;，有问必答，非常有耐心！👍👍
                                                    </div>
                                                    <div class="imgs">
                                                        <div class="term"><img class="img"
                                                                src="https://jvod.300hu.com/img/2026/1131672310/1/img3.jpg"><img
                                                                alt="" class="video-flag"
                                                                src="https://img11.360buyimg.com/imagetools/jfs/t1/257894/4/3508/1579/676cc6adF966af6a5/a24e08cf2c65f8ea.png">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/379992/34/23671/54285/695d2879Fd4f7c56b/00a94ff6aaa72090.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/384960/19/5931/60419/695d2879Ffedc38a3/00a94ff6aa4165b8.jpg.dpg">
                                                        </div>
                                                        <div class="term"><img class="img"
                                                                src="https://img30.360buyimg.com/shaidan/s300x300_jfs/t1/383710/22/17741/68114/695d2879F8f4672d2/00a94ff6aa28bce2.jpg.dpg">
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="all-btn">
                                                <div>全部评价</div><img alt="" class="arrow"
                                                    src="https://img11.360buyimg.com/imagetools/jfs/t1/254955/16/4963/530/676e670fF0f862f1b/970f561bf58c4294.png">
                                            </div>
                                        </div>
                                    </div>
                                    <div id="answers">
                                        <div id="answers-root" class="answers-root"
                                            data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;}">
                                            <div class="answers-title">问大家</div>
                                            <div class="list">
                                                <div class="item">
                                                    <div class="problem"><img alt="question icon" class="icon"
                                                            src="https://img11.360buyimg.com/imagetools/jfs/t1/258192/20/4683/2214/676fb455F5d459d15/e128d18f15db703e.png">
                                                        <div class="text text-ellipsis"
                                                            title="在农村安装，需要自己先把电线和水管弄好吗？安装的师傅可以一起搞定吗？">
                                                            在农村安装，需要自己先把电线和水管弄好吗？安装的师傅可以一起搞定吗？</div>
                                                    </div>
                                                    <div class="reslut">
                                                        <div class="term visible"
                                                            data-point="{&quot;questionId&quot;:&quot;98325307&quot;,&quot;answerNum&quot;:&quot;2&quot;,&quot;answerid&quot;:[]}">
                                                            <div class="answers-user"><img class="headimg"
                                                                    alt="user avatar"
                                                                    src="http://img11.360buyimg.com/imagetools/jfs/t1/230346/8/14129/4481/65dc3041Fb741f6e6/6170c2507f0f70c3.png">
                                                                <div class="text text-ellipsis" title="最好，师傅只负责安装机器。">
                                                                    最好，师傅只负责安装机器。</div>
                                                            </div>
                                                        </div>
                                                        <div class="has-more">
                                                            <div>查看更多2个回答</div><img alt="arrow" class="arrow"
                                                                src="https://img11.360buyimg.com/imagetools/jfs/t1/264122/33/4544/351/676fb862Fe621a70d/e8d69444848c11fc.png">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="problem"><img alt="question icon" class="icon"
                                                            src="https://img11.360buyimg.com/imagetools/jfs/t1/258192/20/4683/2214/676fb455F5d459d15/e128d18f15db703e.png">
                                                        <div class="text text-ellipsis" title="温度、出水量能达到洗澡要求吗？">
                                                            温度、出水量能达到洗澡要求吗？</div>
                                                    </div>
                                                    <div class="reslut">
                                                        <div class="term visible"
                                                            data-point="{&quot;questionId&quot;:&quot;91605910&quot;,&quot;answerNum&quot;:&quot;7&quot;,&quot;answerid&quot;:[]}">
                                                            <div class="answers-user"><img class="headimg"
                                                                    alt="user avatar"
                                                                    src="http://img11.360buyimg.com/imagetools/jfs/t1/230346/8/14129/4481/65dc3041Fb741f6e6/6170c2507f0f70c3.png">
                                                                <div class="text text-ellipsis"
                                                                    title="这款是8500W的，热水温度和热水流速都OK的">
                                                                    这款是8500W的，热水温度和热水流速都OK的</div>
                                                            </div>
                                                        </div>
                                                        <div class="has-more">
                                                            <div>查看更多7个回答</div><img alt="arrow" class="arrow"
                                                                src="https://img11.360buyimg.com/imagetools/jfs/t1/264122/33/4544/351/676fb862Fe621a70d/e8d69444848c11fc.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="all-btn">
                                                <div>全部问答</div><img alt="arrow" class="arrow"
                                                    src="https://img11.360buyimg.com/imagetools/jfs/t1/254955/16/4963/530/676e670fF0f862f1b/970f561bf58c4294.png">
                                            </div>
                                        </div>
                                    </div>

                                    <div id="sx-tying-sale-recommend">
                                        <div id="waist-root" class="waist"
                                            data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;floorStyle&quot;:&quot;0&quot;}">
                                            <div class="tying-sale" style="display: none;">
                                                <div class="top-switch">
                                                    <div class="title">搭配购买</div>
                                                    <div class="switch"></div>
                                                </div>
                                                <div class="list-empty"><img alt="" class="icon"
                                                        src="https://img14.360buyimg.com/imagetools/jfs/t1/235440/32/30750/35084/678a5473F7f109582/f6e0b54c52f9c4c4.png">
                                                    <div class="msg">似乎出了点问题,先看看其他内容吧</div>
                                                </div>
                                            </div>
                                            <div class="recommend" style="display: block;">
                                                <div class="top-switch">
                                                    <div class="title">为你推荐</div>
                                                </div>
                                                <div class="swiper" style="margin-top: 18px;">
                                                    <div class="left-arrow" style="display: none;"><img alt=""
                                                            class="arrow"
                                                            src="https://img13.360buyimg.com/imagetools/jfs/t1/268159/30/3998/538/676e66fcF50d57130/aa1646e03da3be5b.png">
                                                    </div>
                                                    <div class="scroll">
                                                        <ul class="list"
                                                            style="transition: 0.3s linear; transform: translateX(-750px);">
                                                            <li class="item" id="recommend-itme-0"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100014835886&quot;,&quot;index&quot;:0,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/389980/7/4483/84326/697077c4F9a0e98a1/0083320320a9206e.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="海尔（Haier）国家补贴电热水器60升 PD3 金刚无缝胆终身免换镁棒一级能效节能省电储水式大水量家用京东自营">
                                                                        海尔（Haier）国家补贴电热水器60升 PD3
                                                                        金刚无缝胆终身免换镁棒一级能效节能省电储水式大水量家用京东自营</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1049</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-1"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100107501340&quot;,&quot;index&quot;:1,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/386482/32/7681/170686/6964ade6F7e1b99f0/8cb32a1ce9a3fdde.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="万和（Vanward）即热式变频热水器速热电热水器家用恒温洗澡免储水加热器淋浴器小型热水器">
                                                                        万和（Vanward）即热式变频热水器速热电热水器家用恒温洗澡免储水加热器淋浴器小型热水器
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">869</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-2"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100112573665&quot;,&quot;index&quot;:2,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/392351/12/631/88635/697027ccF7ea559ef/0083320320f8efc7.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="美的（Midea）60升超薄双胆扁桶电热水器3300W速热节能长效镁棒大水量F6033-UD3(HE)一级能效以旧换新国家补贴">
                                                                        美的（Midea）60升超薄双胆扁桶电热水器3300W速热节能长效镁棒大水量F6033-UD3(HE)一级能效以旧换新国家补贴
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1763</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-3"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100104067842&quot;,&quot;index&quot;:3,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/391473/14/3988/95675/69702e37Fb6831c93/00833203208de990.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="美的（Midea）国家补贴15%终身免换镁棒60升2500W一级能效40倍耐用加热管家用电热水器F6025-JE4(HE)">
                                                                        美的（Midea）国家补贴15%终身免换镁棒60升2500W一级能效40倍耐用加热管家用电热水器F6025-JE4(HE)
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1049</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-4"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100053444144&quot;,&quot;index&quot;:4,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/391310/18/3167/79567/696f51c3Fd323f178/008332032034b784.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="四季沐歌（MICOE）电热水器2100W家用速热扁桶60L储水式LED数显适用3-4人上门安装 M3-S60-21-BH1 以旧换新">
                                                                        四季沐歌（MICOE）电热水器2100W家用速热扁桶60L储水式LED数显适用3-4人上门安装
                                                                        M3-S60-21-BH1 以旧换新</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">969</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-5"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100042591682&quot;,&quot;index&quot;:5,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/384087/34/22505/107741/697077e7F414dc744/0083320320f3a2a3.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="海尔（Haier）国家补贴电热水器60升 小红花JH7 无垢鲜活水净肤洗 免清洗 3300W变频速热一级能效 家用储水式">
                                                                        海尔（Haier）国家补贴电热水器60升 小红花JH7 无垢鲜活水净肤洗 免清洗
                                                                        3300W变频速热一级能效 家用储水式</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1799</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-6"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100062214989&quot;,&quot;index&quot;:6,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/391045/32/3488/97166/696f4c5dF0a1f6444/008332032067c979.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="四季沐歌（MICOE）即热式电热水器 8500W家用洗澡速热多档变频智能恒温 超薄机身小型热水器 DSK-H85-M3S5 以旧换新">
                                                                        四季沐歌（MICOE）即热式电热水器 8500W家用洗澡速热多档变频智能恒温 超薄机身小型热水器
                                                                        DSK-H85-M3S5 以旧换新</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">798</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-7"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100112243812&quot;,&quot;index&quot;:7,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/384065/38/7706/65275/695a4f46F69c05d91/2baa06528b7b1ddb.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="万家乐【节能大师H111B(S)】小尺寸 5倍热水 安全防漏电 2200W速热40升家用储水式电热水器">
                                                                        万家乐【节能大师H111B(S)】小尺寸 5倍热水 安全防漏电
                                                                        2200W速热40升家用储水式电热水器</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">443</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-8"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100026582142&quot;,&quot;index&quot;:8,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/391325/8/4053/66060/697077d3Fa03f3610/008332032013ad82.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="海尔（Haier）国家补贴6.6升小厨宝电热水器EC6.6FA 一级能效京东自营 2200W速热 家用厨房台下小型储水式热水宝">
                                                                        海尔（Haier）国家补贴6.6升小厨宝电热水器EC6.6FA 一级能效京东自营 2200W速热
                                                                        家用厨房台下小型储水式热水宝</div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">462</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-9"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100091210951&quot;,&quot;index&quot;:9,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/387615/4/4231/131979/6966f7e9Fb38d6231/db6945b09dea8348.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="万家乐【恒温王DP1(F)·金榜爆品】13升天然气智能变升节能速热精准恒温防冻以旧换新8年包修燃气热水器">
                                                                        万家乐【恒温王DP1(F)·金榜爆品】13升天然气智能变升节能速热精准恒温防冻以旧换新8年包修燃气热水器
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">832</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-10"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100149555960&quot;,&quot;index&quot;:10,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/383815/39/17942/84168/6960d76bFabfca331/ddab93613afc8dd9.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="奥克斯（AUX）即热式电热水器8500W速热无极变频恒温省电家用多功率可调淋浴洗澡无胆免储水【上门安装】">
                                                                        奥克斯（AUX）即热式电热水器8500W速热无极变频恒温省电家用多功率可调淋浴洗澡无胆免储水【上门安装】
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">819</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item" id="recommend-itme-11"
                                                                data-point="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100052160825&quot;,&quot;index&quot;:11,&quot;floorStyle&quot;:&quot;0&quot;}">
                                                                <div class="img-area"><img class="img"
                                                                        src="//img11.360buyimg.com/n1/s170x170_jfs/t1/384676/35/18510/115271/696dd7ebF252f4362/0083320320f20eb0.jpg">
                                                                </div>
                                                                <div class="info">
                                                                    <div class="name"
                                                                        title="志高（CHIGO）即热式电热水器免储水热水器速热式  7500W变频恒温小厨宝洗澡功率可调 大屏款包安装 KBR-L75 ">
                                                                        志高（CHIGO）即热式电热水器免储水热水器速热式 7500W变频恒温小厨宝洗澡功率可调
                                                                        大屏款包安装 KBR-L75 </div>
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">540</div>
                                                                    </div>
                                                                    <div class="bottom-block">
                                                                        <div class="economize"></div><img alt=""
                                                                            class="add-cart"
                                                                            src="https://img14.360buyimg.com/imagetools/jfs/t1/261097/38/4038/959/676e6755F87046d57/add1052dd717c216.png">
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="right-arrow" style="display: flex;"><img alt=""
                                                            class="arrow"
                                                            src="https://img11.360buyimg.com/imagetools/jfs/t1/254955/16/4963/530/676e670fF0f862f1b/970f561bf58c4294.png">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="sx-expert-selection">
                                        <div class="expert-selection-root"
                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;}">
                                            <div class="title">达人选购</div>
                                            <div class="swiper">
                                                <div class="left-arrow" style="display: none;"><img alt="" class="arrow"
                                                        src="https://img13.360buyimg.com/imagetools/jfs/t1/268159/30/3998/538/676e66fcF50d57130/aa1646e03da3be5b.png">
                                                </div>
                                                <div class="scroll">
                                                    <ul class="list"
                                                        style="transition: 0.3s linear; transform: translateX(0px);">
                                                        <li class="item"
                                                            data-advertisement-expo="https://sh.jd.com/g/99LKp6boR80328hJcncDhj"
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100224760825&quot;,&quot;index&quot;:0}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/389788/35/107/88352/6969f7bbFf7bb0e0b/0083320320dc19ce.jpg">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="飞利浦（PHILIPS）即热式小厨宝电热水器 5500W无极变频 稀土厚膜瞬热 智能恒温家用厨房热水宝 政府补贴15% AWH2314">
                                                                    飞利浦（PHILIPS）即热式小厨宝电热水器 5500W无极变频 稀土厚膜瞬热 智能恒温家用厨房热水宝
                                                                    政府补贴15% AWH2314</div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1299</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item" data-advertisement-expo=""
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100014835886&quot;,&quot;index&quot;:1}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/389980/7/4483/84326/697077c4F9a0e98a1/0083320320a9206e.jpg">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="海尔（Haier）国家补贴电热水器60升 PD3 金刚无缝胆终身免换镁棒一级能效节能省电储水式大水量家用京东自营">
                                                                    海尔（Haier）国家补贴电热水器60升 PD3
                                                                    金刚无缝胆终身免换镁棒一级能效节能省电储水式大水量家用京东自营</div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1049</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item"
                                                            data-advertisement-expo="https://sh.jd.com/g/dR4D-qUw_Il87cdhg2TS4j"
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100195378800&quot;,&quot;index&quot;:2}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/385876/13/16077/82452/696e0063Fb586e4c6/008332032040a548.jpg">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="飞利浦（PHILIPS）即热式电热水器 智能语音控制8500W速热 四季恒温 无极变频 政府补贴15% AWH2402/93(85DA)升级版">
                                                                    飞利浦（PHILIPS）即热式电热水器 智能语音控制8500W速热 四季恒温 无极变频 政府补贴15%
                                                                    AWH2402/93(85DA)升级版</div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1529</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item" data-advertisement-expo=""
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100026582142&quot;,&quot;index&quot;:3}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/391325/8/4053/66060/697077d3Fa03f3610/008332032013ad82.jpg">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="海尔（Haier）国家补贴6.6升小厨宝电热水器EC6.6FA 一级能效京东自营 2200W速热 家用厨房台下小型储水式热水宝">
                                                                    海尔（Haier）国家补贴6.6升小厨宝电热水器EC6.6FA 一级能效京东自营 2200W速热
                                                                    家用厨房台下小型储水式热水宝</div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">462</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item"
                                                            data-advertisement-expo="https://sh.jd.com/g/b-iEx6eTk2A8Hzt4CiD9P2"
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;100112573665&quot;,&quot;index&quot;:4}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/392351/12/631/88635/697027ccF7ea559ef/0083320320f8efc7.jpg">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="美的（Midea）60升超薄双胆扁桶电热水器3300W速热节能长效镁棒大水量F6033-UD3(HE)一级能效以旧换新国家补贴">
                                                                    美的（Midea）60升超薄双胆扁桶电热水器3300W速热节能长效镁棒大水量F6033-UD3(HE)一级能效以旧换新国家补贴
                                                                </div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">1763</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="item" data-advertisement-expo=""
                                                            data-bp="{&quot;mainskuid&quot;:&quot;100037591427&quot;,&quot;skuid&quot;:&quot;10136056163878&quot;,&quot;index&quot;:5}">
                                                            <div class="img-area"><img class="img"
                                                                    src="//img11.360buyimg.com/n1/s170x170_jfs/t1/385662/1/17379/196374/69702b2dF5cf37a8e/00833203200a6eb4.png">
                                                            </div>
                                                            <div class="info">
                                                                <div class="name"
                                                                    title="美的（Midea）电热水器家用热水器60升储水式省电节能一级能效速热免换镁棒安全防电墙X1/JM1pro/以旧换新 60L 2500W 一级节能【99%用户选择】4人以上">
                                                                    美的（Midea）电热水器家用热水器60升储水式省电节能一级能效速热免换镁棒安全防电墙X1/JM1pro/以旧换新
                                                                    60L 2500W 一级节能【99%用户选择】4人以上</div>
                                                                <div class="bottom-block">
                                                                    <div class="price">
                                                                        <div class="unit">￥</div>
                                                                        <div class="value">799</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="right-arrow" style="display: flex;"><img alt=""
                                                        class="arrow"
                                                        src="https://img11.360buyimg.com/imagetools/jfs/t1/254955/16/4963/530/676e670fF0f862f1b/970f561bf58c4294.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="item" class="shop-information">
                                    <div class="module-title" style="display: block;"> 进店逛逛 </div>
                                    <div class="detail-shop" data-shop-url="//mall.jd.com/index-1000377830.html?from=pc"
                                        style="display: flex;">
                                        <div class="border-img">
                                            <img class="logo"
                                                src="https://img30.360buyimg.com/popshop/jfs/t1/183438/17/11901/17502/60dbd5ffE777e7da7/4bb55b277ebe8344.jpg">
                                        </div>
                                        <div class="name-tag">
                                            <div class="name" title="飞利浦（PHILIPS ）热水器京东自营旗舰店">飞利浦（PHILIPS ）热水器京东自营旗舰店
                                            </div>
                                            <div class="center-self-support"><img
                                                    src="//img11.360buyimg.com/img/jfs/t1/273656/23/29811/731/681b1e9aF9ce3b5bc/6102ba8228118daf.png"
                                                    alt=""></div>
                                            <div class="flex" style="display: flex;">
                                            </div>
                                        </div>
                                        <div class="advantage">
                                            <div class="item">
                                                <div class="flex">
                                                    <div class="text">累计评价</div>
                                                </div>
                                                <div class="value">2万+</div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="item">
                                                <div class="flex">
                                                    <div class="text">店铺关注</div>
                                                </div>
                                                <div class="value">7万</div>
                                            </div>
                                        </div>
                                        <div class="flex btns">
                                            <div class="customer-service shop-btn">
                                                <div class="im" title="联系客服" data-seller="飞利浦（PHILIPS ）热水器京东自营旗舰店"
                                                    data-code="1" data-domain="chat.jd.com"> <img
                                                        src="https://img14.360buyimg.com/imagetools/jfs/t1/266742/10/565/941/6764d381Fa0e75793/0906b84427a472cb.png"
                                                        alt="" class="shop-icon">
                                                    <div class="text">联系客服</div>
                                                </div>
                                            </div>
                                            <div class="stroll shop-btn">
                                                <img src="https://img11.360buyimg.com/imagetools/jfs/t1/263563/22/580/650/6764d39cFd1d362e3/6422fe8e3ba2f123.png"
                                                    alt="" class="shop-icon">
                                                <div class="text">进店逛逛</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="item" id="sx-product-detail">
                                    <div class="module-title"> 商品详情 </div>


                                    <!-- 商品属性 -->
                                    <div id="product-attribute">
                                        <div class="_scoped_wkh1b_1">
                                            <div class="item ">
                                                <div class="label"><span class="text"> 品牌</span></div>
                                                <div class="value">
                                                    <div class="text" title="飞利浦（PHILIPS）"><a
                                                            href="//list.jd.com/list.html?cat=737,13297,13690&amp;ev=exbrand_6742"
                                                            target="_blank">飞利浦（PHILIPS）</a></div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 商品编号</span></div>
                                                <div class="value">
                                                    <div class="text" title="100037591427">100037591427</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 货号</span></div>
                                                <div class="value">
                                                    <div class="text" title="AWH1028/93(85HB)">AWH1028/93(85HB)</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> CCC强制性认证</span></div>
                                                <div class="value">
                                                    <div class="text" title="是">是</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 能效网规格型号</span></div>
                                                <div class="value">
                                                    <div class="text" title="无能效等级">无能效等级</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 内胆材质</span></div>
                                                <div class="value">
                                                    <div class="text" title="无内胆">无内胆</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 加热功率</span></div>
                                                <div class="value">
                                                    <div class="text" title="8500W">8500W</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 产品尺寸</span></div>
                                                <div class="value">
                                                    <div class="text" title="长230mm 宽47mm 高440mm">长230mm 宽47mm 高440mm
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 防水等级</span>
                                                    <div class="tooltip-container">
                                                        <div class="tooltip-trigger"><img class="tips"
                                                                src="https://img12.360buyimg.com/imagetools/jfs/t1/330345/26/25726/940/68f73b67F1c0c8939/f4bbebe70a7c72a1.png">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="value">
                                                    <div class="text" title="IPX4">IPX4</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 电压/频率</span></div>
                                                <div class="value">
                                                    <div class="text" title="220V/50Hz">220V/50Hz</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 能效等级</span></div>
                                                <div class="value">
                                                    <div class="text" title="无能效等级">无能效等级</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 操控方式</span></div>
                                                <div class="value">
                                                    <div class="text" title="触控式">触控式</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 外观设计</span></div>
                                                <div class="value">
                                                    <div class="text" title="方型">方型</div>
                                                </div>
                                            </div>
                                            <div class="item ">
                                                <div class="label"><span class="text"> 容量</span></div>
                                                <div class="value">
                                                    <div class="text" title="100-150L">100-150L</div>
                                                </div>
                                            </div>
                                            <div class="item exclusive-row">
                                                <div class="label"><span class="text"> 包装清单</span></div>
                                                <div class="value">
                                                    <div class="text"
                                                        title="说明书*1；自攻螺钉*6；胶粒*4；滤网密封圈*2；合格证*1；流量阀*1；安全挂板*2">
                                                        说明书*1；自攻螺钉*6；胶粒*4；滤网密封圈*2；合格证*1；流量阀*1；安全挂板*2</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 品质生活 -->
                                    <div id="quality-life-new"></div>
                                    <!-- 图文详情 -->
                                    <div id="graphic-content">
                                        <div class="_scoped_1nhp8_1">
                                            <div id="event-zone" style="height: 735.434px;">
                                                <div style="transform: scale(0.967677); transform-origin: 0px 0px; width: max-content">
                                                    <div><a href="https://pro.jd.com/mall/active/43BEQ8FJt7NLgPBAqbnvf3ujX7dL/index.html?babelChannel=SxHdzq1"
                                                            target="_blank"><img data-index="0"
                                                                data-activityid="601718416"
                                                                src="//img10.360buyimg.com/pop/jfs/t1/390543/5/3669/80638/6970a736F468623e0/08f23de17c48d0fe.jpg"></a><a
                                                            href="https://item.jd.com/100311400988.html"
                                                            target="_blank"><img data-index="1"
                                                                data-activityid="601716966"
                                                                src="//img10.360buyimg.com/pop/jfs/t1/385928/38/14987/2306434/004ff801F67db05f5/08f23de17cacc75c.gif"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tx-video" style="height: auto;">
                                                <div class="video-player-container">
                                                    <div class="player-wrapper">
                                                        <div class="player-video"><video class="player-video-element"
                                                                playsinline="" webkit-playsinline="true"
                                                                x5-playsinline="true" x5-video-player-type="h5"
                                                                x5-video-player-fullscreen="false"
                                                                x5-video-orientation="portrait" x-webkit-airplay="allow"
                                                                poster="https://jvod.300hu.com/img/2024/613457109/1/img3.jpg"
                                                                preload="auto"
                                                                src="https://jvod.300hu.com/vod/product/1351944100/21852/c81a7df4303c4108b8aa35a051e48ca8.mp4"></video>
                                                            <div class="player-center-btn"><i
                                                                    class="controls-icon play-icon"></i></div>
                                                        </div>
                                                        <div
                                                            class="player-controls player-controls-absolute player-controls-visible">
                                                            <div class="player-controls-content">
                                                                <div class="player-controls-left">
                                                                    <div class="volume-container">
                                                                        <div class="controls-btn"><i
                                                                                class="controls-icon volume-icon"></i>
                                                                        </div>
                                                                        <div class="controls-volume"><input min="0"
                                                                                max="1" step="0.1" class="volume-range"
                                                                                type="range" value="0.5"
                                                                                style="--volume-value: 50%;"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="player-controls-center">
                                                                    <div class="controls-time"><span>0:00 / 1:29</span>
                                                                    </div>
                                                                </div>
                                                                <div class="player-controls-right">
                                                                    <div class="controls-btn fullscreen-btn"><i
                                                                            class="controls-icon fullscreen-icon"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="player-progress-bar"><input min="0" max="100"
                                                                    class="progress-range" type="range" value="0"
                                                                    style="--progress-percentage: -12px; --progress-value: 0%;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div id="detail-main" style="height: 45128.2px;">
                                                <div style="transform: scale(1.27733); transform-origin: 0px 0px;">
                                                    <div>
                                                        <br>
                                                        <div class="ssd-module-wrap">
                                                            <div class="ssd-module M17556795555901 animate-M17556795555901"
                                                                data-id="M17556795555901">

                                                            </div>
                                                            <div class="ssd-module M17556795556062 animate-M17556795556062"
                                                                data-id="M17556795556062">

                                                            </div>
                                                            <div class="ssd-module M17649266359461 animate-M17649266359461"
                                                                data-id="M17649266359461">

                                                            </div>
                                                            <div class="ssd-module M17556795556184 animate-M17556795556184"
                                                                data-id="M17556795556184">

                                                            </div>
                                                            <div class="ssd-module M17685541125561 animate-M17685541125561"
                                                                data-id="M17685541125561">

                                                            </div>
                                                            <div class="ssd-module M17556795556296 animate-M17556795556296"
                                                                data-id="M17556795556296">

                                                            </div>
                                                            <div class="ssd-module M17556795556437 animate-M17556795556437"
                                                                data-id="M17556795556437">

                                                            </div>
                                                            <div class="ssd-module M17556795556568 animate-M17556795556568"
                                                                data-id="M17556795556568">

                                                            </div>
                                                            <div class="ssd-module M17556795556719 animate-M17556795556719"
                                                                data-id="M17556795556719">

                                                            </div>
                                                            <div class="ssd-module M175567955568310 animate-M175567955568310"
                                                                data-id="M175567955568310">

                                                            </div>
                                                            <div class="ssd-module M175567955570112 animate-M175567955570112"
                                                                data-id="M175567955570112">

                                                            </div>
                                                            <div class="ssd-module M175567955571413 animate-M175567955571413"
                                                                data-id="M175567955571413">

                                                            </div>
                                                            <div class="ssd-module M175567955572914 animate-M175567955572914"
                                                                data-id="M175567955572914">

                                                            </div>
                                                            <div class="ssd-module M175567955574216 animate-M175567955574216"
                                                                data-id="M175567955574216">

                                                            </div>
                                                            <div class="ssd-module M175567955575517 animate-M175567955575517"
                                                                data-id="M175567955575517">

                                                            </div>
                                                            <div class="ssd-module M175567955577018 animate-M175567955577018"
                                                                data-id="M175567955577018">

                                                            </div>
                                                            <div class="ssd-module M175567955578420 animate-M175567955578420"
                                                                data-id="M175567955578420">

                                                            </div>
                                                            <div class="ssd-module M175567955580121 animate-M175567955580121"
                                                                data-id="M175567955580121">

                                                            </div>
                                                            <div class="ssd-module M175567955581622 animate-M175567955581622"
                                                                data-id="M175567955581622">

                                                            </div>
                                                            <div class="ssd-module M175567955583323 animate-M175567955583323"
                                                                data-id="M175567955583323">

                                                            </div>
                                                            <div class="ssd-module M175567955584924 animate-M175567955584924"
                                                                data-id="M175567955584924">

                                                            </div>
                                                            <div class="ssd-module M175567955586725 animate-M175567955586725"
                                                                data-id="M175567955586725">

                                                            </div>
                                                            <div class="ssd-module M175567955588627 animate-M175567955588627"
                                                                data-id="M175567955588627">

                                                            </div>
                                                            <div class="ssd-module M175567955590928 animate-M175567955590928"
                                                                data-id="M175567955590928">

                                                            </div>
                                                            <div class="ssd-module M175567955592830 animate-M175567955592830"
                                                                data-id="M175567955592830">

                                                            </div>
                                                            <div class="ssd-module M175567955598832 animate-M175567955598832"
                                                                data-id="M175567955598832">

                                                            </div>
                                                            <div class="ssd-module M175567955601433 animate-M175567955601433"
                                                                data-id="M175567955601433">

                                                            </div>
                                                            <div class="ssd-module M175567955603634 animate-M175567955603634"
                                                                data-id="M175567955603634">

                                                            </div>

                                                        </div>
                                                        <!-- 2026-01-16 05:01:59 --> <br>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="item">
                                    <div class="module-title">售后保障</div>
                                    <div class="m m-content guarantee" id="guarantee">

                                        <div class="mc">
                                            <div class="item-detail item-detail-copyright">
                                                <div class="serve-agree-bd">
                                                    <dl>


                                                        <dt>
                                                            <i class="goods"></i>
                                                            <strong>厂家服务</strong>
                                                        </dt>
                                                        <dd>
                                                            本商品质保期周期2年质保，在此时间范围内可提交维修申请，具体请以厂家服务为准。<br>
                                                            自收到商品之日起，如您所购买家电商品出现质量问题，请先联系厂家进行检测，凭厂商提供的故障检测证明，在“我的京东-客户服务-返修退换货”页面提交退换申请，将有专业售后人员提供服务。
                                                            京东承诺您：7天内产品出现质量问题可退货，15天内产品出现质量问题可换货，质保期内可申请维修服务。 </dd>
                                                        <dt>
                                                            <i class="goods"></i>
                                                            <strong>京东承诺</strong>
                                                        </dt>
                                                        <dd>
                                                            京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！<br>
                                                            注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
                                                        </dd>
                                                        <dt>
                                                            <i class="goods"></i><strong>
                                                                正品行货 </strong>
                                                        </dt>
                                                        <dd>京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。</dd>
                                                        <dt><i class="no-worries"></i><strong>无忧退货</strong></dt>
                                                        <dd class="no-worries-text">
                                                            客户购买京东自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div id="state">
                                                    <strong>权利声明：</strong><br>京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。
                                                    <p><b>注：</b>本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。
                                                    </p>
                                                    <br>
                                                    <p><b>预估到手价/到手价：</b>是在商品标价基础上减去各种折扣、可用优惠政策叠加金额之后的一种预估的价格，计算公式示例：预估到手价=商品标价-优惠券-满减（或折扣）-新客优惠（如有）-商家会员优惠（如有），用户在进入结算页面之后，根据满足条件可享的活动（如所购商品超出商品促销价限购数量）、优惠券组合，可能导致最终到手价与显示预估到手价有差异和变化，并且不同用户可能因为可以享受的优惠不同（造成这种不同的原因包括是否属于新客或商家会员，可用优惠券差异、购买多件商品而满减活动仅支持享受1次等）而导致最终到手价不同，并且可能出现未登录和登录状态下的到手价差异。
                                                    </p>
                                                    <p><b>京东价：</b>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>
                                                    <p><b>划线价：</b>商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或其他真实有依据的价格；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                                                    </p>
                                                    <p><b>折扣：</b>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
                                                    </p>
                                                    <p><b>异常问题：</b>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
                                                    </p> <br>
                                                    <strong>能效标识说明：</strong><br>
                                                    <p>根据国家相关能效标识法规和标准的要求，京东自营在售商品的能效标识图样，将会逐步替换为新版能源效率标识贴；受能效标识标准变化影响，部分产品的新版和旧版能效标识，在能效等级、测试值等方面会有差异，但产品实际性能完全一样，并不影响购买和使用，加贴新版或旧版能效标识的商品会随机发放，请您放心购买；如有疑问，请在购买前通过咚咚或来电咨询。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="itemInfo-wrap">
                    <div class="information-wrap pro-detail-hd-fixed fix-bottom"
                        style="opacity: 1;height: 932px;min-height: unset;overflow: scroll;">
                        <div id="common_banner" class="activity-banner"
                            style="background: url(//img30.360buyimg.com/jdg/jfs/t1/252711/25/25141/58560/67bc7ab2F648e40e0/3669f873207ee771.png) 0% 0% / cover rgb(255, 255, 255);top: 0px;">
                            <span class="pay-icon-right">
                                <span class="pay-right-img">
                                    <img src="https://img30.360buyimg.com/jdg/jfs/t1/254567/4/25201/9837/67bc7acaF3442d114/ec8dad9a5b20c7fc.png"
                                        style=" height: 50px;">
                                </span>
                                <span class="pay-right-text">京东支付已预减¥176.85</span>
                            </span>
                            <span class="pay-icon-left">
                                <img src="https://img13.360buyimg.com/imagetools/jfs/t1/319403/29/18104/3115/688241baFea5d4a75/85fd01c02a093b00.png"
                                    style=" height: 20px;vertical-align: middle;display: inline-block;">
                            </span>
                        </div>

                        <div class="common-plan" id="common-plan">
                            <div class="purchase-tab gfgm  curr curr-left " datatype="gfgm">官方购买</div>
                            <div class="purchase-tab yjhx curr curr-right-one " datatype="yjhx">以旧换新</div>
                        </div>

                        <div class=" infomation">

                            <div class="sku-name-container">
                                <div class="sku-title">
                                    <span class="sku-title-text">
                                        <span class="sku-title-icon-box">
                                            <img class="sku-type-icon" alt="4"
                                                src="//img12.360buyimg.com/imagetools/jfs/t1/268896/7/14616/2557/6790e651F156f7931/72bf646a04995e58.png">
                                            <img class="sku-type-icon" alt="5"
                                                src="//img11.360buyimg.com/imagetools/jfs/t1/314561/11/19308/4652/688241b2F9bad4928/46c331fb05d9d3fe.png">
                                        </span>
                                        <span class="sku-title-name">飞利浦（PHILIPS）即热式电热水器 电即热8500W速热无极变频智能恒温 政府补贴15%
                                            无胆免储水AWH1028/93(85HB)</span>
                                    </span>
                                    <span class="follow-btn">
                                        <i class="star-icon"></i>
                                        收藏
                                    </span>
                                </div>
                            </div>

                            <div class="summary-price-wrap">
                                <div class="summary-price J-summary-price">
                                    <div class="dd">
                                        <span class="finalPrice" id="J_FinalPrice">
                                            <span class="symbol">￥</span><span class="price">1002.15</span>
                                            <span class="priceContent priceContentText">政府补贴价</span>
                                        </span>
                                        <span class="p-price jdPrice">
                                            <span>￥</span>
                                            <span class="price J-p-100037591427"
                                                style="text-decoration: line-through;">1209.00</span>
                                        </span>

                                        <span class="pricing" id="page_opprice"></span>
                                        <div class="commentNotice" style="padding-left: 0px;">
                                            <div class="summary-info J-summary-info clearfix">
                                                <div id="comment-count" class="comment-count item fl"
                                                    clstag="shangpin|keycount|product|pingjiabtn_1">
                                                    <span class="comment">累计评价</span>
                                                    <a class="count J-comm-100037591427" href="#none">2万+</a>
                                                </div>
                                                <a class="notice J-notify-sale" data-type="1" data-sku="100037591427"
                                                    href="#none" clstag="shangpin|keycount|product|jiangjia_1">
                                                    <i></i>降价通知
                                                </a>
                                            </div>
                                        </div>

                                        <!-- 高端品 限时特惠start，这段代码中的样式，是需要改的，请前端同学定义样式。还有用js代码，完成对应的需求 -->
                                        <span class="J-xsth-sale" style="display: none;">
                                            <a href="#none" class="J-xsth-panel"
                                                clstag="shangpin|keycount|product|xianshitehui">限时特惠
                                                <s class="s-arrow">&gt;</s>
                                            </a>
                                            <i class="sprite-question"></i>
                                        </span>
                                        <!-- 高端品 限时特惠end -->


                                        <div class="firmbuy-price J-firmbuy-price hide" style="display: none;">
                                        </div>
                                    </div>
                                </div>

                                <span class="computer-btn" style="display: none">去计算最小件单价</span>
                            </div>

                            <div class="" style="display: block; top: 153px;" id="sx-discount">
                                <div>
                                    <div class="shareds">
                                        <div class="label">已享受：</div>
                                        <div class="floor-list">
                                            <div class="floor-item" style="color: rgb(10, 173, 72);">政府补贴｜已预减￥176.85
                                            </div>
                                            <div class="floor-item">满30.01减30</div><img class="arrow-icon"
                                                src="https://img13.360buyimg.com/imagetools/jfs/t1/268329/4/5140/307/67713025F1b4d312d/d607de0c281b0358.png">
                                        </div>
                                    </div>
                                    <div class="again-shareds mt12">
                                        <div class="label">可再享：</div>
                                        <div class="floor-list">
                                            <div class="floor-item">最高返50京豆</div><img class="arrow-icon"
                                                src="https://img13.360buyimg.com/imagetools/jfs/t1/268329/4/5140/307/67713025F1b4d312d/d607de0c281b0358.png">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="laxin-new">
                                <div id="laxin-new-container">
                                    <div class="li">
                                        <ul class="ddnew">
                                            <li><img
                                                    src="https://img10.360buyimg.com/imagetools/jfs/t1/261718/22/6550/560/67769350Fdeefaae3/4bdb3c60cbde63ae.png.avif">
                                                <div><a target="_blank"
                                                        href="https://pro.jd.com/mall/active/yAF6bUpekEWe33txHwtRZ9kvX62/index.html">家电家居企业购8折</a>
                                                </div>
                                            </li>
                                            <li><img
                                                    src="//img13.360buyimg.com/img/jfs/t1/381854/9/4930/520/6949006cFd5aebde7/0276014014d05bca.png.avif">
                                                <div><a target="_blank"
                                                        href="//jd-helper-browser-plugin-download-pro.pf.jd.com?from=item_details&amp;login_status=1">一键找同款，比价更省心</a>
                                                </div>
                                            </li>
                                        </ul><span class="arrow"></span>
                                    </div>
                                </div>
                            </div>

                            <div id="ranking-list" style="display: block;">
                                <div class="ranking-content">
                                    <a href="https://pro.jd.com/mall/active/4JRfHorUDXgL77E9YdNxSCNMKwkJ/index.html?pageNum=1&amp;bbtf=1&amp;queryType=1&amp;rankId=2355059&amp;rankType=13&amp;fromName=ProductdetailPC&amp;preSrc=null&amp;currSku=100037591427"
                                        class="ranking-item" target="_blank">
                                        <img class="ranking-icon" alt=""
                                            src="https://img12.360buyimg.com/img/jfs/t1/331951/9/11069/561/68bfbfe8Fc70eac66/2c04927b7009f963.png">
                                        <span class="ranking-name">1月『电热水器金榜』TOP20</span>
                                        <i class="ranking-arrow"></i>
                                    </a>
                                </div>
                            </div>

                            <div id="summary-supply" class="li" style="">
                                <div class="dt">送至</div>
                                <div class="dd">
                                    <div id="summary-service" class="summary-service">
                                        <span class="delivery">23:10前付款，预计<b>明天(01月18日)</b>送达</span>
                                        <span class="delivery-tips"
                                            style="display: none;">23:10前付款，预计<b>明天(01月18日)</b>送达</span>
                                    </div>
                                </div>
                            </div>

                            <div class="SelfAssuredPurchase li" id="J_LogisticsService" style="">
                                <div class="dd">
                                    <div class="store clearfix">
                                        <div class="stock-address">
                                            <div id="area-2024" class="ui-area-wrap ui-area-oversea-mode"
                                                style="position: relative; height: 16px;">
                                                <div class="ui-area-text-wrap">
                                                    <div class="ui-area-text" data-id="27-2376-50232-53745"
                                                        title="陕西西安市灞桥区十里铺街道">陕西西安市灞桥区十里铺街道</div><b></b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ns_services" style="display: inline-block;">
                                        <div class="icon-wl special_services">京东物流</div>
                                        <div class="logistic-basic">
                                            <a target="_blank" href="//help.jd.com/user/issue/103-983.html"
                                                title="选择京准达服务，可指定精确时间点收货；若京东责任超时，即时赔付">京准达</a>
                                            <i>·</i>
                                            <a target="_blank" href="https://help.jd.com/user/issue/91-953.html"
                                                title="上午下单，下午送达">211限时达</a>
                                            <div class="logistic-more" style="display: none;">
                                                <div>
                                                    <a target="_blank" href="//help.jd.com/user/issue/103-983.html"
                                                        title="选择京准达服务，可指定精确时间点收货；若京东责任超时，即时赔付">京准达</a>
                                                    <a target="_blank" href="https://help.jd.com/user/issue/91-953.html"
                                                        title="上午下单，下午送达">211限时达</a>
                                                    <a target="_blank" href="//help.jd.com/user/issue/103-983.html"
                                                        title="指定时间前下单，最快明日达">明日达</a>
                                                    <a target="_blank" href="//help.jd.com/user/issue/103-983.html"
                                                        title="京东物流为该商品提供预约送货服务">预约送货</a>
                                                </div>
                                                <div>
                                                    <a target="_blank"
                                                        href="https://help.jd.com/user/issue/103-983.html"
                                                        title="如果收件人收货时发现部分货物存在缺少配件、物流损等情形，京东物流提供订单半收服务">部分收货</a>
                                                    <a target="_blank"
                                                        href="https://help.jd.com/user/issue/254-4130.html"
                                                        title="京东快递为您提供送货上门服务">送货上门</a>
                                                    <a target="_blank" href="//help.jd.com/user/issue/103-983.html"
                                                        title="我们提供多种自提服务，包括京东自提点、自助提货柜、京东校园派、京东星配站、京东便民站等服务">自提</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="choose-attrs">
                                <div id="choose-attr-1" class="li p-choose" data-type="机型" data-idx="0">
                                    <div class="dt " title="机型">机型 </div>
                                    <div class="dd">
                                        <div class="item" data-sku="100142054294" data-value="7000W亲肤玻璃+Ai智能">
                                            <b></b>
                                            <a href="#none" clstag="shangpin|keycount|product|yanse-7000W亲肤玻璃+Ai智能">
                                                <img data-img="1"
                                                    src="//img14.360buyimg.com/n9/s28x28_jfs/t1/383686/23/18146/25234/695f5ccfF72c5b86c/d56435f1e7dd77b7.jpg"
                                                    width="28" height="28" alt="7000W亲肤玻璃+Ai智能">
                                                <i>7000W亲肤玻璃+Ai智能</i>
                                            </a>
                                        </div>
                                        <div class="item" data-sku="100142054276" data-value="8500W亲肤玻璃+Ai智能">
                                            <b></b>
                                            <a href="#none" clstag="shangpin|keycount|product|yanse-8500W亲肤玻璃+Ai智能">
                                                <img data-img="1"
                                                    src="//img11.360buyimg.com/n9/s28x28_jfs/t1/383686/23/18146/25234/695f5ccfF72c5b86c/d56435f1e7dd77b7.jpg"
                                                    width="28" height="28" alt="8500W亲肤玻璃+Ai智能"><i>8500W亲肤玻璃+Ai智能</i>
                                            </a>
                                        </div>
                                        <div class="item  selected" data-sku="100037591427"
                                            data-value="8500W无极变频+零肤感恒温">
                                            <b></b>
                                            <a href="#none" clstag="shangpin|keycount|product|yanse-8500W无极变频+零肤感恒温">
                                                <img data-img="1"
                                                    src="//img12.360buyimg.com/n9/s28x28_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg"
                                                    width="28" height="28" alt="8500W无极变频+零肤感恒温"><i>8500W无极变频+零肤感恒温</i>
                                            </a>
                                        </div>
                                        <div class="item" data-sku="100180833340" data-value="新品升级款7000W亲肤玻璃+AI智能">
                                            <b></b>
                                            <a href="#none"
                                                clstag="shangpin|keycount|product|yanse-新品升级款7000W亲肤玻璃+AI智能">
                                                <img data-img="1"
                                                    src="//img10.360buyimg.com/n9/s28x28_jfs/t1/387192/15/850/22562/695f5ccdFd9544c83/186c890ca803d70d.jpg"
                                                    width="28" height="28"
                                                    alt="新品升级款7000W亲肤玻璃+AI智能"><i>新品升级款7000W亲肤玻璃+AI智能</i>
                                            </a>
                                        </div>
                                        <div class="item" data-sku="100180833404" data-value="新品升级款8500W亲肤玻璃+AI智能">
                                            <b></b>
                                            <a href="#none"
                                                clstag="shangpin|keycount|product|yanse-新品升级款8500W亲肤玻璃+AI智能">
                                                <img data-img="1"
                                                    src="//img14.360buyimg.com/n9/s28x28_jfs/t1/387192/15/850/22562/695f5ccdFd9544c83/186c890ca803d70d.jpg"
                                                    width="28" height="28"
                                                    alt="新品升级款8500W亲肤玻璃+AI智能"><i>新品升级款8500W亲肤玻璃+AI智能</i>
                                            </a>
                                        </div>
                                        <div class="item" data-sku="100135093108" data-value="7000W高阶性价比+智能精控">
                                            <b></b>
                                            <a href="#none" clstag="shangpin|keycount|product|yanse-7000W高阶性价比+智能精控">
                                                <img data-img="1"
                                                    src="//img13.360buyimg.com/n9/s28x28_jfs/t1/381783/10/15527/28998/695f5cceF399dbdda/69b2cff6ea913477.jpg"
                                                    width="28" height="28" alt="7000W高阶性价比+智能精控"><i>7000W高阶性价比+智能精控</i>
                                            </a>
                                        </div>
                                        <div class="item" data-sku="100113854939" data-value="8500W高阶性价比+智能精控">
                                            <b></b>
                                            <a href="#none" clstag="shangpin|keycount|product|yanse-8500W高阶性价比+智能精控">
                                                <img data-img="1"
                                                    src="//img14.360buyimg.com/n9/s28x28_jfs/t1/381783/10/15527/28998/695f5cceF399dbdda/69b2cff6ea913477.jpg"
                                                    width="28" height="28" alt="8500W高阶性价比+智能精控"><i>8500W高阶性价比+智能精控</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div id="choose-results" class="li" style="display:none;">
                                    <div class="dt">已选择</div>
                                    <div class="dd"></div>
                                </div>
                            </div>

                            <div class="summary-stock" id="service-support" style="">
                                <div class="dt">服务</div>
                                <div class="dd">
                                    <div class="store clearfix">
                                        <div class="J-promise-icon promise-icon fl promise-icon-more"
                                            style="display: block;">
                                            <div class="services ns_services_info services--more expand">
                                                <div><a target="_blank"
                                                        title="所选地址自营订单满59元免基础运费(20kg内)，超出重量加收1元/kg续重运费。"
                                                        href="//help.jd.com/user/issue/103-983.html">59元免基础运费</a><i> ·
                                                    </i><a target="_blank"
                                                        title="PLUS正式会员购买该商品，签收后180天内出现国家“三包”范围内的硬件性能故障，检测属实后可享一次换新服务。"
                                                        href="https://plus.m.jd.com/rights/plusRightsDetailNew/detail36?utm_source=treasureChest">PLUS
                                                        180天只换不修</a><i> · </i><span
                                                        title="售后时效内申请退换货，选择上门取件优先安排京东物流服务，无需支付退换货运费；选择自寄，售后完成后补首重运费。">免费上门退换</span><i>
                                                        · </i><a target="_blank"
                                                        title="在下单后30天内，商品出现降价可享受价保服务（商品在消费者下单后因参与百亿补贴、政府补贴等活动导致降价不支持价保），可点击“&gt;”了解详细规则"
                                                        href="https://help.jd.com/user/issue/291-4537.html">30天价保</a>
                                                </div>
                                                <div><a target="_blank" title="签收后的2年内，因商品性能故障问题可享受维修服务。"
                                                        href="https://help.jd.com/user/issue/942-4568.html">两年质保</a><i>
                                                        · </i><span title="由京东指定供应商提供售后服务">供应商售后</span><i> · </i><span
                                                        title="京东发货&amp;店铺售后">京东发货&amp;店铺售后</span></div>
                                                <div><span>支持7天无理由退货(安装后不支持)</span></div>
                                                <div></div><span class="arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="summary p-choose-wrap">


                                <div id="choose-luodipei" class="choose-luodipei li" style="display:none">
                                    <div class="dt">送装服务</div>
                                    <div class="dd"></div>
                                </div>

                                <div id="choose-gift" class="choose-gift li" style="display: none;">
                                    <div class="dt">搭配赠品</div>
                                    <div class="dd clearfix">
                                        <div class="gift J-gift" clstag="shangpin|keycount|product|dapeizengpin">
                                            <i class="sprite-gift J-popup"></i><span
                                                class="gift-tips">选择搭配赠品(共<em>0</em>个)</span>
                                        </div>
                                        <!--choosed-->
                                        <div class="J-gift-selected hide">
                                            <div class="gift choosed J-gift-choosed"></div>
                                            <a href="#none" class="gift-modify J-popup"
                                                clstag="shangpin|keycount|product|zengpin-genggai">更改</a>
                                        </div>
                                    </div>
                                </div>

                                <div id="choose-serviceyc" class="li" data-hook="hide" style="display: block;">
                                    <div class="dt" data-yb="new_yb_server">京选服务</div>
                                    <div class="dd">
                                        <div class="service-type-yb clearfix">
                                            <div class="yb-item-cat">
                                                <div class="yb-item"> <span class="name">只换不修</span> <span
                                                        class="name-tip"></span>
                                                    <div class="after"></div>
                                                </div>
                                                <div class="more-jd-item">
                                                    <div data-sku="100209356359"
                                                        class="more-item more-item-100209356359">
                                                        <ul>
                                                            <li data-sku="100209356359">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100209356359">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100209356359">
                                                                        <span class="name">6年免费换新</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能故障只换不修</span><span
                                                                            class="price">￥108.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div data-sku="100213571349"
                                                        class="more-item more-item-100213571349">
                                                        <ul>
                                                            <li data-sku="100213571349">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100213571349">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100213571349">
                                                                        <span class="name">4年免费换新</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能故障只换不修</span><span
                                                                            class="price">￥89.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="yb-item-cat">
                                                <div class="yb-item"> <span class="name">可修可换</span> <span
                                                        class="name-tip"></span>
                                                    <div class="after"></div>
                                                </div>
                                                <div class="more-jd-item">
                                                    <div data-sku="100053154981"
                                                        class="more-item more-item-100053154981">
                                                        <ul>
                                                            <li data-sku="100053154981">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100053154981">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100053154981">
                                                                        <span class="name">4年全保修换</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能/意外故障前2年换后2年修</span><span
                                                                            class="price">￥69.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div data-sku="100021952687"
                                                        class="more-item more-item-100021952687">
                                                        <ul>
                                                            <li data-sku="100021952687">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100021952687">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100021952687">
                                                                        <span class="name">5年全保修换</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能/意外故障前2年换后3年修</span><span
                                                                            class="price">￥109.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="yb-item-cat">
                                                <div class="yb-item"> <span class="name">免费维修</span> <span
                                                        class="name-tip"></span>
                                                    <div class="after"></div>
                                                </div>
                                                <div class="more-jd-item">
                                                    <div data-sku="100103856491"
                                                        class="more-item more-item-100103856491">
                                                        <ul>
                                                            <li data-sku="100103856491">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100103856491">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100103856491">
                                                                        <span class="name">6年全保修</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能/意外故障
                                                                            免费维修</span><span class="price">￥89.00</span>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div data-sku="100120100652"
                                                        class="more-item more-item-100120100652">
                                                        <ul>
                                                            <li data-sku="100120100652">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwu_100120100652">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwu_100120100652">
                                                                        <span class="name">8年全保修</span><span
                                                                            class="name-tip"
                                                                            style="display: none">性能/意外故障
                                                                            免费维修</span><span
                                                                            class="price">￥161.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="btn-open-div" class="btn-open-div"> <span id="btn-open"
                                                class="btn-open" style="display: none;"> 展开全部 </span> <img
                                                class="open-opens" style="margin-left: 8px; display: none;" width="10"
                                                height="10"
                                                src="//img11.360buyimg.com/imagetools/jfs/t1/264116/11/14470/583/6790c6b0F446ef23c/4ae3a1af1d4ac2d4.png">
                                        </div>
                                        <div class="service-tips hide"> </div>
                                    </div>
                                </div>

                                <div id="choose-service" class="li" data-hook="hide" style="display:none;"></div>
                                <div id="choose-service+" class="li" style="display: block;">
                                    <div class="dt">京东服务</div>
                                    <div class="dd">
                                        <div class="service-type-yb-puls clearfix">
                                            <div class="yb-item-cat">
                                                <div class="yb-item"> <span class="name">拆旧送安装</span> <span
                                                        class="name-tip"></span>
                                                    <div class="after"></div>
                                                </div>
                                                <div class="more-jd-item">
                                                    <div data-sku="100009462231" class="more-item">
                                                        <ul>
                                                            <li data-sku="100009462231">
                                                                <div class="title"
                                                                    clstag="shangpin|keycount|product|jingdongfuwujia_100009462231">
                                                                    <span class="choose-btn"
                                                                        clstag="shangpin|keycount|product|jingdongfuwujia_100009462231">
                                                                        <span class="name">拆旧送安装</span><span
                                                                            class="name-tip"
                                                                            style="display: none"></span><span
                                                                            class="price">￥99.00</span> </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="btn-open-div" class="btn-open-div"> <span id="btn-open"
                                                class="btn-open" style="display: none;"> 展开全部 </span> <img
                                                class="open-opens" style="margin-right: 8px; display: none;" width="10"
                                                height="10"
                                                src="//img11.360buyimg.com/imagetools/jfs/t1/264116/11/14470/583/6790c6b0F446ef23c/4ae3a1af1d4ac2d4.png">
                                        </div>
                                        <div class="service-tips hide"> </div>
                                    </div>
                                </div>



                                <div id="choose-baitiao" class="li choose-baitiao" style="display: none;"></div>
                                <div id="choose-jincai-new"></div>

                                <div id="commitments-new"></div>

                                <div id="choose-custom-new" style="display:none"></div>

                                <div id="summary-tips" class="summary-tips" style="">
                                    <dt>温馨提示</dt>
                                    <ol class="tips-list clearfix">
                                        <li class="local-txt">热水器安装环境不符或安装方式不当,可能造成重大安全隐患,务必由厂商授权的专业机构进行安装,切勿自行安装。<em
                                                style="display: none;">|</em><!--</li--></li>
                                    </ol>
                                </div>

                                <div id="choose-btns" class="choose-btns clearfix"
                                    style="position: fixed; left: 1167px; width: 594px; top: unset;">
                                    <div class="choose-amount " clstag="shangpin|keycount|product|goumaishuliang_1">
                                        <div class="wrap-input">
                                            <input class="text buy-num" onkeyup="setAmount.modify('#buy-num');"
                                                id="buy-num" value="1" data-max="200" autocomplete="off" title="1"
                                                style="font-size: 20px;">
                                            <a class="btn-reduce disabled" onclick="setAmount.reduce('#buy-num')"
                                                href="#none">-</a>
                                            <a class="btn-add" onclick="setAmount.add('#buy-num')" href="#none">+</a>
                                        </div>
                                        <div class="tips hide" style="display: none;"></div>
                                    </div>


                                    <div id="J_choose_app_btn" class="J_choose_app_btn">
                                        <a href="#none" id="btn-goapp" class="J-app-stock btn-lg btn-special1"
                                            style="font-size: 20px;">前往手机购买
                                            <div class="yjhxTip" style="display: none;">
                                                <span class="close"></span>
                                                <p class="title">扫描二维码查看商品</p>
                                                <div id="summary-mbuy">
                                                    <div class="qrcode">
                                                        <img
                                                            src="data:image/png;base64,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">
                                                    </div>
                                                </div>
                                                <p class="bottom">打开<span>手机京东</span> 扫描二维码</p>
                                            </div>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
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
.serve-agree-bd dd {
    display: block;
    padding: 10px 0;
    margin-left: 28px;
    font-size: 14px;
    color: #888b94;
    line-height: 18px;
}

.serve-agree-bd dt i {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background: url(https://img14.360buyimg.com/imagetools/jfs/t1/256217/21/11772/764/67820d15F6f744ce2/1c142ba9d43c7b7b.png) left top / 100% 100% no-repeat;
}

.serve-agree-bd dt {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
}

.serve-agree-bd {
    margin-bottom: 24px;
}

#state strong {
    color: #ff0f23;
    font-size: 16px;
    margin-bottom: 10px;
}

#state {
    font-size: 14px;
    line-height: 18px;
}

.serve-agree-bd {
    margin-bottom: 24px;
}

.module-title {
    font-size: 20px;
    font-weight: 600;
    padding: 0 0 24px;
    color: #1a1a1a; 
}

.detail .tab-con>div:nth-last-child(1) {
    border-radius: 0 0 8px 8px;
    margin-bottom: 15px;
}

.ssd-module-wrap {
    position: relative;
    margin: 0 auto;
    width: 750px;
    text-align: left;
    background-color: #fff
}

.ssd-module-wrap .ssd-module,
.ssd-module-wrap .ssd-module-heading {
    width: 750px;
    position: relative;
    overflow: hidden
}

.ssd-module-wrap .ssd-floor-activity {
    max-height: 380px;
    overflow: hidden
}

.ssd-module-wrap .ssd-floor-shopPrior {
    max-height: 900px;
    overflow: hidden
}

.ssd-module-wrap .ssd-floor-authorize {
    max-height: 300px;
    overflow: hidden
}

.ssd-module-wrap .ssd-floor-reminder {
    max-height: 4000px;
    overflow: hidden
}

.ssd-module-wrap .ssd-module {
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% 100%
}

.ssd-module-wrap .ssd-module-heading {
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100% 100%
}

.ssd-module-wrap .ssd-module-heading .ssd-module-heading-layout {
    display: inline-block
}

.ssd-module-wrap .ssd-module-heading .ssd-widget-heading-ch {
    float: left;
    display: inline-block;
    margin: 0 6px 0 15px;
    height: 100%
}

.ssd-module-wrap .ssd-module-heading .ssd-widget-heading-en {
    float: left;
    display: inline-block;
    margin: 0 15px 0 6px;
    height: 100%
}

.ssd-module-wrap .ssd-widget-circle,
.ssd-module-wrap .ssd-widget-line,
.ssd-module-wrap .ssd-widget-pic,
.ssd-module-wrap .ssd-widget-rectangle,
.ssd-module-wrap .ssd-widget-table,
.ssd-module-wrap .ssd-widget-text,
.ssd-module-wrap .ssd-widget-triangle {
    position: absolute;
    overflow: hidden
}

.ssd-module-wrap .ssd-widget-rectangle {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box
}

.ssd-module-wrap .ssd-widget-triangle svg {
    width: 100%;
    height: 100%
}

.ssd-module-wrap .ssd-widget-table table {
    width: 100%;
    height: 100%
}

.ssd-module-wrap .ssd-widget-table td {
    position: relative;
    white-space: pre-line;
    word-break: break-all
}

.ssd-module-wrap .ssd-widget-pic img {
    display: block;
    width: 100%;
    height: 100%
}

.ssd-module-wrap .ssd-widget-text {
    line-height: 1.5;
    word-break: break-all
}

.ssd-module-wrap .ssd-widget-text span {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal
}

.ssd-module-wrap .ssd-widget-link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: 0 0;
    z-index: 100
}

.ssd-module-wrap .ssd-cell-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto
}

.ssd-module-wrap .ssd-show {
    display: block
}

.ssd-module-wrap .ssd-hide {
    display: none
}

.ssd-module-wrap .M17556795555901 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/346348/8/2103/141915/68c26cbdFba331a69/afab3e206646df73.jpg.avif);
    height: 1345px
}

.ssd-module-wrap .M17556795556062 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/279480/9/21326/104789/67ff66b8F28fd3dfa/7653d26a7228deaf.jpg.avif);
    height: 1421px
}

.ssd-module-wrap .M17649266359461 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/382714/9/2586/97173/69451d6fF67945053/00d63162760a6c14.jpg.avif);
    height: 598px
}

.ssd-module-wrap .M17556795556184 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/386673/12/9731/52529/6968b722Fb8531391/00d63162a1096d68.jpg.avif);
    height: 638px
}

.ssd-module-wrap .M17685541125561 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/291006/14/4041/96209/681d6e0eF1f2350bb/f183a220a326ff0e.jpg.avif);
    height: 610px
}

.ssd-module-wrap .M17556795556296 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/301024/2/4222/99377/681d6e0eF49d8d776/b6b1eb3d9d19aeb0.jpg.avif);
    height: 988px
}

.ssd-module-wrap .M17556795556437 {
    width: 750px;
    background-color: #b3b3b3;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/323672/11/8012/73284/68a585c4F9d0fb5e3/d112cdb3a56218db.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M17556795556568 {
    width: 750px;
    background-color: #d7d7d7;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/325617/15/8210/79214/68a585c4Fe3cdc25d/c159a0b07adcba9a.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M17556795556719 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/334379/36/1294/235353/68a585c6F7d252919/6ca60ce60f6111f6.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955568310 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/318463/10/27078/206291/68a585c6F7a8f4977/e32f2531068febfe.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955570112 {
    width: 750px;
    background-color: #f2f2f2;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/294054/20/12742/96242/68a585c5F0f34a70a/cd39b250d3b3a00a.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955571413 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/332309/18/1298/231771/68a585c6F1d53b728/1e0417945c0fe66a.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955572914 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/324467/31/8089/100770/68a585c5Fda389bb5/5ec3d7854e0a31c0.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955574216 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/332141/37/1298/115638/68a585c5F30a4dbe9/4de1d5d60003a690.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955575517 {
    width: 750px;
    background-color: #b3b3b3;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/330806/23/1152/112094/68a585c5Fd5334a07/ceee569d73d26282.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955577018 {
    width: 750px;
    background-color: #b3b3b3;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/329567/3/1307/88851/68a585c5F0c5fc29e/213ad2a2cfaf462d.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955578420 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/328082/1/7734/106968/68a585c5F142cef65/45cba5e62dfc6480.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955580121 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/324695/10/8001/181885/68a585c6F6f1f3903/8c498a19e67c1cf9.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955581622 {
    width: 750px;
    background-color: #b3b3b3;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/334281/33/1280/110188/68a585c5Fe3d8dabf/52f39eea8e529629.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955583323 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/334530/5/1300/127841/68a585c5Fbef1c00c/daaeeeda00898991.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955584924 {
    width: 750px;
    background-color: #d7d7d7;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/323360/17/8378/136638/68a585c5F5e7f6755/7924cb33dac4f830.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955586725 {
    width: 750px;
    background-color: #d7d7d7;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/333266/23/1342/72287/68a585c5F3de8885e/b00cd59a00b21464.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955588627 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/301021/6/15378/104198/69005ce0F9fd3bbb3/ba5d048363b93fe8.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955590928 {
    width: 750px;
    background-color: #e9e9e9;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/344745/7/18989/48545/69005cdfF251d25be/d9aab7ade51a2bf9.jpg.avif);
    height: 1423px
}

.ssd-module-wrap .M175567955592830 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/350962/6/18534/139208/69005ce0F83306d56/fd34d36182e94dfa.jpg.avif);
    height: 1225px
}

.ssd-module-wrap .M175567955598832 {
    width: 750px;
    background-color: #cbcbcb;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/266327/23/22332/18136/67b8231bFd9e659e0/1c3c5cedcd3fc99c.jpg.avif);
    height: 163px
}

.ssd-module-wrap .M175567955601433 {
    width: 750px;
    background-color: #b3b3b3;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/243010/2/3032/50834/65a0a2ebFd3f80fb6/b1da573a533a27b4.jpg.avif);
    height: 607px
}

.ssd-module-wrap .M175567955603634 {
    width: 750px;
    background-color: #d7d7d7;
    background-size: 100% 100%;
    background-image: url(//img30.360buyimg.com/sku/jfs/t1/249510/8/7230/180398/66179c95Fe2f5e875/d5f4f63b5da462ed.jpg.avif);
    height: 2113px
}

.video-player-container .player-wrapper .player-controls .player-progress-bar .progress-range {
    width: 100%;
    height: 6px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-btn .controls-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-btn .controls-icon.fullscreen-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAv9JREFUaEPtmr+KFTEUxr+v8gnsFdTCPyBaaeU2goKFhfsCglaKPoH6BIpWik+w9i7aaOWyjQj+Ad0F7X0AsTpyYC5kxyRnkklm5+5N4FaT5JxfvpzMPTlDrFjjivGiAR90xZvCTeEDtgLmlhaR8wCuJXK/IbmVOGZP91p2o8AicgnAu0zH10i+zxlb064F/BDAgxynATwiqeOTm4hUs1sL+AeA6yS/JdMCEJGTADYAnMoYH13oMcDrAH4HHNom+SfD2X4ca0j52uFuQXzPqgGrsXWSr8aCpYwXkRsRWJ2qKvCk0ANgiwPrNtbY6rfqSkdg+z4VVXgNQCh+qkEbsHqOuK/OssD6bo05UDqmLVued3Z5YN3PliMpB1Go7xAbkwHXhh4C2/nQ/zdYR+GFKhHHjpPczVFaRI4B2BlyOE6qsAF9l+SzTOA7AJ72xnoPxdLAFwB86Ax/BHCR5F8fhEdp7ZuVMYmIazf6rheRQ52P5zq/onaHpIcaI/rbJLkdU6zbilcA7JLczFHX2TU6j25ttRsNDRE52/n43bJrAo9xeo5jG/AcVSnpU1O45GrOca6m8BxVKelTU7jkas5xrqbwHFUp6VNTuORqznGupnBfFaeKt2GVTkTkCIDLAD7n5sJOeqg58RkAb0n+MtLSE5qrA9D0MJqDW6UW977oK8nTIcOeC4CrVm4amUtz4dfO8+gVsIh8cepQ0aqlBdyv4nknC9xr3Sb5IieOReQWgOf7ccVjAkcu8Y5aWzGisIbGT8/z/5QufacVBR56lZqpcqhotgd6MuCasM7BZUJPAjwF7FDo6sCrVkxbuXKp7/ypVib1/Amyqv86pGhtqe/DZLADYnrRpRpw7KOWrVBJJuUV1R1IviH79lFLyH+tQ90k+SkF0FFRSycvAehXgKmtmsKWI/dJPrE6+Z6LyD0Aj3PGjo3hfhUvxYeS1cNids18uIuj0AdiIUf0w7Sx1cNF1TIF1rRrAqdYW4a+DXgZVBrjY1N4zOotw9im8DKoNMbHf8f83UwFDp7BAAAAAElFTkSuQmCC);
}

.video-player-container .player-wrapper .player-controls .player-controls-content .player-controls-right .controls-btn {
    margin-left: 8px;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .player-controls-right {
    width: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-time {
    font-weight: 600;
    color: #fff;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0px;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .player-controls-center{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .volume-range {
    width: 60px;
    height: 4px;
    background: rgba(115, 133, 159, .5);
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    border-radius: 2px;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-btn .controls-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-btn .controls-icon.volume-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA4JJREFUWEfNmE3oVFUYxn/PIiIiiSgoS0pKXBTZBwglRokalkRFFGRESRlZiKJGpJFgIBEVIm2UEKF0EVIQRUSRi3bSItpFkAvLPoyENu2eeP+8Z7hznZl7x5n/zJzNwD3nvuc3zznv1xUzPjTjfEwU0PZlwEPAEkl72ogzacB7gW8TbLukd5sgJwoYMLYDMEBjbJJ0aBDkWAFt3wbcDRyVdK7fxjXIDZKO9ls7NkDbO4HdwILYTFJf27YvBr5MJc8CKyT91AtyZEDbKxNsbW2D+ySdGKDiEuAbYBFwSNKmsQLavgh4PeF6/dGBgHkfXwYOJNg6SaFq17ggBW0/kGB3DbjgjYAJ+RWwJtSUtHokQNtXJNi2pvAAtAUMuICM8YykI1XbrRW0/UTC3dICLpZ0AdqOwHw98KqkP6o2bH8IbAA+kxSBvDMaAW2H0fDO51qClWV1wF+AG4CPJD1VAwy4gIyxWNKpMt8BtL0OeBu4eUiQfsvrgDvSfqzfIqk4x9z7tv8G4gq9JmlfL8A4gjfGBHfeESdEySK/Aysl/Vz2s3047iDwo6RbpwV4fwbo2P99SRFmioLVPL1A0r8xUT3ieVcwVfwEeBj4VdJ1FcAbgaLo0pJZpgG4N52u6xpk+vsvgTv3dxqAjwLHE+RJSccqKv4JXAV0nk8D8FrgdELtkPROBfB74A6g83wagNcAv80yYOTxz2f5iHcBb9adYZacJBwkHOWUpMUzFWZsR/yLOBhjv6StwwTqzRHd5yvV2b48O7roW3qluoPA88BJSct7pbpw/y1AZ7ICW7qwYfjrxcJ7QFGsq1iwfSkQJVj8bpQUeXluNJZbmZ5eyuh/9RCEdUDnu59KeqRqx3YUCQEVmWShpH+GAkzIpQnZVcsNAO5VsC4DNks6UwOMsBPh56CkF6pzrRSsGXs6m6WbGtRsW/JvBD5IWw9K+mIkwFRzYar5YlsFe62zfSXwHRCnc1zSY/V1QytYUzPuUrSet/cAaFTQ9lvAK/nuKknlu03H3EiAqWZ8sYqepWxUjDc17uujScrFRySFo5w3RgYsFm1H+xig98yFh8GfPiIWhmPEVYmxXNLJeQWsgMYnjGOlZK9vmgH7a+DOnHtc0sf97vLYFGzw6M607VLyx7OBcHMn0dbwONbZjm7thzbKlf0mDXgJ8Czw16BjrYoxUcALOYWZB/wfP1ulOJZ+9BcAAAAASUVORK5CYII=);
}

.video-player-container .player-wrapper .player-controls .player-controls-content .controls-btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .player-controls-left .controls-btn {
    margin-right: 8px;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .volume-container .controls-btn {
    margin-right: 4px;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .volume-container{
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    transition: all .3s ease-in-out;
}

.video-player-container .player-wrapper .player-controls .player-controls-content .player-controls-left {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.video-player-container .player-wrapper .player-controls .player-progress-bar {
    margin-top: 12px;
    overflow: hidden;
        border-radius: 3px;
        width: 100%;
}

.video-player-container .player-wrapper .player-controls .player-controls-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;

}

.video-player-container .player-wrapper .player-controls {
    width: 100%;
    padding: 12px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .2));
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    transition: all .3s ease-in-out;

}

.video-player-container .player-wrapper .player-controls.player-controls-absolute {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
}

.video-player-container .player-wrapper .player-controls.player-controls-visible {
    opacity: 1;
}

.video-player-container .player-wrapper .player-video .player-center-btn .controls-icon {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
}

.video-player-container .player-wrapper .player-video .player-center-btn .controls-icon.play-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAG3RSTlMAxFHn3JA5IBUHzaqDbUb0z7apnXh2a18tKrKi312IAAAAjElEQVQ4y83USQ6AIAxAUUHEeZ7Q3v+eaozpRmgXTfSvX0KgQPR1TVlnLKgATM2BcKU0A96VloRPScqEEE95GGLdSkCsbwiIjY4Joa2yMMTMwoHeAcB7g6WgdwDgLZ7zMMSKjYAouVAJLY2bkTyewUqO0Cyi12x0kk+hW0Wfa5JKfilKC357ej8P+LcdJ6c6uga48NAAAAAASUVORK5CYII=);
}

.video-player-container .player-wrapper .player-video .player-center-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
    user-select: none;
}

.video-player-container .player-wrapper .player-video .player-video-element {
    width: 100%;
    height: 100%;
}

.video-player-container .player-wrapper .player-video {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.video-player-container .player-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.video-player-container {
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

}

._scoped_1nhp8_1 #tx-video {
    height: 422px !important;
    width: 100%;
}

._scoped_1nhp8_1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    border-radius: 8px;
}

._scoped_wkh1b_1 .label .tips {
    width: 14px;
    height: 14px;
    margin-left: 4px;
    cursor: pointer;
}

.tooltip-trigger {
    max-width: 100%;
    cursor: pointer;
    display: inline;
}

.tooltip-container {
    position: relative;
    display: flex;
}

._scoped_wkh1b_1 .value .text {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
    color: #1a1a1a;
}

._scoped_wkh1b_1 .value {
    display: flex;
    align-items: center;
    font-size: 14px;
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    border-left: 1px solid rgba(0, 0, 0, .06);
    line-height: 18px;
    word-break: break-all;
    padding: 0 24px;

}

._scoped_wkh1b_1 .label .text {
    font-weight: 600;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    box-orient: vertical;
    line-height: 18px;
    position: relative;
}

._scoped_wkh1b_1 .label {
    color: #1a1a1a;
    width: 142px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: #f9fafc;
}

._scoped_wkh1b_1 .item {
    display: flex;
    height: 48px;
    width: 50%;
}

._scoped_wkh1b_1 .exclusive-row {
    width: 100%;
    border-bottom: none;
}

._scoped_wkh1b_1 .item:nth-last-child(2) .label {
    border-bottom: 1px solid rgba(0, 0, 0, .06);
}

._scoped_wkh1b_1 {
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 24px;
}

.detail-shop .btns>div:last-child {
    margin-left: 12px;
}

.detail-shop .shop-btn .text {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
}

.detail-shop .shop-icon {
    width: 14px;
    height: 14.5px;
    display: block;
    margin-right: 6px;
}

.detail-shop .shop-btn .im {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.detail-shop .shop-btn {
    display: flex;
    border: 1px solid #888b94;
    width: 98px;
    height: 36px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
}

.detail-shop .flex {
    display: flex;
    align-items: center;
}

.detail-shop .advantage .line {
    width: 1px;
    height: 24px;
    background: rgba(0, 0, 0, .06);
    margin: 0 16px;
}

.detail-shop .value {
    margin-top: 8px;
    font-size: 14px;
    color: #1a1a1a;
    font-family: JDZhengHeiVRegular2-1;
}

.detail-shop .advantage .text {
    font-size: 14px;
    color: #888b94;
}

.detail-shop .flex {
    display: flex;
    align-items: center;
}

.detail-shop .advantage .item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.detail-shop .advantage {
    display: flex;
    align-items: center;
    flex: 1;
}

.detail-shop .name-tag .center-self-support img {
    height: 100%;
}

.detail-shop .name-tag .center-self-support {
    margin-top: 8px;
    float: left;
    height: 19px;
    margin-right: 4px;
}

.detail-classification .name, .detail-shop .name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.detail-shop .name {
    font-size: 16px;
    font-weight: 600;
    color: #0c0c24;
    cursor: pointer;
    max-width: 240px;
}

.detail-shop .name-tag {
    margin-right: 24px;
}

.detail-shop .logo {
    width: 100%;
    display: block;
}

.detail-shop .border-img {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .06);
    margin-right: 12px;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
}

.detail-shop {
    display: flex;
    align-items: center;
    line-height: 1;
}

.module-title {
    font-size: 20px;
    font-weight: 600;
    padding: 0 0 24px;
    color: #1a1a1a;
}

.expert-selection-root .price .value {
    font-size: 16px;
    line-height: 1;
}

.expert-selection-root .price .unit {
    font-size: 14px;
    line-height: 1;
}

.expert-selection-root .price {
    display: flex;
    color: #fa2c19;
    font-family: JDZhengHeiVRegular2-1;
    letter-spacing: 0px;
    align-items: flex-end;
    font-weight: 500;
}

.expert-selection-root .bottom-block {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 6px;
    left: 0;
    width: 100%;
}

.expert-selection-root .name {
    font-size: 14px;
    color: #1a1a1a;
    line-height: 20px;
    margin-bottom: 12px;
    overflow: hidden;
    cursor: pointer;
    word-break: break-all;
    height: 37px;
}

.expert-selection-root .info {
    flex: 1;
    position: relative;
    margin-left: 6px;
}

.expert-selection-root .img {
    height: 85px;
    cursor: pointer;
    border-radius: 4px;
}

.expert-selection-root .img-area {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, .03);
    background: #fff;
}

.expert-selection-root .item {
    width: 238px;
    height: 116px;
    background: #f9fafc;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    padding: 8px;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
}

.expert-selection-root .list {
    display: flex;
    transition: all .3s linear;
}

.expert-selection-root .scroll {
    flex: 1;
    overflow: hidden;
}

.expert-selection-root .arrow {
    display: block;
    width: 12px;
    height: 12px;
}

.expert-selection-root .left-arrow,
.expert-selection-root .right-arrow {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: .5px solid rgba(0, 0, 0, .06);
    cursor: pointer;
    flex-shrink: 0;
    user-select: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .04);
}

.expert-selection-root .swiper {
    display: flex;
    margin-top: 18px;
}

.expert-selection-root .title {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 600;
    margin-right: 24px;
}

.expert-selection-root {
    padding: 24px 0;
    border-bottom: 1px solid rgb(223, 223, 223);
}

.waist .recommend .add-cart {
    width: 24px;
    height: 24px;
    display: block;
    cursor: pointer;
}

.waist .recommend .bottom-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.waist .recommend .price .value {
    font-size: 16px;
    line-height: 1;
}

.waist .recommend .price .unit {
    font-size: 14px;
    line-height: 1;
}

.waist .recommend .price {
    display: flex;
    color: #fa2c19;
    font-family: JDZhengHeiVRegular2-1;
    letter-spacing: 0px;
    align-items: flex-end;
    font-weight: 500;
}

.waist .recommend .name {
    font-size: 14px;
    color: #1a1a1a;
    line-height: 20px;
    margin-bottom: 12px;
    overflow: hidden;
    cursor: pointer;
    word-break: break-all;
    height: 37px;
}

.waist .recommend .info {
    flex: 1;
    position: relative;
    margin-left: 6px;
}

.waist .recommend .img {
    height: 85px;
    cursor: pointer;
    border-radius: 4px;
}

.waist .recommend .img-area {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, .03);
    background: #fff;
}

.waist .recommend .item {
    width: 238px;
    height: 116px;
    background: #f9fafc;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    padding: 8px;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
}

.waist .recommend .list {
    display: flex;
    transition: all .3s linear;
}

.waist .recommend .scroll {
    flex: 1;
    overflow: hidden;
}

.waist .recommend .arrow {
    display: block;
    width: 12px;
    height: 12px;
}

.waist .recommend .left-arrow,
.waist .recommend .right-arrow {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: .5px solid rgba(0, 0, 0, .06);
    cursor: pointer;
    user-select: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .04);

}

.waist .recommend .swiper {
    display: flex;
}

.waist .recommend .title {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 600;
    margin-right: 24px;
}

.waist .recommend .top-switch {
    display: flex;
    align-items: center;
}

.recommend {
    background-color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-top: 20px;
    min-width: 100%;
}

.waist .tying-sale .list-empty .msg {
    color: #505259;
    font-size: 14px;
    margin-top: 16px;
}

.waist .tying-sale .list-empty .icon {
    width: 100px;
    height: 100px;
    display: block;
}

.waist .tying-sale .list-empty {
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.waist .tying-sale .title {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 600;
    margin-right: 24px;
}

.waist .tying-sale .top-switch {
    display: flex;
    align-items: center;
}

.waist {
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    line-height: 1;
    padding: 24px 0;
}

.answers-root .all-btn .arrow {
    width: 12px;
    height: 12px;
    display: block;
    margin-left: 4px;
}

.answers-root .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 40px;
    font-size: 16px;
    color: #1a1a1a;
    cursor: pointer;
    border-radius: 6px;
    border: .5px solid rgb(136, 139, 148);
    margin: 24px auto 0;
}

.answers-root .reslut .arrow {
    width: 8px;
    height: 8px;
    display: block;
    margin-left: 6px;
}

.answers-root .reslut .has-more {
    margin-top: 16px;
    color: #005ea7;
    cursor: pointer;
    text-indent: 28px;
    display: flex;
    align-items: center;
}

.answers-root .text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.answers-root .term .text {
    color: #1a1a1a;
    line-height: 18px;
    text-indent: 8px;
}

.answers-root .answers-user .headimg {
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
}

.answers-root .answers-user {
    display: flex;
    align-items: center;
    margin: 16px 0 8px;
}

.answers-root .problem .text {
    margin: 0 16px 0 8px;
    color: #1a1a1a;
    font-weight: 500;
}

.answers-root .problem .icon {
    width: 20px;
    height: 20px;
    display: block;
}

.answers-root .problem {
    display: flex;
    align-items: center;
}

.answers-root .item {
    margin-bottom: 24px;
}

.answers-root .list {
    font-size: 14px;
}

.answers-root .answers-title {
    color: #1a1a1a;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 24px;
}

.answers-root {
    line-height: 1;
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    padding: 24px 0;
}

.comment-root .all-btn .arrow {
    width: 12px;
    height: 12px;
    display: block;
    margin-left: 4px;
}

.comment-root .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 40px;
    font-size: 16px;
    color: #1a1a1a;
    cursor: pointer;
    border-radius: 6px;
    border: .5px solid #888b93;
    margin: 24px auto 0;
}

.comment-root .list .video-flag {
    width: 48px;
    height: 48px;
    position: absolute;
}

.comment-root .list .img {
    height: 144px;
    object-fit: cover;
    width: 144px;
    display: block;
}

.comment-root .list .term {
    width: 145px;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, .03);
    cursor: pointer;
    position: relative;
}

.comment-root .list .imgs {
    margin-top: 16px;
    display: flex;
}

.comment-root .text-ellipsis-2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.comment-root .list .info {
    font-size: 14px;
    color: #191919;
    line-height: 18px;
}

.comment-root .list .nickname {
    font-size: 14px;
    color: #828794;
    margin-right: 8px;
}

.comment-root .list .headimg {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .06);
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: 8px;
}

.comment-root .list .comment-user {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.comment-root .list .item {
    margin-bottom: 24px;
}

.comment-root .list {
    margin-top: 8px;
}

.comment-root .tags .count {
    font-family: JDZhengHeiVRegular2-1;
    font-size: 13px
}

.comment-root .tags .item {
    height: 30px;
    padding: 8px;
    background: #fff4e8;
    font-size: 14px;
    color: #b5691a;
    font-weight: 600;
    margin: 0 8px 8px 0;
    border: 1px solid rgba(181, 105, 26, .02);
    border-radius: 4px;
    display: flex;
    align-items: center;
}

.comment-root .tags {
    display: flex;
    flex-wrap: wrap;
    max-height: 72px;
    overflow: hidden;
}

.comment-root .top-block .applause-rate .icon {
    display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    margin-left: 2px;
}

.comment-root .top-block .applause-rate {
    font-size: 14px;
    color: #b5691a;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.comment-root .top-block .comment-title {
    color: #1a1a1a;
    font-weight: 600;
    font-size: 20px;
}

.comment-root .top-block {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.comment-root {
    line-height: 1;
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    padding-bottom: 24px;
}

.detail .tab-con>div {
    padding: 24px 16px;
    background: #fff;
}

.J_contrast_btn .J_contrast .sprite-compare {
    display: inline-block;
    width: 23px;
    height: 13px;
    margin-right: 4px;
    vertical-align: middle;
    background: url(https://img13.360buyimg.com/imagetools/jfs/t1/266535/22/14376/964/678fa2bbF8b318a68/3ab11da200cfbb64.png);
    background-size: 100%;
    margin-top: -2px;
}

.J_contrast_btn .J_contrast {
    font-size: 16px;
    font-weight: 400;
    color: #505259;
}

.J_contrast_btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    line-height: 50px;
    margin-right: 16px;
    padding-right: 16px;
    background: url(https://img13.360buyimg.com/imagetools/jfs/t1/259181/16/14667/489/6790bd3aF60de783b/8ed74ff7b6ef4ed6.png) right center no-repeat;
    background-size: 12px;
}

.ETab .tab-main li.current {
    background-color: #ff0f23;
    color: #fff;
    cursor: default;
}

.ETab .tab-main li {
    display: inline-block;
    cursor: pointer;
}

.ETab .tab-main ul {
    margin-top: -1px;
}

.detail .tab-main.large li.current {
    position: relative;
    background: 0 0;
    color: #ff0f23;
    cursor: default;
}

.detail .tab-main.large li {
    padding: 0;
    margin: 16px 12px 16px 16px;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
}

.detail .tab-main.large {
    border: none;
    border-bottom: 1px solid rgba(194, 196, 204, .6);
    background: 0 0;
}

#detail .tab-main {
    position: relative;
    overflow: visible;
    padding-top: 1px;
}

.detail {
    float: left;
    margin-top: 16px;
    border-radius: 8px;
}

.DetailedPage .detail {
    width: 990px;
}

.yjhxTip .bottom span {
    color: #ff0f23;
}

.yjhxTip .bottom {
    font-size: 14px;
    color: #888b94;
    position: relative;
    font-weight: 400;
    left: 2px;
    top: 200px;
    text-align: center;
    height: 20px;
    line-height: 20px;
}

.yjhxTip #summary-mbuy {
    left: 34px;
    width: 146px;
    height: 146px;
    padding: 16px;
    margin-top: -50px;
    border-top: 1px solid #eee;
}

#summary-mbuy {
    position: absolute;
    top: 114px;
    left: 220px;
    _left: 224px;
    z-index: 5;
    width: 185px;
    height: 165px;
    border: 1px solid #eee;
    border-top: none;
    background: #fff;
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .12);
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .12);
    box-shadow: 0 0 10px rgba(0, 0, 0, .12);
    box-sizing: content-box;
}

.yjhxTip .title {
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    height: 20px;
    line-height: 20px;
}

.yjhxTip .close {
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    right: 15px;
    top: 26px;
    background: url(https://img11.360buyimg.com/imagetools/jfs/t1/268448/37/5719/285/6772b2c4F00fdd140/e0434b79ecd2460c.png);
    background-size: 100%;
    cursor: pointer;
}

.yjhxTip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -300px;
    width: 182px;
    height: 244px;
    background: #fff;
    border: rgba(0, 0, 0, .1019607843);
    border-radius: 8px;
    padding: 24px 32px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .1);
    display: none;
    box-sizing: content-box;
}

.btn-primary,
.btn-special1 {
    background-color: #ffebf1;
    color: #ff0f23;
}

.choose-btns .btn-lg {
    float: right;
    padding: 0;
    cursor: pointer;
    flex: 1 1 auto;
    font-family: PingFang SC;
    line-height: 52px;
    outline: 0;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 600;
    height: 52px;
}

.choose-btns .choose-amount .tips {
    background: rgba(0, 0, 0, .6980392157);
    border-radius: 6px;
    padding: 9px;
    position: absolute;
    top: -40px;
    color: #fff;
}

.choose-btns .choose-amount a.btn-reduce {
    left: 0;
}

.choose-btns .choose-amount .disabled {
    color: #c2c4cc;
    cursor: not-allowed;
}

.choose-btns .choose-amount a {
    border: .5px solid rgba(0, 0, 0, .02);
    display: block;
    width: 32px;
    text-align: center;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    background: #f7f8fc;
    color: #1a1a1a;
    position: absolute;
    right: 0;
    border-radius: 4px;
    font-size: 32px;
    font-weight: 700;
    top: 50%;
    transform: translate3d(0, -50%, 0);
}

.choose-btns .choose-amount .disabled {
    color: #c2c4cc;
    cursor: not-allowed;
}

.choose-btns .choose-amount a.btn-reduce {
    left: 0;
}

.choose-btns .choose-amount input {
    display: block;
    width: 45px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    text-align: center;
    padding: 2px 0;
    left: 32px;
    top: 0px;
    font-weight: 400;
}

.choose-btns .J_choose_app_btn {
    display: flex;
    flex-direction: row;
    position: relative;
}

.choose-btns .choose-amount {
    width: 109px;
    height: 44px;
    position: relative;
    margin-right: 10px;
    float: left;
    margin-top: 6px;
}

.choose-btns {
    height: 76px;
    position: fixed;
    bottom: 0;
    background: #fff;
    padding: 12px;
    border-top: .5px solid #f0f0f0;
    z-index: 21;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
}

.itemInfo-wrap .summary-tips dt {
    width: 80px;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 28px;
    color: #888b93;
}

.itemInfo-wrap .summary-tips {
    display: flex;
    margin-top: 10px;
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .more-jd-item .more-item ul li .title .price {
    margin-right: 0;
    margin-left: 6px;
    font-size: 15px;
    font-family: JDZhengHeiVRegular2-1;
    font-weight: 700;
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .more-jd-item .more-item ul li .title .name {
    display: inline-block;
    max-width: 10em;
    height: 16px;
    vertical-align: -3px;
    overflow: hidden;
    font-size: 15px;
    font-family: "PingFang SC";
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .more-jd-item .more-item {
    top: 29px;
    background-color: #f7f8fc;
    cursor: pointer;
    border: .5px solid #f7f8fc;
    padding: 0 12px;
    min-width: 146px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    margin-bottom: 12px;
    color: #1a1a1a;
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .more-jd-item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6px;
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .yb-item .name {
    font-size: 15px;
    margin-right: 8px;
    vertical-align: middle;
    max-width: 10em;
    width: 60px\9;
    height: 20px;
    overflow: hidden;
    display: inline-block;
    color: #1a1a1a;
    font-family: "PingFang SC";
}

#choose-service\+ .service-type-yb-puls .yb-item-cat .yb-item {
    padding: 0 5px 4px 0;
    margin: 0 7px 2px 0;
    line-height: 20px;
    position: relative;
    font-size: 0;
    display: flex;
    align-items: center;
}

#choose-service\+ .service-type-yb-puls {
    position: relative;
}

#choose-service\+ {
    margin-bottom: 18px;
    line-height: 18px;
}

#choose-serviceyc .service-type-yb .yb-item-cat .more-jd-item .more-item ul li .title .price {
    margin-right: 0;
    margin-left: 6px;
    font-size: 15px;
    font-family: JDZhengHeiVRegular2-1;
    font-weight: 700;
}

#choose-serviceyc .service-type-yb .yb-item-cat .more-jd-item .more-item ul li .title .name {
    display: inline-block;
    max-width: 10em;
    height: 16px;
    overflow: hidden;
    font-size: 15px;
    font-family: "PingFang SC";
}

#choose-serviceyc .service-type-yb .yb-item-cat .more-jd-item .more-item {
    top: 29px;
    background-color: #f7f8fc;
    cursor: pointer;
    border: .5px solid #f7f8fc;
    padding: 0 12px;
    min-width: 146px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    margin-bottom: 12px;
    color: #1a1a1a;
}

#choose-serviceyc .service-type-yb .yb-item-cat .yb-item .after {
    position: absolute;
    left: 0;
    bottom: -1px;
    z-index: -1;
    width: 100%;
    height: 1px;
    content: "";
    background-color: #fff;
}

#choose-serviceyc .service-type-yb .yb-item-cat .yb-item .name-tip {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #888b94;
}

#choose-serviceyc .service-type-yb .yb-item-cat .yb-item .name {
    font-size: 15px;
    margin-right: 8px;
    vertical-align: middle;
    max-width: 10em;
    width: 60px;
    height: 20px;
    overflow: hidden;
    display: inline-block;
    color: #1a1a1a;
    font-family: "PingFang SC";
}

#choose-serviceyc .service-type-yb .yb-item-cat .more-jd-item {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6px;
}

#choose-serviceyc .service-type-yb .yb-item-cat .yb-item {
    padding: 0 5px 4px 0;
    margin: 0 7px 2px 0;
    line-height: 20px;
    position: relative;
    font-size: 0;
    display: flex;
    align-items: center;
}

#choose-serviceyc .service-type-yb .yb-item-cat {
    position: relative;
}

#choose-serviceyc .service-type-yb {
    position: relative;
}

#choose-serviceyc {
    margin-bottom: 18px;
    line-height: 18px;
}

.ns_services_info.services.services--more.expand .arrow {
    transform: rotate(180deg);
}

.ns_services_info.services .arrow {
    position: absolute;
    right: 7px;
    top: 8.5px;
    width: 10px;
    height: 10px;
    background: url(https://img12.360buyimg.com/imagetools/jfs/t1/266539/18/14151/476/678f5c60F3358f69f/ce4c94df51709093.png) no-repeat;
    background-size: 100%;
}

#service-support i {
    color: #1a1a1a;
    font-style: normal;
}

#service-support a,
#service-support span {
    color: #1a1a1a;
    font-size: 14px;
    word-break: keep-all;
}

#service-support a,
#service-support span {
    color: #1a1a1a;
    font-size: 14px;
    word-break: keep-all;
}

.ns_services_info.services {
    position: relative;
    display: inline-block;
    height: 27px;
    line-height: 27px;
    background-color: #fff;
    font-size: 15px;
}

.ns_services_info.services.services--more {
    padding-right: 25px;
}

.J-promise-icon.promise-icon .services {
    top: -6px;
}

.ns_services_info.services.services--more.expand {
    overflow: visible;
    height: auto;
    padding-bottom: 5px;
}

.J-promise-icon.promise-icon {
    position: relative;
}

.summary-stock {
    margin-bottom: 15px;
}

#choose-attr-1 .item a i {
    padding: 7px 12px;
    white-space: normal;
    line-height: 18px;
    flex: 1;
    font-size: 14px;
    font-style: normal;
}

#choose-attr-1 .item a img {
    margin: 2px -2px 0 2px;
    vertical-align: middle;
}

.li .item a {
    border: 1px solid #fff;
    padding: 0 13px;
    display: block;
    white-space: nowrap;
    background: #f7f8fc;
    border-radius: 4px;
    color: #1a1a1a;
}

#choose-attr-1 .item a {
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: flex-start;
}

.li .item {
    float: left;
    color: #666;
    background: #fff;
    margin-right: 7px;
    margin-bottom: 4px;
    position: relative;
}

#choose-attr-1 .item {
    margin-bottom: 8px;
}

.li.p-choose .dt {
    height: 32px;
    display: flex;
    align-items: center;
}

#choose-sttr-1 {
    line-height: 0;
    margin-bottom: 4px
}

#choose-attrs {
    margin-bottom: 16px;
}

#J_LogisticsService .ns_services .logistic-basic {
    display: inline-block;
    position: relative;
    font-size: 14px;
    font-family: "PingFang SC";
    color: #ff0f23;
    height: 15px;
}

.icon-wl {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #ff0f23;
    display: inline-block;
}

.special_services {
    margin-right: 8px;
}

#J_LogisticsService .ns_services {
    position: relative;
    padding-right: 8px;
    margin-right: 8px;
    margin-top: 12px;
}

.ui-area-wrap .ui-area-text-wrap b {
    background: url(//img12.360buyimg.com/imagetools/jfs/t1/257781/37/8855/732/677b8cf0Fc91c4b9f/4b760d70db47e258.png) 50% / contain no-repeat;
    display: block;
    height: 10px;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 3px;
    width: 10px;
    background: no-repeat;
}

.ui-area-wrap .ui-area-text-wrap .ui-area-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ui-area-wrap .ui-area-text-wrap {
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
    cursor: pointer;
    display: flex;
    float: left;
    font-size: 14px;
    height: 16px;
    line-height: 16px;
    min-width: 30px;
    overflow: hidden;
    padding-right: 14px;
    position: relative;
    top: 0;
}

.stock-address .ui-area-wrap .ui-area-text-wrap {
    max-width: 340px;
    line-height: 20px;
    height: 20px;
}

.ui-area-wrap {
    color: #1a1a1a;
    font: 14px / 1 PingFang SC, system-ui, -apple-system;
    height: 15px;
    position: absolute;
    z-index: 3;
}

.stock-address {
    float: left;
    margin-right: 8px;
}

#J_LogisticsService .store {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

#J_LogisticsService {
    z-index: 1;
    margin-bottom: 27px;
    line-height: 15px;
}

.stock-address {
    float: left;
    margin-right: 8px;
}

#J_LogisticsService .store {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

#J_LogisticsService {
    z-index: 1;
    margin-bottom: 27px;
    line-height: 15px;
}

.summary-service b {
    margin-right: 8px;
}

.summary-service span.delivery {
    margin: 8px 8px 8px 0px;
    height: 16px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}

.summary-service {
    color: #1a1a1a;
    font-size: 16px;
    position: relative;
    display: flex;
}

.itemInfo-wrap .summary-price-wrap .summary-price .dd {
    margin: 0;
}

.itemInfo-wrap .dd {
    margin-left: 74px;
}

.itemInfo-wrap .dt {
    float: left;
    color: #888b94;
    width: 72px;
    height: 18px;
    line-height: 18px;
    font-weight: 400;
    overflow: hidden;
    font-size: 14px;
}

#summary-supply .dt {
    line-height: 32px;
    height: 32px;
}

#summary-supply {
    padding-top: 10px;
    margin-bottom: 0;
}

.ranking-content .ranking-item .ranking-arrow {
    width: 8px;
    height: 8px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAABHNCSVQICAgIfAhkiAAAAQ9JREFUKJFt0DFOAkEUxvH/m2wWS+rFYrwB3gDKDVpwArcxWbHRE7CcQBuTTSiEE1gQ3JIjyA3cBkJJSVYzz4ZNWJzXvEzyy5svn3w+RN8KVK3wevha7vGMOW4bVtXq48m2vUjU9QVKlG5Y/bx4UZzvSlHXB9mjmhSjaOz9Ls53pVMZAjglO4dy+limnQTRdwBjJInfNvPT4AAM8s3MKRMA53S2SC97/y7Vs0ijzAhjYF+1wivjQ4FB6zQXh0M7OAfFKBo7JQPgl3483ZWNS8Vj564Gij4Pppt1I9PyvtMl0K9jDZPbfJs1eipSawlY+QCAFKm1KtVKwaoyv8m3yXlOUwOEtQ+cllka54Y+APAHUvdwxBFmhn8AAAAASUVORK5CYII=) 0 0 no-repeat;
    background-size: contain;
    margin-left: 4px;
}

.ranking-content .ranking-item .ranking-name {
    color: #b5691a;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0px;
    font-weight: 700;
}

.ranking-content .ranking-item .ranking-icon {
    width: 13px;
    height: 13px;
    margin-right: 4px;
}

.ranking-content .ranking-item {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    margin-right: 8px;
    background: #fff4e8;
    border-radius: 4px;
}

.ranking-content {
    font-size: 0;
    margin-bottom: 6px;
}

#laxin-new-container>.li .arrow {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    z-index: 1;
    background: url(https://img12.360buyimg.com/imagetools/jfs/t1/266539/18/14151/476/678f5c60F3358f69f/ce4c94df51709093.png) no-repeat;
    background-size: 10px 10px;
    background-position: center;
    background-color: #fff;
}

#laxin-new-container>.li .ddnew li img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
}

#laxin-new-container>.li .ddnew li {
    display: inline-flex;
    width: max-content;
    height: 32px;
    background: #F2F4FA url(https://img13.360buyimg.com/imagetools/jfs/t1/259181/16/14667/489/6790bd3aF60de783b/8ed74ff7b6ef4ed6.png) no-repeat;
    padding: 8px 26px 8px 8px;
    background-position: right 8px center;
    background-size: 10px;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #505259;
    margin-right: 4px;
    border-radius: 4px;
    -webkit-box-align: center;
}

#laxin-new-container>.li .ddnew {
    width: max-content;
    display: inline-flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;
}

#laxin-new-container>.li {
    position: static;
    min-height: 32px;
    margin-bottom: 3px;
    line-height: 32px;
    display: inline-block;
}

#laxin-new-container {
    min-height: 32px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
}

#sx-discount .again-shareds .arrow-icon {
    margin-top: 10px;
}

#sx-discount .again-shareds .floor-item {
    padding: 8px;
    background: #ffebef;
}

#sx-discount .again-shareds .floor-list {
    -webkit-box-flex: 1;
    flex: 1;
    height: 30px;
    overflow: hidden;
    margin-left: 6px;
}

#sx-discount .again-shareds {
    height: 30px;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 12px;
}

#sx-discount .arrow-icon {
    width: 10px;
    height: 10px;
    position: absolute;
    margin-top: 4px;
    cursor: pointer;
    display: inline-block;
}

#sx-discount .floor-item {
    float: left;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
    color: #ff0f23;
    font-size: 14px;
    font-weight: 500;
    font-family: JDZhengHeiVRegular2-1;
    line-height: 1;
    white-space: nowrap;
}

#sx-discount .shareds .floor-list {
    -webkit-box-flex: 1;
    flex: 1;
    height: 14px;
    overflow: hidden;
    margin-left: 6px;
}

#sx-discount .shareds {
    height: 14px;
    overflow: hidden;
    display: flex;
    align-content: center;
}

#sx-discount {
    position: sticky;
    z-index: 2;
    background: #fff;
    padding: 2px 0 12px;
    font-size: 14px;
    line-height: 14px;
    color: #ff0f23;
}

.itemInfo-wrap .summary-price-wrap .summary-price .commentNotice .summary-info .notice i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    vertical-align: middle;
    background: url(https://img11.360buyimg.com/imagetools/jfs/t1/252894/14/10346/442/677cc340Fa9d500a7/3935ddf0b0291c48.png);
    background-size: 100%;
    margin-top: -2px;
}

.itemInfo-wrap .summary-price-wrap .summary-price .commentNotice .summary-info .notice {
    color: #505259;
    border-left: .5px solid rgba(0, 0, 0, .1215686275);
    padding-left: 8px;
    margin-left: 8px;
}

.f1 {
    color: #888b94;
    float: left;
}

.summary-info {
    font-size: 14px;
    float: right;
}

.itemInfo-wrap .summary-price-wrap .summary-price .commentNotice {
    height: 22px;
    line-height: 22px;
    float: right;
    text-align: left;
}

.itemInfo-wrap .summary-price-wrap .summary-price .jdPrice .price {
    font-size: 14px;
    font-weight: 600;
    font-family: JDZhengHeiVRegular2-1;
    margin-right: 3px;
    color: #888b94;
}

.itemInfo-wrap .summary-price-wrap .summary-price .p-price.jdPrice span {
    font-weight: 600;
    font-size: 14px;
}

.itemInfo-wrap .summary-price-wrap .summary-price .p-price.jdPrice span:first-child {
    font-family: JDZhengHeiVRegular2-1;
    transform: none;
}

.itemInfo-wrap .summary-price-wrap .summary-price .jdPrice {
    color: #888b94;
    font-size: 14px;
    margin-right: 0;
    vertical-align: middle;
}

.itemInfo-wrap .summary-price-wrap .summary-price .finalPrice .priceContentText {
    display: inline-block;
    background: #ff0f23;
    color: #fff;
    padding: 4px;
    border-radius: 2px;
    font-size: 13px;
    line-height: 14px;
    height: 22px;
    margin-left: 8px;
    margin-right: 6px;
    vertical-align: middle;
}

.itemInfo-wrap .summary-price-wrap .summary-price .finalPrice .price {
    font-family: JDZhengHeiVBold2;
    font-size: 28px;
    vertical-align: middle;
    display: inline-block;
}

.itemInfo-wrap .summary-price-wrap .summary-price .finalPrice .symbol {
    font-size: 20px;
    font-weight: 600;
    font-family: JDZhengHeiVHeavy2;
    vertical-align: bottom;
    display: inline-block;
}

.itemInfo-wrap .summary-price-wrap .summary-price .finalPrice {
    color: #ff0f23;
    font-weight: 600;
    vertical-align: middle;
}

.itemInfo-wrap .summary-price-wrap .summary-price {
    position: relative;
}

.itemInfo-wrap .summary-price-wrap {
    top: 100px;
    position: sticky;
    z-index: 10;
    background: #fff;
    padding-top: 19px;
    padding-bottom: 12px;
}

.sku-title .follow-btn .star-icon {
    width: 16px;
    height: 16px;
    background: url(https://img11.360buyimg.com/imagetools/jfs/t1/253639/6/4849/689/676d54e9Fb62dabdb/40c829a236acc4a0.png);
    background-size: 100%;
    flex-shrink: 0;
}

.sku-title .follow-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 14px;
    color: #505259;
    cursor: pointer;
    margin-top: 6px;
    font-weight: 400;
    height: 19px;
    white-space: nowrap;
    flex-shrink: 0;
    width: 56px;
    padding: 0 8px;
    margin-left: 8px;
    box-sizing: content-box;
}

.sku-title .sku-title-text .sku-title-icon-box .sku-type-icon {
    margin-right: 5px;
    height: 20px;
    display: block;
}

.sku-title .sku-title-text .sku-title-icon-box {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    float: left;
    height: 28px;
}

.sku-title .sku-title-text {
    max-height: 56px;
    height: 56px;
    line-height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    width: 89%;
    transition: all .2s ease-in-out;
    overflow: hidden;
}

.sku-title {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    margin-bottom: 6.5px;
    color: #000;
}

.product-intro .itemInfo-wrap .infomation {
    display: flex;
    flex-direction: column;
    padding: 0 16px 95px;
    background: #fff;
    border-radius: 8px;
    margin-top: -8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}

.common-plan .purchase-tab {
    width: 219px;
    text-align: center;
    margin: 0;
    cursor: pointer;
    float: left;
    color: #1a1a1a;
    font-size: 20px;
    line-height: 48px;
}

.common-plan .curr {
    color: #ff0f23;
    display: block;
    height: 48px;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
}

.common-plan .curr-right,
.common-plan .curr-right-one {
    background-image: url(//storage.jd.com/retail-mall/item2025-3/pc/unite/3.0.44-prod0114/components/default-soa/custom/i/right-img.png);
    background-repeat: no-repeat;
}

.common-plan .curr-right-one {
    padding-left: 15px;
}

.common-plan .curr-left {
    background-image: url(//storage.jd.com/retail-mall/item2025-3/pc/unite/3.0.44-prod0114/components/default-soa/custom/i/left-img.png);
    width: 218px;
}

.common-plan {
    position: sticky;
    background: linear-gradient(90deg, #F2F3F7 23.94%, #FFF 81.42%);
    border-top: 1px solid #fff;
    display: flex;
    height: 48px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    z-index: 10;
    margin-top: -8px;
    top: 52px;
}

.activity-banner .pay-icon-left {
    margin-top: -4px;
    float: left;
}

.activity-banner .pay-icon-right .pay-right-text {
    color: #fff;
    font-size: 14px;
    font-family: JDZhengHeiVRegular2-1,
        PingFang SC,
        microsoft yahei;
}

.activity-banner .pay-icon-right {
    float: right;
    display: flex;
    align-items: center;
    margin-top: -4px;
}

.activity-banner {
    height: 60px;
    line-height: 60px;
    padding: 0 24px;
    overflow: hidden;
    zoom: 1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

#common_banner {
    position: sticky;
    z-index: 20;
    clip-path: path("M 8 0 H 593 A 0 8 0 0 0 593 8 V 60 A 8 8 0 0 0 583 52 H 8 A 8 8 0 0 0 0 60 V 8 A 8 8 0 0 1 8 0 Z");
}

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
    overflow: hidden;
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

.product-intro .preview-wrap {
    float: left;
    width: 990px;
}

._search_main_1pcds_1 ._hotword_1pcds_226>i {
    width: 1px;
    height: 8px;
    background: rgba(0, 0, 0, .06);
    margin: 0 12px;
}

._search_main_1pcds_1 ._hotword_1pcds_226>span {
    cursor: pointer;
    position: relative;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

._search_main_1pcds_1 ._hotword_1pcds_226 {
    height: 20px;
    margin-top: 10px;
    color: #505259;
    font-size: 14px;
    overflow: hidden;
    text-align: right;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 564px;
}

._search_main_1pcds_1 ._search_box_1pcds_7 ._search_btn_web_1pcds_196,
._search_main_1pcds_1 ._search_box_1pcds_7 ._search_btn_shop_1pcds_197 {
    position: absolute;
    top: 2px;
    width: 96px;
    height: 34px;
    background: #ffebf1;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    z-index: 2;
    font-family: PingFang SC;
    outline: none;
}

._search_main_1pcds_1 ._search_box_1pcds_7 ._search_btn_web_1pcds_196 {
    right: 2px;
    border-radius: 6px;
    color: #fff;
    background: #ff0f23;
}

._search_main_1pcds_1 ._search_box_1pcds_7 ._search_btn_shop_1pcds_197 {
    right: 101px;
    border-radius: 6px;
    color: #ff0f23;
}

._search_main_1pcds_1 ._search_box_1pcds_7 ._search_input_1pcds_74 {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 44px 0 16px;
    width: 300px;
    height: 32px;
    border: 1px solid transparent;
    border-radius: 8px;
    list-style: 32px;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    margin-top: 3px;
}

._search_box_1pcds_7 {
    position: relative;
    width: 564px;
    height: 40px;
    border: 1px solid #ff0f23;
    border-radius: 8px;
    background-color: #fff;
    transition: width .5s;
}

._search_main_1pcds_1 {
    width: 594px;
}

._scoped_11goq_1 .top-btns>div:nth-child(2) {
    margin-left: 12px;
}

._scoped_11goq_1 .top-shop-btn .top-text {
    font-size: 12px;
    color: #1a1a1a;
}

._scoped_11goq_1 .top-shop-icon {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    vertical-align: middle;
}

._scoped_11goq_1 .top-shop-btn {
    display: flex;
    width: 80px;
    height: 28px;
    border: .5px solid #c2c4cc;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    color: #c2c4cc;
}

._scoped_11goq_1 .top-flex {
    display: flex;
    align-items: center;
    line-height: 1;
}

._scoped_11goq_1 .top-btns {
    margin-top: 8px;
}

._scoped_11goq_1 .top-name {
    font-size: 16px;
    font-weight: 600;
    color: #0c0c24;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
    margin-right: 4px;
}

._scoped_11goq_1 .top-self-support-new img {
    height: 100%;

}

._scoped_11goq_1 .top-self-support-new {
    margin-right: 4px;
    height: 17px;
}

._scoped_11goq_1 .top-name-tag {
    margin-right: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

._scoped_11goq_1 .top-logo {
    width: 100%;
    display: block;
    vertical-align: middle;
}

.top-border-img {
    width: 58px;
    height: 58px;
    border: 4px;
    border: .5px solid rgba(0, 0, 0, .06);
    box-sizing: border-box;
    cursor: pointer;
    background: #fff;
    margin-right: 8px;
}

._scoped_11goq_1 {
    display: flex;
    align-content: center;
    line-height: 1;
}

._scoped_eidqb_1 {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

#searchBar-root {
    height: 68px;
}

#searchBar {
    height: 68px;
    background-image: url(https://img13.360buyimg.com/imagetools/jfs/t1/242126/22/32425/1508/68f0aff6Fbfdd80f2/cb588179c09eb844.png);
}

.ellipsis {
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.crumb a {
    color: #505259;
}

.crumb .item {
    color: #505259;
    float: left;
}

.crumb .sep {
    font-family: simsun;
    padding: 0 10px;
}

.crumb {
    height: 14px;
    line-height: 14px;
    padding: 16px 0 20px;
    position: relative;
    overflow: hidden;
    box-sizing: unset;
}

/* 默认样式 */
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

.crumb-wrap {
    background: #f6f7fb;
    margin-top: -24px;
    position: relative;
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
    /* padding-left: 6px; */
    padding-right: 6px;
    position: relative;
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
    font-family: PingFang SC, Source Han Sans CN, Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, 宋体, sans-serif;
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