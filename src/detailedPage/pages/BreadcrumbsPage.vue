<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 10:37:40
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-27 23:08:40
 * @FilePath: \app\src\detailedPage\pages\BreadcrumbsPage.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
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
</template>

<script>
export default {
  name: 'BreadcrumbsPage'
}
</script>

<style scoped>
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

.crumb-wrap {
  background: #f6f7fb;
  margin-top: -24px;
  position: relative;
}

</style>