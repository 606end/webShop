<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 22:24:47
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-27 23:11:10
 * @FilePath: \app\src\detailedPage\pages\ShopHeader.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
  <div id="searchBar" style="background: none;">
    <div class="_scoped_eidqb_1" id="searchBar-root">
      <div class="_scoped_11goq_1">
        <!-- 左店铺logo -->
        <div class="top-border-img">
          <img class="top-logo" src="https://img30.360buyimg.com/popshop/jfs/t1/183438/17/11901/17502/60dbd5ffE777e7da7/4bb55b277ebe8344.jpg">
        </div>
        <!-- 右店铺名称及信息 -->
        <div class="top-shop-info">
          <div class="top-name-tag">
            <div class="top-self-support-new"><img src="//img11.360buyimg.com/img/jfs/t1/273656/23/29811/731/681b1e9aF9ce3b5bc/6102ba8228118daf.png.avif"></div>
            <div class="top-name" title="飞利浦（PHILIPS ）热水器京东自营旗舰店">飞利浦（PHILIPS ）热水器京东自营旗舰店</div>
          </div>

          <div class="top-flex top-btns">
            <div class="top-customer-service top-shop-btn">
              <img alt="" class="top-shop-icon" src="https://img13.360buyimg.com/imagetools/jfs/t1/275881/32/10014/609/67e39713F50c8410d/d3fd68c5d0332d21.png">
              <div class="top-text">关注店铺</div>
            </div>

            <div class="top-stroll top-shop-btn">
              <img class="top-shop-icon" src="https://img12.360buyimg.com/imagetools/jfs/t1/272004/3/10316/603/67e3970eF48112794/73b06855fc070f75.png">
              <div class="top-text">联系客服</div>
            </div>
          </div>
        </div>
      </div>

      <div class="_search_main_1pcds_1">
        <div class="_search_box_1pcds_7 ">
          <input class="_search_input_1pcds_74" autocomplete="off" aria-label="搜索" type="text" value="飞利浦电热水龙头">
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
</template>

<script>
export default {
  name: 'ShopHeader'
}
</script>

<style scoped>
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

</style>