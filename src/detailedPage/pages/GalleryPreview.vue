<!--
 * @Author: 606end 90855326+606end@users.noreply.github.com
 * @Date: 2026-01-27 21:50:38
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-27 23:45:23
 * @FilePath: \app\src\detailedPage\pages\GalleryPreview.vue
 * @Description: 
 * 
 * Copyright (c) 2026 by Sea.H.J,, All Rights Reserved. 
-->
<template>
    <div class="main-image">
      <div class="_gallery_1azii_1">
        <div class="image-carousel vertical thumbnails">
          <div class="image-carousel-content">
            <div class="image-carousel-track vertical" style="transform: translateY(0px); transition: transform 0.3s ease-in-out;">
              <div class="item ">
                <img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif">
                <img class="thumbnails-play-icon" src="https://img12.360buyimg.com/imagetools/jfs/t1/268427/6/7334/5868/677778bfFdfcd1873/09c35cebfaf51498.png">
              </div>
              <div class="item current"><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/384260/8/16073/94122/696613d4F16e0e29d/b4483b5af080d7ea.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/341831/14/26350/33189/69131b57Ff6bb1825/3da0a0eb9f693eb6.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/385211/32/1327/121983/69555800Ffb2c0040/16e65c0322df60ca.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/354586/1/10557/45480/69131b58F64a74399/7ba5102f7c2a631a.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/242430/4/35199/146708/69131b5cFb925cc95/4029ad3005ea13ec.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/345395/1/25550/55113/69131b5bFc9b981e0/f365c7be423ed7d2.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/344726/34/27417/106348/69131b5aF77879590/7b13ccb54e9550fa.jpg.avif"></div>
              <div class="item "><img class="image" src="https://img10.360buyimg.com/pcpubliccms/s228x228_jfs/t1/348881/33/25654/81991/69131b59Fcf2d5333/d97fa7fc61d4893d.jpg.avif"></div>
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
                <img class="zoom-img" id="spec-img" src="https://img10.360buyimg.com/pcpubliccms/s1440x1440_jfs/t1/382110/3/17023/22145/695f5cd1F35315d8f/84b6bd84db198e02.jpg.avif">
              </div>
            </div>
            <div class="attribute"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GalleryPreview'
}
</script>

<style scoped>
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
</style>