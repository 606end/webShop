/**
 * 📦 产品相关API路由
 * 
 * 这个文件定义了所有产品相关的API端点
 * 当启用Mock时，这些端点返回模拟数据
 * 当禁用Mock时，可以配置为转发到真实API
 */

const express = require('express');
const router = express.Router();  // 创建路由实例
const config = require('../config');  // 导入配置

// 📁 导入Mock数据（如果使用JSON文件）
// ✏️ 注意：需要先创建对应的JSON文件
const productData = require('../mock/product.json');
const categoryData = require('../mock/category.json');

/**
 * ⏱️ 模拟网络延迟函数
 * @param {number} ms 延迟毫秒数
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================
// 📋 API 端点定义
// ============================================

/**
 * GET /product/getBaseCategoryList
 * 获取商品分类列表
 * 
 * ✏️ 修改：这个接口需要根据你的实际业务需求调整返回数据
 * 原接口：http://39.98.123.211/product/getBaseCategoryList
 */

router.get('/getBaseCategoryList', async (req, res) => {
    try {
        // ✏️ 修改：如果启用Mock，添加延迟模拟真实网络
        if (config.mock.enabled) {
            await delay(config.mock.delay);

            // 📝 方法1：硬编码Mock数据（适合简单的数据结构）
            // const mockData = {
            //     code: 200,           // ✏️ 修改：根据实际API响应格式调整
            //     message: 'success',  // ✏️ 修改：根据实际API响应格式调整
            //     data: [
            //         {
            //             id: 1,
            //             name: '手机数码',
            //             subCategory: [
            //                 { id: 11, name: '手机通讯' },
            //                 { id: 12, name: '手机配件' },
            //                 { id: 13, name: '摄影摄像' },
            //                 { id: 14, name: '影音娱乐' }
            //             ],
            //             type: 'routesP',
            //         },
            //         {
            //             id: 2,
            //             name: '电脑办公',
            //             subCategory: [
            //                 { id: 21, name: '电脑整机' },
            //                 { id: 22, name: '电脑配件' },
            //                 { id: 23, name: '外设产品' },
            //                 { id: 24, name: '办公设备' }
            //             ]
            //         },
            //         {
            //             id: 3,
            //             name: '家用电器',
            //             subCategory: [
            //                 { id: 31, name: '大家电' },
            //                 { id: 32, name: '厨房电器' },
            //                 { id: 33, name: '生活电器' },
            //                 { id: 34, name: '个护健康' }
            //             ]
            //         },
            //         // ✏️ 添加：可以根据需要添加更多分类
            //         {
            //             id: 4,
            //             name: '服饰鞋包',
            //             subCategory: [
            //                 { id: 41, name: '女装' },
            //                 { id: 42, name: '男装' },
            //                 { id: 43, name: '鞋靴' },
            //                 { id: 44, name: '箱包' }
            //             ]
            //         }
            //     ],
            //     mock: true,  // ✏️ 标识这是Mock数据
            //     timestamp: new Date().toISOString()
            // };

            // 📝 方法2：从JSON文件读取Mock数据（适合大量数据）
            const mockData = {
                code: 200,
                message: 'success',
                data: productData,  // 从JSON文件导入
                mock: true
            };

            return res.json(mockData.data.products);
        }

        // 📝 如果没有启用Mock，可以在这里实现转发逻辑
        // ✏️ 修改：如果需要实现自定义转发逻辑，可以在这里添加
        res.status(501).json({
            error: 'Not Implemented',
            message: 'Mock data is disabled and no proxy configured',
            // ✏️ 提示：可以在这里集成axios转发到真实API
        });

    } catch (error) {
        console.error('Product route error:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
});

/**
 * GET /product/detail/:id
 * 获取商品详情
 * 
 * ✏️ 修改：根据实际商品详情API调整
 * @param {string} id - 商品ID
 */
router.get('/detail/:id', async (req, res) => {
    // 模拟网络延迟
    await delay(config.mock.delay);

    const productId = req.params.id;

    // ✏️ 修改：根据实际商品数据结构调整
    res.json({
        code: 200,
        data: {
            id: productId,
            name: `商品 ${productId}`,
            price: Math.floor(Math.random() * 10000) + 100,  // 随机价格
            originalPrice: Math.floor(Math.random() * 12000) + 100,
            description: '这是一段商品描述，包含商品的详细信息、规格参数、使用方法等。商品质量优良，价格实惠，欢迎购买。',
            images: [
                `https://example.com/products/${productId}/1.jpg`,
                `https://example.com/products/${productId}/2.jpg`,
                `https://example.com/products/${productId}/3.jpg`
            ],
            category: '电子产品',
            stock: Math.floor(Math.random() * 1000),  // 随机库存
            sales: Math.floor(Math.random() * 5000),  // 随机销量
            rating: (Math.random() * 2 + 3).toFixed(1),  // 3-5分随机评分
            mock: true
        },
        message: 'success'
    });
});

/**
 * GET /product/search
 * 商品搜索接口
 * 
 * ✏️ 修改：根据实际搜索API调整参数和返回结构
 * @query {string} keyword - 搜索关键词
 * @query {number} page - 页码（默认1）
 * @query {number} limit - 每页数量（默认10）
 */
router.get('/search', async (req, res) => {
    const { keyword = '', page = 1, limit = 10 } = req.query;

    // 解码URL编码的关键词
    const decodedKeyword = decodeURIComponent(keyword);
    console.log(`[SEARCH] 搜索关键词：${decodedKeyword},页码：${page}, 数量：${limit}`);

    // 模拟网络延迟
    await delay(config.mock.delay);

    try {
        // 从JSON文件读取产品数据
        const allProducts = productData.products;

        // 根据关键词过滤商品
        let filteredProducts = [];

        // 如果有关键词，进行搜索过滤
        if (decodedKeyword) {
            filteredProducts = allProducts.filter(
                product => {
                    // 搜索产品标题、名称等字段
                    const searchText = (product.title || product.name || product.more2_info_name || '').toLowerCase();
                    const searchKeyword = decodedKeyword.toLowerCase();

                    // 返回匹配的产品
                    return searchText.includes(searchKeyword);
                }
            );
        } else {
            // 如果没有关键词，返回所有产品
            filteredProducts = [...allProducts]
        }

        // 计算分页数据
        const startIndex = (parseInt(page) - 1) * parseInt(limit);
        const endIndex = startIndex + parseInt(limit);
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // ✏️ 根据你的前端数据结构调整返回格式
        // XXX：商品数据加入品牌，搜索商品将每个商品的品牌放进一个数组，统一展示
        const responseData = {
            code: 200,
            data: {
                list: paginatedProducts.map(product => ({
                    id: product.id,
                    sku: product['data-sku'],
                    name: product.title || product.more2_info_name || `商品 ${product.id}`,
                    price: product.price || 0,
                    decimal: product.price_decimal || 0,
                    originalPrice: product.extra_price,
                    advertCard: product.advertCard || '',
                    description: product.more2_info_name || product.title || '',
                    category: '搜索结果',
                    sales: parseInt(product.extra_price?.match(/\d+/)?.[0] || Math.floor(Math.random() * 10000)),
                    rating: (Math.random() * 2 + 3).toFixed(1),
                    href: product.href || '',
                    tags: product.tags || [],
                    brandCard: product.brandCard || '',
                    hotWords: product.hotWords || '',
                    shopInfo: product.shopCard
                })),
                pagination: {
                    total: filteredProducts.length,        // 总数据量
                    page: parseInt(page),                 // 当前页码
                    limit: parseInt(limit),               // 每页数量
                    pages: Math.ceil(filteredProducts.length / limit)  // 总页数
                },
                keyword: decodedKeyword,                  // 搜索关键词
                searchTime: new Date().toLocaleString(),  // 搜索时间
                mock: true                                // 标识这是Mock数据
            },
            message: 'success'
        };

        console.log(`[SEARCH] 返回 ${paginatedProducts.length} 个产品，共 ${filteredProducts.length} 个匹配结果`);
        res.json(responseData);

    } catch (error) {
        console.error('搜索接口错误:', error);
        res.status(500).json({
            code: 500,
            message: '搜索失败，服务器内部错误',
            error: error.message
        });
    }

    // // ✏️ 修改：根据实际搜索API返回结构调整
    // res.json({
    //     code: 200,
    //     data: {
    //         list: Array.from({ length: parseInt(limit) }, (_, i) => ({
    //             id: i + 1 + (page - 1) * limit,
    //             name: `${keyword || '商品'} ${i + 1 + (page - 1) * limit}`,
    //             price: Math.floor(Math.random() * 1000) + 100,
    //             image: `https://example.com/products/${i + 1}.jpg`,
    //             description: `这是${keyword || '商品'} ${i + 1}的描述`,
    //             category: keyword ? `${keyword}分类` : '默认分类',
    //             rating: (Math.random() * 2 + 3).toFixed(1)
    //         })),
    //         pagination: {
    //             total: 100,                // ✏️ 修改：总数据量
    //             page: parseInt(page),      // 当前页码
    //             limit: parseInt(limit),    // 每页数量
    //             pages: Math.ceil(100 / limit)  // 总页数
    //         },
    //         keyword: keyword || '',
    //         mock: true
    //     },
    //     message: 'success'
    // });
});

/**
 * GET /product/by-category
 * 根据分类ID获取商品列表
 * 
 * ✏️ 前端传参示例：
 * categoryName=皮鞋&level=thirdClassification&parentSecondTitle=鞋靴&dataClassification=4330
 * 
 * @query {string} level - 分类级别 (firstClassification, secondClassification, thirdClassification)
 * @query {string} dataClassification - 分类ID值
 * @query {string} [categoryName] - 可选关键词（在当前分类中进一步搜索）
 * @query {string} [parentSecondTitle] - 二级分类标题（仅用于日志记录）
 * @query {number} page - 页码（默认1）
 * @query {number} limit - 每页数量（默认10）
 * 
 *    参数	         类型	    必填	    说明
 *level	            string	    是	    分类级别：firstClassification, secondClassification, thirdClassification
 *dataClassification string	    是	分类ID值
 *categoryName	       string	    否	在当前分类中进一步搜索关键词
 *parentSecondTitle string	    否	二级分类标题（仅用于返回数据的category字段）
 *page	           number	    否	页码，默认1
 *limit	           number	    否	每页数量，默认10
 */
router.get('/category', async (req, res) => {
    const {
        categoryName = '',
        level,
        parentSecondTitle = '',
        dataClassification,
        page = 1,
        limit = 10
    } = req.query;

    // 解码URL编码的关键词
    const decodedCategoryName = decodeURIComponent(categoryName);
    const classificationLevel = level;
    const classificationId = dataClassification;

    console.log(`[CATEGORY] 分类查询：级别=${classificationLevel}, ID=${classificationId}, 关键词=${decodedCategoryName}, 页码=${page}, 数量=${limit}, 二级分类标题=${parentSecondTitle}`);

    // 模拟网络延迟
    await delay(config.mock.delay);

    try {
        // 从JSON文件读取所有产品数据
        const allProducts = productData.products;

        // 根据分类级别筛选商品
        let filteredProducts = [];

        if (!classificationLevel || !classificationId) {
            return res.status(400).json({
                code: 400,
                message: '缺少必要的分类参数：level和dataClassification',
                error: 'Bad Request'
            });
        }

        // 根据分类级别进行筛选
        switch (classificationLevel) {
            case 'firstClassification':
                // 一级分类：匹配parent_id和sub_tit
                // filter() 是JavaScript数组的方法，用于过滤数组元素，输出一个包含所有通过测试的元素的新数组
                filteredProducts = allProducts.filter(product =>
                    (product.sub_tit === classificationId &&
                        product.sub_tit && product.sub_tit.includes(`${classificationId}-`)) ||
                    product.sub_tit === classificationId
                    // 第一层匹配条件：父ID完全匹配且sub_tit存在不为假值并包含以${classificationId}- 如“1-”前缀
                    // 第二层匹配条件：只要父ID匹配，不管有么有sub_tit
                    // 设计原因：新旧数据兼容：旧数据可能没有sub_tit字段，新数据有更详细的sub_tit信息。分级匹配策略：优先匹配格式规范的数据（有正确的sub_tit),后背方案只要parent_id对就匹配
                );
                console.log(`[CATEGORY] 一级分类筛选：ID=${classificationId}, 匹配到 ${filteredProducts.length} 个商品`);
                break;

            case 'secondClassification':
                // 二级分类：匹配sons_id
                filteredProducts = allProducts.filter(product =>
                    product.sons_id === classificationId
                );
                console.log(`[CATEGORY] 二级分类筛选：ID=${classificationId}, 匹配到 ${filteredProducts.length} 个商品`);
                break;

            case 'thirdClassification':
                // 三级分类：匹配grandson_id
                filteredProducts = allProducts.filter(product =>
                    product.grandson_id === classificationId
                );
                console.log(`[CATEGORY] 三级分类筛选：ID=${classificationId}, 匹配到 ${filteredProducts.length} 个商品`);
                break;

            default:
                return res.status(400).json({
                    code: 400,
                    message: '无效的分类级别，必须是：firstClassification, secondClassification, thirdClassification',
                    error: 'Bad Request'
                });
        }

        // 如果有关键词，在当前分类结果中进一步搜索
        // if (decodedCategoryName) {
        //     const categoryFiltered = filteredProducts.filter(
        //         product => {
        //             // 搜索产品标题、名称等字段
        //             const searchText = (product.title || product.name || product.more2_info_name || '').toLowerCase();
        //             const searchCategoryName = decodedCategoryName.toLowerCase();

        //             // 返回匹配的产品
        //             return searchText.includes(searchCategoryName);
        //         }
        //     );

        //     console.log(`[CATEGORY] 关键词过滤：关键词="${decodedCategoryName}", 从 ${filteredProducts.length} 个商品中过滤出 ${categoryFiltered.length} 个`);
        //     filteredProducts = categoryFiltered;
        // }

        // 计算分页数据（与/search接口保持一致）
        const startIndex = (parseInt(page) - 1) * parseInt(limit);
        const endIndex = startIndex + parseInt(limit);
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // ✏️ 新增：在bannerList.json中查找分类信息
        let categoryInfo = null;
        try {
            categoryInfo = await findCategoryInfoInBannerList(classificationLevel, classificationId);
        } catch (error) {
            console.warn(`[CATEGORY] 查找分类信息失败：${error.message}`);
            // 即使查找失败也不影响主流程，使用默认信息
        }

        // ✏️ 确保返回格式与/search接口完全一致
        const responseData = {
            code: 200,
            data: {
                list: paginatedProducts.map(product => ({
                    id: product.id,
                    sku: product['data-sku'],
                    name: product.title || product.more2_info_name || `商品 ${product.id}`,
                    price: product.price || 0,
                    decimal: product.price_decimal || 0,
                    originalPrice: product.extra_price,
                    advertCard: product.advertCard || '',
                    description: product.more2_info_name || product.title || '',
                    category: getCategoryName(product, classificationLevel, classificationId, parentSecondTitle),
                    sales: parseInt(product.extra_price?.match(/\d+/)?.[0] || Math.floor(Math.random() * 10000)),
                    rating: (Math.random() * 2 + 3).toFixed(1),
                    href: product.href || '',
                    tags: product.tags || [],
                    brandCard: product.brandCard || '',
                    hotWords: product.hotWords || '',
                    shopInfo: product.shopCard
                })),
                pagination: {
                    total: filteredProducts.length,        // 总数据量
                    page: parseInt(page),                 // 当前页码
                    limit: parseInt(limit),               // 每页数量
                    pages: Math.ceil(filteredProducts.length / limit)  // 总页数
                },
                categoryName: decodedCategoryName,                  // 搜索关键词
                searchTime: new Date().toLocaleString(),  // 搜索时间
                categoryInfo: {                           // 新增：分类信息
                    level: classificationLevel,
                    id: classificationId,
                    title: parentSecondTitle || getCategoryTitle(classificationLevel, classificationId),
                    // ✏️ 新增：从bannerList中查找的详细信息
                    bannerInfo: categoryInfo || null
                },
                mock: true                                // 标识这是Mock数据
            },
            message: 'success'
        };

        console.log(`[CATEGORY] 返回 ${paginatedProducts.length} 个产品，共 ${filteredProducts.length} 个匹配结果`);
        res.json(responseData);

    } catch (error) {
        console.error('分类查询接口错误:', error);
        res.status(500).json({
            code: 500,
            message: '分类查询失败，服务器内部错误',
            error: error.message
        });
    }
});

/**
 * 辅助函数：在bannerList.json中查找分类信息
 * @param {string} level - 分类级别
 * @param {string} classificationId - 分类ID
 * @returns {Object|null} 分类信息对象
 */
async function findCategoryInfoInBannerList(level, classificationId) {
    try {
        // 导入bannerList数据
        const bannerListData = require('../mock/bannerList.json');
        const menuItems = bannerListData.menuItems;

        let result = {
            level: level,
            id: classificationId,
            sub_name: null,
            sub_tit: null,
            title: null,
            sons_id: null,
            grandson_id: null,
            name: null
        };

        // 遍历所有menuItems
        for (const menuItem of menuItems) {
            // 遍历links查找sub_tit
            if (menuItem.links && menuItem.links.length > 0) {
                for (const link of menuItem.links) {
                    // 如果是firstClassification级别，只需要在links中查找
                    if (level === 'firstClassification') {
                        // 检查link的sub_tit是否匹配classificationId
                        // 注意：bannerList中的sub_tit格式是"1-1"、"2-1"等
                        // 而classificationId可能是"1"、"2"等，所以我们需要匹配前缀
                        const linkIdPrefix = link.sub_tit ? link.sub_tit.split('-')[0] : null;
                        if (linkIdPrefix === classificationId || link.sub_tit === classificationId) {
                            result.sub_tit = link.sub_tit;
                            result.sub_name = link.sub_name;
                            return result;
                        }
                    }
                }
            }

            // 如果是secondClassification或thirdClassification，需要在categories中查找
            if ((level === 'secondClassification' || level === 'thirdClassification') &&
                menuItem.categories && menuItem.categories.length > 0) {

                for (const category of menuItem.categories) {
                    // 检查sons_id是否匹配（对于secondClassification）
                    if (level === 'secondClassification' && category.sons_id === classificationId) {
                        result.title = category.title;
                        result.sons_id = category.sons_id;
                        result.sub_tit = category.sub_tit;

                        // 查找对应的link信息
                        if (menuItem.links && menuItem.links.length > 0) {
                            for (const link of menuItem.links) {
                                if (link.sub_tit === category.sub_tit) {
                                    result.sub_tit = link.sub_tit;
                                    result.sub_name = link.sub_name;
                                    break;
                                }
                            }
                        }
                        return result;
                    }

                    // 检查subItems中的grandson_id（对于thirdClassification）
                    if (level === 'thirdClassification' &&
                        category.subItems && category.subItems.length > 0) {

                        for (const subItem of category.subItems) {
                            if (subItem.grandson_id === classificationId) {
                                result.title = category.title;
                                result.sons_id = category.sons_id;
                                result.sub_tit = category.sub_tit;
                                result.grandson_id = subItem.grandson_id;
                                result.name = subItem.name;

                                // 查找对应的link信息
                                if (menuItem.links && menuItem.links.length > 0) {
                                    for (const link of menuItem.links) {
                                        if (link.sub_tit === category.sub_tit) {
                                            result.sub_tit = link.sub_tit;
                                            result.sub_name = link.sub_name;
                                            break;
                                        }
                                    }
                                }
                                return result;
                            }
                        }
                    }
                }
            }
        }

        console.log(`[CATEGORY] 未在bannerList中找到匹配的分类信息：level=${level}, id=${classificationId}`);
        return null;

    } catch (error) {
        console.error(`[CATEGORY] 查找bannerList分类信息失败：${error.message}`);
        throw error;
    }
}

/**
 * 辅助函数：获取分类名称
 */
function getCategoryName(product, level, classificationId, parentSecondTitle) {
    // 根据分类级别返回适当的分类名称
    switch (level) {
        case 'firstClassification':
            return `一级分类 ${classificationId}`;
        case 'secondClassification':
            return `二级分类 ${classificationId}`;
        case 'thirdClassification':
            return parentSecondTitle || `三级分类 ${classificationId}`;
        default:
            return '分类商品';
    }
}

/**
 * 辅助函数：获取分类标题（可以从category.json中获取）
 */
function getCategoryTitle(level, classificationId) {
    // 这里可以根据classificationId从categoryData中查找对应的分类名称
    // 由于您的category.json结构与product.json不同，这里简化处理
    return `${level} ${classificationId}`;
}

/**
 * GET /product/category/:categoryId
 * 备用接口：通过路径参数获取分类商品（保持与/search类似的RESTful设计）
 * 
 * @param {string} categoryId - 分类ID
 * @query {string} level - 分类级别
 * @query {string} categoryName - 可选关键词
 */
router.get('/category/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    const { level = 'thirdClassification', categoryName = '', page = 1, limit = 10 } = req.query;

    // 重定向到/by-category接口，保持参数一致性
    req.query.dataClassification = categoryId;
    req.query.level = level;
    req.query.categoryName = categoryName;
    req.query.page = page;
    req.query.limit = limit;

    // 调用上面的by-category逻辑
    return router.handle(req, res, () => { });
});

// ✏️ 添加：更多产品相关API接口
// 例如：商品分类、商品推荐、商品评论等

/**
 * GET /product/recommend
 * 获取推荐商品
 */
router.get('/recommend', async (req, res) => {
    await delay(config.mock.delay);
    const recommendations = JSON.parse(JSON.stringify(productData.recommendations));
    const randomizedBetter = recommendations
        .map(item => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);

    const mockData = {
        code: 200,
        message: 'success',
        data: randomizedBetter,
        mock: true
    };
    return res.json(mockData.data);

    // res.json({
    //     code: 200,
    //     data: [
    //         { id: 101, name: '推荐商品1', price: 299, image: 'rec1.jpg' },
    //         { id: 102, name: '推荐商品2', price: 499, image: 'rec2.jpg' },
    //         { id: 103, name: '推荐商品3', price: 799, image: 'rec3.jpg' },
    //         { id: 104, name: '推荐商品4', price: 1299, image: 'rec4.jpg' }
    //     ],
    //     mock: true
    // });
});

// 导出路由
module.exports = router;