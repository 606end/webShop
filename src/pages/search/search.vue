<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-03 16:20:42
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-01-11 12:59:11
 * @FilePath: \app\src\pages\search\search.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="search_router">
    <div id="content">
      <!--XXX:是否将home中的floorSection组件设置为全局组件引入??先直接引入，避免过度设计 -->
      <div class=" centerBar">

        <div class="filter-condition">
          <div class="top-bar ">
            <div class="top-bar-left breadcrumb">
              <div v-for="(item, index) in breadcrumbInfo" :key="getItemKey(item, index)" :class="['breadcrumb-items',
                { 'active': index === breadcrumbInfo.length - 1 }]" @click="handleBreadcrumbClick(item, index)">
                <span v-if="index > 0 && item.data.name" class="breadcrumb-delimiter">/</span>
                <template v-if="index === breadcrumbInfo.length - 1">
                  <span class="breadcrumb-item" :class="{ 'current': index != 0 && index === breadcrumbInfo.length - 1}">{{ item.data.name }}</span>
                </template>
                <template v-else>
                  <a :href="generateUrl(item, index)" class="breadcrumb-link">
                    <span class="breadcrumb-item">{{ item.data.name }}</span>
                  </a>
                </template>
              </div>
            </div>
            <div class="top-bar-right">
              <div class="tbr-title, tbr-title_1">配送至</div>
              <div class="text-warp">
                <div class="tbr-title tbr-title_2">陕西西安市灞桥区灞桥街道</div>
                <b></b>
              </div>
            </div>
          </div>

          <div class="brand-filter">
            <div class="first-line">
              <div class="all-filter">
                <div class="filter-inner">
                  <div class="filter-type-label">品牌</div>
                  <div class="filter-type-values">
                    <div class="values-items"><span class="values-items-inner">Apple</span></div>
                    <div class="values-items"><span class="values-items-inner">联想（lenovo）</span></div>
                    <div class="values-items"><span class="values-items-inner">华为（HUAWEI）</span></div>
                    <div class="values-items"><span class="values-items-inner">小米（MI）</span></div>
                    <div class="values-items"><span class="values-items-inner">机械革命（MECHREVO）</span></div>
                    <div class="values-items"><span class="values-items-inner">华硕（ASUS）</span></div>
                    <div class="values-items"><span class="values-items-inner">闪魔</span></div>
                    <div class="values-items"><span class="values-items-inner">荣耀（HONOR）</span></div>
                    <div class="values-items"><span class="values-items-inner">惠普（HP）</span></div>
                    <div class="values-items"><span class="values-items-inner">ThinkPad</span></div>
                  </div>
                </div>
                <div class="filter-more">
                  <div class="more-txt">
                    <span style="margin-right: 2px;">更多</span>
                    <img
                      src="https://img11.360buyimg.com/img/jfs/t1/255446/36/23357/502/67b6fa83Fb1b9ca03/8eb8645cb942affc.png"
                      style="width: 8px; height: 8px;">
                  </div>
                </div>
              </div>
              <div class="expand-btn">
                <div class="expand-btn-wrapper">
                  <div class="external-divider">
                    <div class="divider"></div>
                  </div>
                  <div class="filter-select filter-select-h23">
                    <span>展开筛选</span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAeVJREFUSIntkT1oU2EUhp9zm9zSZrCDHRyk6CTo0MnBJdChQy0IIggiBFyCNbkQaEJTl4tgkt7GBJukkkFpQRDFDoIULFLo4N7RtTg4VFCEFOI133EoluQa09pukmf83vO+5+eDPv89UnhUu4LR54I2jOJmM8m1kwQuFGvXFX2AYcgIty2MrgLnFLkkIq8XFqvOccMLXiWpqmsoFxHOW/DUAqS9SOFxoVjJ/3N4sZJHZCnwbEvOq05ZwhsgFGi02mx8ueO6rukV7LquNRg5/UwgFpCMqlwVAM9bjhox68BwRxPhbcQ2NxzHaXYLL5VKQ01jvxJlOiDtKeZaNu28PziP59XGjegGMNpeKfDBDvnTqVTqW/t7uVweabbC71AuB8J3LZXJTObeNsH7F4vVMV/ZEhgLmD62QuGJ+6n4Z4CH5fqZgZ/+JnChY2PYCQvR2dnETtuAneRyS6NW2NoAxgObfDIDMgFgtXRT4WzAum18Mzk/7+wGfH/iuvXhwciPdUGi3fQgim41G/aU68b3glrXBgD1ej389bu/AtzqFS6qL0ZO2bF4PO531Q+brrBYXQbu/kV+MpdOzPTyW4c1mEsnZlBN7//hAYpq+rBwjrLBb/Je5aaIrOxfRWPZTPLlUb19+pyMX1ZorSYoy+D4AAAAAElFTkSuQmCC"
                      style="margin-left: 6px; width: 8px; height: 8px;">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style=" border-bottom: 1px solid rgba(0, 0, 0, .1215686275); margin: 8px 0 12px;"></div>

          <div class="box-bar">
            <div class="box-bar-left">
              <div class="sort-bar">
                <div class="sort-bar-area">
                  <div class="sort-item">
                    <div class="sort-wrap">
                      <span>综合</span>
                      &nbsp;
                      <img style="width: 8px; height: 8px;"
                        src="https://img14.360buyimg.com/img/jfs/t1/266655/17/22014/558/67b6ac9eF35812b66/d9815dcfaaa3da77.png">
                    </div>
                  </div>
                  <div class="sort-item sort-item-2s">
                    <div class="sort-wrap">
                      <span>销量</span>
                      &nbsp;
                      <img style="width: 14px; height: 14px;"
                        src="https://img14.360buyimg.com/img/jfs/t1/263812/1/22251/536/67b6ac6dFc3b8ee88/7f009b5b5d60b2a5.png">
                    </div>
                  </div>
                  <div class="sort-item sort-item-2s">
                    <div class="sort-wrap">
                      <span>价格</span>
                      &nbsp;
                      <img style="width: 14px; height: 14px;"
                        src="https://img12.360buyimg.com/img/jfs/t1/250551/35/33574/689/67b6fe9dF7b4a4ae8/81f7897adff0fc6e.png">
                    </div>
                  </div>
                </div>
                <div class="sort-bar-area sort-bar-r">
                  <div class="price-item">
                    <div class="price-wrap">
                      <span>价格区间</span>
                      &nbsp;
                      <img style="width: 8px; height: 8px;"
                        src="https://img14.360buyimg.com/img/jfs/t1/266655/17/22014/558/67b6ac9eF35812b66/d9815dcfaaa3da77.png">
                    </div>
                  </div>
                </div>
              </div>
              <div class="external-divider" style=" margin: 8px 0 0 16px;">
                <div class="divider"></div>
              </div>
              <div class="special">
                <div class="box-bar-middle">
                  <div class="checkbox">
                    <div class="checkbox-item"><span>京东物流</span></div>
                    <div class="checkbox-item"><span style="width: 54px;"><img
                          src="https://img13.360buyimg.com/img/jfs/t1/320737/31/3332/927/68314a5fFeeb3c15e/6953089c725a6138.png"
                          style=" height: 13px;"></span></div>
                    <div class="checkbox-item"><span style="width: 63px;"><img
                          src="https://img20.360buyimg.com/img/jfs/t1/321248/28/2958/1523/68314867Fbe0bda46/feded3e631846251.png"
                          style=" height: 13px;"></span></div>
                    <div class="checkbox-item"><span style="display: flex;align-items: center;">自营/旗舰
                        <img style="width: 8px; height: 8px; margin-left: 6px;"
                          src="https://img14.360buyimg.com/img/jfs/t1/266655/17/22014/558/67b6ac9eF35812b66/d9815dcfaaa3da77.png">
                      </span></div>
                    <div class="checkbox-item"><span>新品</span></div>
                    <div class="checkbox-item"><span>PLUS95折</span></div>
                    <div class="checkbox-item"><span>拍拍二手</span></div>
                    <div class="checkbox-item"><span style="display: flex;align-items: center;">品牌
                        <img style="width: 8px; height: 8px; margin-left: 6px;"
                          src="https://img14.360buyimg.com/img/jfs/t1/266655/17/22014/558/67b6ac9eF35812b66/d9815dcfaaa3da77.png">
                      </span></div>
                    <div class="checkbox-item"><span>京东国际</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-bar-right">
              <div class="query-result">
                <span class="query-result-txt"><img
                    src="https://img14.360buyimg.com/img/jfs/t1/262275/35/22113/601/67b6f8f6F20f8f976/fc8f3f0241ecf978.png"
                    style="width: 8px; height: 8px;"></span>
                <span style=" color: #ff0f23; font-size: 16px;">1</span>
                <span style=" font-size: 16px;">/</span>
                <span style=" font-size: 16px;">100</span>
                <span class="query-result-txt"><img
                    src="https://img11.360buyimg.com/img/jfs/t1/267605/22/22334/624/67b6fa10F7839d61c/a86e970e1dd1b1f3.png"
                    style="width: 8px; height: 8px;"></span>
              </div>
              <div class="divider-box ">
                <div class="divider"></div>
              </div>
              <div class="box-more">
                <span>更多</span>
                <img style=" width: 8px; height: 8px; margin-left: 4px;"
                  src="https://img11.360buyimg.com/img/jfs/t1/255446/36/23357/502/67b6fa83Fb1b9ca03/8eb8645cb942affc.png">
              </div>
            </div>
          </div>
        </div>
        <!-- TODO：发送请求返回的数据要传给子组件FloorSection -->
        <FloorSection :searchList=dataType />
      </div>
    </div>
  </div>
</template>

<script>
import FloorSection from '../home/FloorSection/FloorSection.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'searchPage',
  props: ['keyword', 'k',],
  components: {
    FloorSection
  },
  computed: {
    ...mapState('searchModule', ['searchList', 'searchKeyword', 'categoryList', 'categoryInfos']),

    dataType() {
      if (this.$route.params.categoryName) {
        return this.categoryList
      } else if (this.$route.params.keyword || !this.$route.params.keyword) {
        return this.searchList
      } else {
        return ''
      }
    },

    breadcrumbInfo() {
      const baseItems = Array.isArray(this.categoryInfos) ? [...this.categoryInfos] : [];

      // if (this.resetBaseItem && baseItems.length > 1) {
      //   baseItems.splice(0);
      // }

      if (this.$route.params.keyword) {
        baseItems.unshift({
          data: {
            name: `搜索：${this.searchKeyword || this.$route.params.keyword}`
          }
        })
      }
      // }else if (this.$route.params.categoryName) {
      //   baseItems.unshift({
      //     data: {
      //       name: this.$route.params.categoryName
      //     }
      //   })
      // }
      else {
        baseItems.unshift({
          data: {
            name: '全部结果'
          }
        })
      }

      return baseItems
      // 在计算属性中使用push()方法，返回的是一个数字，而且也不应该在计算属性中直接修改原数组
      // 我在categoryInfos直接添加了data
      // TODO:将来这里可以根据路由信息判断，动态添加面包屑第一位的内容
    },
    // 或者可以直接从路由获取关键词
    // routeKeyword() {
    //   return this.$route.params.keyword
    // }
  },
  data() {
    return {
      loading: false,
      resetBaseItem: false
    };
  },

  watch: {
    // 监听路由变化，当关键词变化时重新搜索
    '$route.params.keyword': {
      immediate: true,// 立即执行一次
      handler(newKeyword) {
        if (newKeyword) {
          this.performSearch(newKeyword)
        }
      }
    },
    '$route.query': {
      deep: true,
      immediate: true,
      async handler(newQuery) {
        if (newQuery.level) {
          await this.performCategory(newQuery)
        } else {
          await this.performSearch(newQuery.keyword || '')
        }
      }
    },
  },

  methods: {
    ...mapActions('searchModule', ['userSearch', 'categoryProduct']),
    // searchModule是Vuex模块的命名空间名称，告诉Vuex从哪个模块获取state和actions，防止命名冲突
    async performSearch(keyword) {
      // if (this.$route.query.level) {
      //   const category = this.$route.query
      //   await this.categoryProduct(category)
      // }

      try {
        console.log('userSearch搜索参数', keyword)
        this.loading = true;
        const searchParams = {
          keyword: keyword,
          page: 1,
          limit: 20
        };
        console.log('userSearch整理后的参数', searchParams)
        await this.userSearch(searchParams);
      } catch (error) {
        console.log('搜索失败：', error)
      } finally {
        this.loading = false
      }
    },
    async performCategory(query) {
      try {
        console.log('performCategory分类搜索参数：', query);
        const queryDta = {
          level: query.level,
          dataClassification: query.dataClassification,
          keyword: query.keyword
        }
        console.log('performCategory整理后的参数：', queryDta);
        await this.categoryProduct(queryDta)
      } catch (error) {
        console.log('搜索失败：', error)
      }

    },
    getItemKey(item, index) {
      return `${item.level}-${item.id || index}`;
    },

    handleBreadcrumbClick(item, index) {
      if (index === this.breadcrumbInfo.length - 1) return;
      const clickDetails = index === 0
        ? {
          keyword: '',
          enc: 'utf-8',
          spm: 'a.0.0',
          wq: '',
          pvid: 'e853c1ed79e94a5e8137cbcdec1f6feb'
        }
        : {
          level: item.type,
          dataClassification: item.data.id,
          categoryName: item.data.name
        };

      if (index === 0) {
        this.$store.commit('searchModule/RESET_CATEGORY_INFOS', []);
        // 这里需要对面包屑数据进行重置，避免在点击全部商品后 数据还留存，这里使用Vuex进行修改，也可使用watch进行变化监听，在当前函数内部进行改变watch修改，还可以通过SetTimeOut延迟修改。
        // 使用数据修改进行的判断的条件 我放在了computed中
        // const clickDetails = {
        //   keyword: '',
        //   enc: 'utf-8',
        //   spm: 'a.0.0',
        //   wq: '',
        //   pvid: 'e853c1ed79e94a5e8137cbcdec1f6feb'
        // }
        this.$router.replace({ name: 'searchPage', params: {}, query: { ...clickDetails } })// 清除所有 params
        // this.performSearch('');// 执行空搜索
        console.log(this.$route)
      } else {
        // const clickDetails = {
        //   level: item.type,
        //   dataClassification: item.data.id,
        //   keyword: item.data.name
        // }
        // this.performCategory(clickDetails)
        this.$router.replace({ name: 'searchPage', params: {categoryName: clickDetails.categoryName}, query: { ...clickDetails } })
      }

    },

    // 适用a标签的动态链接生成函数
    generateUrl(item, index) {
      if (index > 0) {
        const categoryName = encodeURIComponent(item.data.name || '');
        const type = item.type || '';
        const id = item.data.id || '';
        return `http://localhost:8080/#/Product/Search?categoryName=${categoryName}&level=${type}&dataClassification=${id}`
      } else if (index === 0) {
        // $route.params：是只读的，不能直接修改
        return `http://localhost:8080/#/Product/Search?keyword=&enc=utf-8&spm=a.0.0&wq=&pvid=e853c1ed79e94a5e8137cbcdec1f6feb`
      } else {
        return
      }
    }

  },
  mounted() {
    // 页面加载时也执行搜索
    const keyword = this.$route.params.keyword;
    const category = this.$route.query
    // 优先处理分类搜索
    if (category.level) {
      this.performCategory(category)
    } else {
      // 只有当没有分类参数时才执行关键词搜索
      this.performSearch(keyword);
    }
  }
}
</script>

<style scoped>
.sort-item-2s {
  margin-left: 12px;
}

.sort-bar-r {
  margin-left: 12px;
}

.price-item {
  display: flex;
  height: 32px;
  padding: 0 16px;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
}

.price-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
}

.box-more {
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #ff0f23;
  justify-content: center;
  align-items: center;
}

.divider-1 {
  height: 100%;
}

.divider-box {
  height: 12px;
  padding: 0 6px 0 10px;
}

.query-result-txt {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.query-result {
  display: flex;
  align-items: center;
  line-height: 1;
  color: #505259;
}

.box-bar-right {
  height: 32px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.checkbox-item {
  height: 32px;
  margin: 0 12px 0 0;
  padding: 0 16px;
  font-size: 14px;
  color: #1a1a1a;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.checkbox {
  display: flex;
}

.special {
  padding: 0 16px;
}

.sort-wrap {
  display: flex;
  align-items: center;
  /* 选择按钮后的动态样式 */
  /* background-color: #ffebf1; */
  /* color: #ff0f23; */
  /* border: 1px solid #ff0f23; */
  height: 32px;
  padding-right: 16px;
  padding-left: 16px;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  box-sizing: border-box;
}

.sort-bar-area {
  display: flex;
}

.sort-bar {
  display: flex;
}

.top-bar-right {
  display: flex;
}

.box-bar-left {
  display: flex;
  align-items: flex-start;
  height: 32px;
}

.box-bar {
  display: flex;
  justify-content: space-between;
}

.more-txt {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
}

.filter-more {
  width: 64px;
  font-size: 14px;
  color: #ff0f23;
}

.values-items-inner {
  font-size: 14px;
  line-height: 1;
  color: #505259;
}

.values-items {
  height: 28px;
  padding: 0 16px;
  display: flex;
  align-items: center;
}

.filter-type-label {
  width: 84px;
  margin-top: 7px;
  margin-right: 24px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.filter-select-h23 {
  height: 32px;
}

.filter-select {
  padding-left: 16px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 8px;
}

.divider {
  width: 1px;
  height: 100%;
  background-color: rgba(0, 0, 0, .12);
}

.external-divider {
  height: 16px;
  padding: 0 16px;
}

.expand-btn-wrapper {
  width: 131px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-type-values {
  display: flex;
}

.filter-inner {
  display: flex;
}

.all-filter {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.first-line {
  display: flex;
  justify-content: space-between;
}

.tbr-title_1,
.tbr-title_2 {
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #1a1a1a;
}

.tbr-title_2 {
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tbr-title_1 {
  margin-right: 8px;
}

.top-bar-right {
  display: flex;

}

.breadcrumb-delimiter {
  padding: 0 8px;
  color: #bfbfbf;
  /* font-size: 11px; */
  font-weight: 800;
}

.breadcrumb-link {
  color: #ff0f23;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.breadcrumb-items {
  display: flex;
  align-items: flex-start;
  /* cursor: pointer; */
  transition: all 0.2s ease;
}

/* .breadcrumb-items:hover:not(.active){
  background-color: #f9fafb;
} */

.breadcrumb-item {
  font-family: PingFang SC;
  font-size: 17px;
  font-weight: 500;
  color: #1a1a1a;
}

.breadcrumb-item.current {
  color: #666;
  font-weight: 400;
}

.breadcrumb {
  display: flex;
}

.filter-condition {
  width: 1520px;
  margin: 8px 0 4px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, .1215686275);
  font: 12px / 150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, u5b8bu4f53, sans-serif;
}

.top-bar {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#content {
  background-color: #f7f8fc;
  border-radius: 12px;
}

.centerBar {
  padding: 16px 16px;

}

filter-condition {}
</style>