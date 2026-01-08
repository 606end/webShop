import {reqRecommend} from '@/api'
//Vuex模块化仓库
const state = {
    loading: false,
    productData: {}
};
const actions = {
    // {commit} 这是参数解构语法，从 context 对象中提取 commit 方法
    //{ context 对象包含：
        // state,      当前模块的 state
        // commit,     提交 mutation 的方法
        // dispatch,   触发其他 action 的方法
        // getters,    当前模块的 getters
        // rootState,  根 state
        // rootGetters 根 getters
    //}
    async Recommend({commit}) {
        // 相当于：
        // async Recommend(context) {
        //     const commit = context.commit
        // }
        try {
            commit('setLoading', true)
            const response = await reqRecommend()
            // 统一数据结构：将推荐接口数据转换为与搜索接口一致的结构
            const unifiedData = response.map(item => ({
                id: item.id,
                title: item.title || item.name,
                description: item.more2_info_name || item.name,
                advertCard: item.advertCard || item.img_src,
                // TODO:等待商品详情页搭建，使用动态商品链接
                href: item.href || `#/product/${item.id}`,
                price: item.price || 0,
                decimal: item.price_decimal || '00',
                originalPrice:  item.extra_price|| item.originalPrice || '',
                tags: item.tags || [],
                shopInfo: item.shopInfo || item.shopCard || ''
            }));
            commit('productData', unifiedData)
            return response// 这里返回的是data数据而不是完整响应
        } catch(error) {
            commit ('error', error.message)
            throw error
        } finally {
            commit ('setLoading', false)
        }
    }
};
const mutations = {
    setLoading(stat, loading){
        stat.loading = loading
        console.log(`${loading}`,"被修改了")
    },
    productData(stat, data) {
        stat.productData = data
    },
    SET_ERROR(state, error) { 
        state.error = error
    }
    
};
const getters = {};
export default {
    state, actions, mutations, getters
}