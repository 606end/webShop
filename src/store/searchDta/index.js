/*
 * @Author: Sam cc19530632908@163.com
 * @Date: 2025-12-25 22:41:49
 * @LastEditors: Sam cc19530632908@163.com
 * @LastEditTime: 2026-01-07 22:26:27
 * @FilePath: \app\src\store\searchDta\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by Sea.H.J,, All Rights Reserved. 
 */
import { reqCategoryProduct, reqSearchProduct } from "@/api";

const state = {
    searchList: [],
    categoryList: [],
    categoryInfos: {},
    searchKeyword: '',
    searchPagination: { //存储分页信息
        page: 1,
        limit: 20,
        total: 0
    },
};
const actions = {
    async userSearch({ commit }, searchParams) {
        try {
            console.log('搜索参数', searchParams)
            const result = await reqSearchProduct(searchParams)

            if (result.code === 200) {
                commit('SEARCH_LIST', result.data.list)
                commit('SEARCH_PAGINATION', result.data.pagination);
                commit('SEARCH_KEYWORD', result.data.keyword || '')
            }

        } catch (error) {
            console.error('搜索失败', error)
            commit('ERROR', error.message)
            throw error

        }
    },
    async categoryProduct({ commit }, categoryQuery) {
        try {
            console.log('分类搜索参数', categoryQuery)
            const result = await reqCategoryProduct(categoryQuery)

            if (result.code === 200) {
                commit('CATEGORY_LIST', result.data.list)
                commit('CREATE_CATEGORY_ARRAY', result.data.categoryInfo.bannerInfo)
                console.log(result)
            }
        } catch (error) {
            console.error('分类搜索失败', error)
            commit('ERROR', error.message)
            throw error

        }
    }
};
const mutations = {
    SEARCH_LIST(state, data) {
        state.searchList = data
    },
    SEARCH_KEYWORD(state, keyword) {
        state.searchKeyword = keyword;
    },
    SEARCH_PAGINATION(state, pagination) {
        state.searchPagination = {
            page: pagination.page,
            limit: pagination.limit,
            total: pagination.total
        };
    },
    ERROR(state, errorMsg) {
        console.error('Store Error:', errorMsg);
    },
    CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList
    },
    CREATE_CATEGORY_ARRAY(state, categoryInfoList) {
        state.categoryInfos = _createClassificationArray(categoryInfoList)
    },
    RESET_CATEGORY_INFOS(state, emptyArr) {
        state.categoryInfos = emptyArr
    }
};
const getters = {
    getSearchList: state => state.searchList,
    getSearchKeyword: state => state.searchKeyword,
    getSearchPagination: state => state.searchPagination
};
export default {
    namespaced: true,
    state, actions, mutations, getters
};
const _createClassificationArray = (categoryInfo) => {
    // const { sub_tit, sub_name, sons_id, title, grandson_id, name } = categoryInfo
    // 1.0 只进行了基础的解构有些数据值为null，导致每次数组长度都为3，页面无法判断最后一个为哪个，影响业务逻辑
    // 2.0 创建空数据，对符合条件的数据进行push返回

    const result = [];

    if (categoryInfo.sub_tit && categoryInfo.sub_name) {
        result.push({
            type: "firstClassification",
            label: "一级分类",
            value: [categoryInfo.sub_tit, categoryInfo.sub_name],
            data: {
                id: categoryInfo.sub_tit,
                name: categoryInfo.sub_name
            }
        })
    }

    if (categoryInfo.sons_id && categoryInfo.title) {
        result.push(
            {
                type: "secondClassification",
                label: "二级分类",
                value: [categoryInfo.sons_id, categoryInfo.title],
                data: {
                    id: categoryInfo.sons_id,
                    name: categoryInfo.title
                }
            },
        )
    }

    if (categoryInfo.grandson_id && categoryInfo.name) {
        result.push(
            {
                type: "thirdClassification",
                label: "三级分类",
                value: [categoryInfo.grandson_id, categoryInfo.name],
                data: {
                    id: categoryInfo.grandson_id,
                    name: categoryInfo.name
                }
            }
        )
    }

    return result;
    // return [
    //     {
    //         type: "firstClassification",
    //         label: "一级分类",
    //         value: [sub_tit, sub_name],
    //         data: {
    //             id: sub_tit,
    //             name: sub_name
    //         }
    //     },
    //     {
    //         type: "secondClassification",
    //         label: "二级分类",
    //         value: [sons_id, title],
    //         data: {
    //             id: sons_id,
    //             name: title
    //         }
    //     },
    //     {
    //         type: "thirdClassification",
    //         label: "三级分类",
    //         value: [grandson_id, name],
    //         data: {
    //             id: grandson_id,
    //             name: name
    //         }
    //     }
    // ]
}

