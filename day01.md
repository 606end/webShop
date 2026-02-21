<!--
 * @Author: cc19530632908@163.com cc19530632908@163.com
 * @Date: 2025-11-01 19:58:07
 * @LastEditors: 606end 90855326+606end@users.noreply.github.com
 * @LastEditTime: 2026-02-11 15:07:40
 * @FilePath: \app\day01.md
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
1.vue-cli脚手架初始化项目
    node_modules：文件夹放置项目依赖

    public：一般放置一些静态资源（图片），需要注意 放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中

    src：源代码文件夹
        assets:一般放置静态资源（多个组件共用的静态资源） webpack在打包时，会把静态资源当做一个模块打包到JS文件里

        components：一般放置非路由组件（共用全局组件）

        App.vue: 唯一的根组件 

        main.js:程序入口文件，最先执行的文件

    package.json:项目信息，项目依赖

        package-lock.json:缓存文件

2.项目其他信息配置
3.项目路由分析
    前端路由是以键值对形式存在的 key：value
    key 地址栏中的路径
    value 相应的路由组件

    分析项目构成 拆分路由
    路由组件：home首页路由组件 search搜索路由组件 login登录路由组件 register注册路由
    非路由组件：header footer（首页、搜索页 登录页没有）

4.完成非路由组件header与footer业务
    1：书写静态页面
    2：拆分组件
    3：获取服务器的数据动态展示
    4：完成相应的动态业务逻辑
    创建组件对应：组件结构、组件样式、图片资源

5.使用创建的组件（非路由组件）
    引入
    注册
    使用

6.路由组件的搭建
    安装vue-router
    -components：一般放置非路由组件（共用全局组件）
    -pages|views文件夹：经常放置路由组件
    6.1配置路由
    项目当中配置的路由一般放置在router文件夹中,并创建index.js文件。在main.js文件中注册路由 App.vue中展示组件

    6.2总结
    路由组件与非路由组件的区别
    1:路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中
    2:路由组件一般需要在router文件夹中进行注册（使用的即为组件名字）,非路由组件在使用时候，一般都以标签的形式使用
    3:注册完路由，不管路由组件还是非路由组件身上都有$route、$router属性
    
    $route:一般获取路由信息【路径、query、params等等】
    $router:一般进行编程式导航进行路由跳转【push|replace】
    
    6.3路由的跳转
    路由的跳转有两种方式：
    声明式导航router-link，可以进行路由的跳转
    编程式导航push|replace，可以进行路由跳转（声明式导航能做的，编程式导航都能做。但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

7.footer组件显示与隐藏
    显示或者隐藏组件 v-if（是操作dom在节点处是真有还是真没有 频繁操作dom耗性能）v-show（只是通过样式将元素显示或隐藏）
    footer组件：在home、search显示footer组件
    footer组件：在登录、注册是隐藏的

    7.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断footer显示与隐藏
    7.2配置路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象

8.路由传参
    8.1路由的跳转方式
        声明式导航：router-link(务必要有to属性)，可以实现路由的跳转
        编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。

    8.2路由传参
    params参数：属于路径当中的一部分，需要注意，在配置路由的时候需要占位
    query参数：不属于路径当中的一部分，类似与ajax中的queryString /home?k=v&kv=,不需要占位

9.编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误（多次重复点击搜索按钮报错）
    路由跳转两种形式：声明式、编程式导航
    声明式导航没有这类问题，因为vue-router底层已经处理好

    9.1为什么编程式导航进行路由跳转的时候，会有这种警告错误
    “vue-router”最新引用了promise

    9.2通过底部的代码，可以实现解决问题
    this.$router.push({ name: "searchPage", params: { keyword: this.keyword }, query: { k: this.keyword.toUpperCase() } }, () =>{}, () =>{}) (这种写法，治标不治本)
    9.3

    9.3 this:当前组件实例（search）
        this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$router属性(let $router = new VueRouter())
        push：VueRouter类的一个实例

10.Home模块组件拆分
    10.1：三级联动组件完成
    由于三级联动组件，在home、search等，需要把三级联动注册为全局组件
    全局组件只用注册一次，就可以在项目任意地方使用

    10.2：完成其余静态组件
    HTML + CSS + 图片资源

11.POSTMAN测试接口
    刚刚经过postman工具测试，接口是没有问题的
    如果服务器返回的数据code字段200，代表服务器返回数据成功
    整个项目，接口前缀都有/api字样

12：axios二次封装
    XMLHttpRequest fetch JQ axios
    12.1:为什么需要进行二次封装axios
    请求拦截器、响应拦截器：请求拦截器，可以在发请求之前处理一些业务。响应拦截器，当服务器数据返回后，可以处理一些业务

13.接口统一管理
    项目很小：完全可以在组件的生命周期函数中发请求
    项目大：axios.get('xxx')

    13.1跨域问题
    什么是跨域：协议、域名、端口号不同请求，称之为跨域

14.nprogress进度条的使用
    start：进度条开始
    done: 进度条结束
    需要在使用的文件中引入样式文件nprogress.css，进度条颜色可选

15.Vuex装填管理库

    15.1 Vuex是官方提供的一个插件，装填管理库，集中式管理项目中组件共用的数据
    切记，并不是全部项目都需要Vuex，如果项目很小，完全不需要Vuex。如果项目很大，组件数据很多，数据维护很费劲使用Vuex

    15.2Vuex基本使用
    引入安装，src文件下创建store文件夹，创建仓库、actions、mutations、getters。main.js中引入注册

16.完成三级联动动态展示数据
    16.1 一级分类动态添加背景颜色
        a.第一种解决方案，采用样式解决
        b.采用js动态添加样式
    16.2 通过JS控制二三级商品分类的显示与隐藏
    16.3演示卡顿现象
        a.正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）
            鼠标进入触发回调函数打印元素的索引值，
            正常情况（用户慢慢操作）：鼠标进入，每一个一级分类都会触发鼠标进入事件
            非正常情况（用户操作很快）：原本全部一级分类都因该触发鼠标进入事件，但经过测试，只有部分触发。主要由于用户行为过快，导致浏览器反应不过来。
            loadash插件：里面封装函数的防抖与节流的业务【闭包+延迟器】
        b.节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
        c.防抖：前面所有的触发都被取消，最后一次执行在规定时间之后才会触发，也就是说如果连续快速的触发只会执行一次
    16.4三级联动的节流防抖（lodash按需引入）
    16.5三级联动组建的路由跳转与传递参数
        a.三级联动用户可以点击的：一级分类，二级分类，三级分类。当点击后Home组件跳转到Search组件，以及会把用户选中的产品（产品分类、产品ID）在路由跳转的时候进行传递。
        b.声明式导航：router-link 三级联动如果使用声明式导航router-link，可以实现路由的跳转与传递参数，但需要注意，会出现卡顿现象。（router-link是一个组件，当服务器数据返回之后，循环出很多的router——link组件实例，耗费内存 因此出现卡顿现象
        c.编程式导航：push|replace（存在问题：事件委派给父元素，怎么确定点击的一定是a标签、即使能可以确定，如何区分点击的a是一级、二级、三级标签。
            ——————————
            解决方案：把需要被标记的点击元素加上自定义属性，其余子节点没有（节点中有一个dataset属性，可以获取节点的自定义属性值；event.target.dataset）
                     一二三级标签分类同样采用标签分类，使用数据中的id
                     ****
                     我采用对每级标签添加不同自定义属性，用来区分所发生点击事件的位置。采用结构对所有属性进行提取，至少会有一个属性为真。使用if语句进行判断再次确保有唯一的属性有值。使用goNull函数去掉空值，并返回新的对象进行跳转。
                     ****
            ——————————
            最好的解决方案：编程式导航 + 事件委派

        a.开发Search模块中的三级联动商品分类菜单（过渡动画效果）
        过渡动画：前提组件|元素务必要有v-if/v-show指令才可以进行过渡动画
        b.现在商品分类三级列表可以进行优化
        在app根组件挂载时加入请求发送，可以实现只发送一次请求，而在商品分类组件中发送请求，会导致在home和search中各发送一次
        c.合并params与query参数
        目前跳转到search组件有两种方式，一是直接点击首页搜索按钮，携带params参数。二是点击三级菜单进行跳转，携带query参数。如果需要将两个参数进行合并，同时发送给服务器，就需要合并参数。由于没有规定两种点击的顺序，所以两个跳转都需要合并参数（将 newData.params = this.$route.params）
        
        个人感觉没有用，影响用户体验，但可以在通过三级菜单点击后，将分类名称放在搜索页面的搜索框中
    
        d.开发home首页当中的轮播图组件与floor组件
        对于服务器没有返回的数据可以使用mock（模拟数据），需要用到插件mack.js
        在项目当中src文件夹中创建mock文件夹 —— 准备json数据（mock文件夹中创建相应的json文件） —— 把mock数据需要的图片放置到public文件夹中（public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中） —— 创建mockServer.js文件通过mockjs实现模拟数据 —— mock.js文件在入口文件中引入

        *******
        针对引入swiper插件使用特性的问题（swiper在创建实例的时候要求，组件中的结构必须已经完全就绪）
            swiper插件所服务的组件，由服务器返回动态数据并进行遍历，而触发Vex中dispatch函数挂载在组件生命周期函数mounted中，并且请求为异步执行。在swiper插件创建实例需要完整的结构，而在实际程序执行顺序数据返回在是swiper创建实例之后，导致swiper无法正常运行只会显示一张图片。
            对于这种需要等待数据变化后进行的操作，而且获取数据方式为异步执行的。我们可以使用watch，待数据发生变化后进行操作（无法保重其他操作执行结束 例如：v-for），如果存在返回数据动态创建结构的，那就需要使用watch + $nextTick

            $nextTick：在下次DOM更新 循环结束之后 执行延迟回调。在修改数据之后 立即使用这个方法 获取更新后的DOM
            $nextTick：可以保证在页面中的结构一定是有的，经常和很多插件一起使用
        
        开发floor组件
        floor组件获取数据的action，需要在父组件home中发，？？？为什么不能再floor组件内部发，因为需要v-for遍历floor组件
        v-for可以在自定义标签中使用
        组件间通信方式
        把项目中在多个地方使用的组件，把它编程全局组件，注册一次，可以在任意地方使用，公用组件放到component

        search组件开发
        Search组件已经基本搭建完毕，复用floorSection组件。页面跳转实现动态调整搜索框位置以及商品展示组件每个商品的宽度、商品店铺展示。又调整了页面实现跳转的按钮和发送搜索请求，初步设计发起跳转和发送请求都由搜索按钮实现，再由Vuex统一管理数据。后发现也可以由搜索页面来实现，这样可以让跳转和页面搜索逻辑分离方便更灵活的控制。watch监听路由中keyword发生变化调用函数继而调起Vuex中的actions函数发送请求，为了更完善在页面各种生命周期函数mounted挂载判断keyword值，再次调用。
        Vuex中的getter不划分模块，可以直接按照名字使用。
        Object.assign(aaa, bbb, ccc) es6中新增语法，可以将bbb、ccc中相同属性的值合并到aaa中

        产品展示组件复用在首页推荐和搜索结果展示，由于接口不同导致返回的数据格式不一致，复用组件无法统一进行渲染，在不修改组件内部结构的前提下， 
        提出以下三种方案 
        1.在Vuex Action中统一数据结构 ：将推荐接口数据转换为与搜索接口一致的结构
        2.在API接口层统一数据结构 ：

``` javascript
        // 修改 /product/recommend 接口
router.get('/recommend', async (req, res) => {
    await delay(config.mock.delay);

    try {
        // 从JSON文件读取推荐数据
        const recommendations = productData.recommendations || [];
        
        // 统一数据结构
        const unifiedData = recommendations.map(item => ({
            id: item.id,
            title: item.title || item.name || '',
            more2_info_name: item.description || item.name || '',
            image: item.image || item.img_src || '',
            href: item.href || `#/product/${item.id}`,
            price: item.price || 0,
            price_decimal: item.price_decimal || '00',
            extra_price: item.originalPrice || item.extra_price || '',
            tags: item.tags || [],
            shopCard: item.shopInfo || item.shopCard || '',
            // 确保所有字段都按搜索接口的结构统一
            data_sku: item.sku || '',
            brandCard: item.brandCard || '',
            hotWords: item.hotWords || '',
            advertCard: item.advertCard || ''
        }));
        
        // 随机排序（如果需要）
        const randomizedData = unifiedData
            .map(item => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item);
        
        const mockData = {
            code: 200,
            message: 'success',
            data: randomizedData,
            mock: true
        };
        
        return res.json(mockData);
        
    } catch (error) {
        console.error('推荐接口错误:', error);
        res.status(500).json({
            code: 500,
            message: '获取推荐失败',
            error: error.message
        });
    }
});

// 修改 /product/search 接口（确保结构完全一致）
router.get('/search', async (req, res) => {
    const { keyword = '', page = 1, limit = 10 } = req.query;
    const decodedKeyword = decodeURIComponent(keyword);

    await delay(config.mock.delay);
    
    try {
        const allProducts = productData.products || [];
        
        let filteredProducts = [];
        if (decodedKeyword) {
            filteredProducts = allProducts.filter(product => {
                const searchText = (product.title || product.name || product.more2_info_name || '').toLowerCase();
                return searchText.includes(decodedKeyword.toLowerCase());
            });
        } else {
            filteredProducts = [...allProducts];
        }
        
        const startIndex = (parseInt(page) - 1) * parseInt(limit);
        const endIndex = startIndex + parseInt(limit);
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        // 统一数据结构，确保与推荐接口完全一致
        const unifiedList = paginatedProducts.map(product => ({
            id: product.id,
            title: product.title || '',
            more2_info_name: product.more2_info_name || '',
            image: product.more2_img_src || '',
            href: product.href || '',
            price: product.price || 0,
            price_decimal: product.price_decimal || '00',
            extra_price: product.extra_price || '',
            tags: product.tags || [],
            shopCard: product.shopCard || '',
            // 确保包含所有可能需要的字段
            data_sku: product['data-sku'] || '',
            brandCard: product.brandCard || '',
            hotWords: product.hotWords || '',
            advertCard: product.advertCard || ''
        }));
        
        const responseData = {
            code: 200,
            data: {
                list: unifiedList,  // 使用统一后的数据结构
                pagination: {
                    total: filteredProducts.length,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(filteredProducts.length / limit)
                },
                keyword: decodedKeyword,
                searchTime: new Date().toLocaleString(),
                mock: true
            },
            message: 'success'
        };
        
        res.json(responseData);
        
    } catch (error) {
        console.error('搜索接口错误:', error);
        res.status(500).json({
            code: 500,
            message: '搜索失败',
            error: error.message
        });
    }
});
```

        3.在组件computed中进行数据适配 (最简单)
        // 在 FloorSection.vue 中修改 computed
computed: {
  // 数据处理函数，统一数据结构
  processedProductData() {
    if (this.$route.name === 'searchPage') {
      // 搜索页数据：确保数据结构统一
      return (this.$props.searchList || []).map(item => this.normalizeProductData(item));
    } else {
      // 首页推荐数据：确保数据结构统一
      return (this.$store.state.product.productData || []).map(item => this.normalizeProductData(item));
    }
  },
  
  // 原始代码的 productData 指向处理后的数据
  productData() {
    return this.processedProductData;
  },
  
  changeStyle() {
    // 原有代码保持不变
  }
},

methods: {
  // 数据标准化方法
  normalizeProductData(item) {
    // 统一所有可能的数据字段名称
    return {
      id: item.id || '',
      title: item.title || item.name || '',
      description: item.description || item.more2_info_name || item.title || item.name || '',
      image: item.image || item.more2_img_src || item.img_src || '',
      href: item.href || `#/product/${item.id}`,
      price: item.price || 0,
      decimal: item.decimal || item.price_decimal || '00',
      originalPrice: item.originalPrice || item.extra_price || '',
      tags: item.tags || [],
      shopInfo: item.shopInfo || item.shopCard || '',
      // 确保模板需要的所有字段都有值
      more2_info_name: item.more2_info_name || item.description || item.title || item.name || '',
      // 其他可能需要的字段
      name: item.name || item.title || ''
    };
  }
}

Vue项目多页配置原理并分别设置为不同端口的

优点：
隔离性好: 每个应用完全独立

按需构建: 只构建需要的应用，速度快

自定义配置: 不同应用可以使用不同端口、不同模板

缺点：
不能同时运行: 需要两个终端分别运行两个应用

资源不共享: 公共依赖会被重复打包

开发体验: 需要切换不同端口访问不同应用

适用场景：
两个完全独立的应用

需要分开部署的项目

技术栈不同的子应用

package.json
"serve:main": "cross-env APP_NAME=main vue-cli-service serve --port 8080",
"serve:detailedpage": "cross-env APP_NAME=detailedpage vue-cli-service serve --port 7100",

    // 结构: cross-env APP_NAME=应用名称 vue-cli-service serve --port 端口号 cross-env: 跨平台设置环境变量的工具
    // cross-env APP_NAME=main → 设置环境变量 APP_NAME 为 'main' 
    // * 启动Vue CLI开发服务器 * 指定端口为8080 
    // * Vue CLI读取process.env.APP_NAME("main")根据APP_NAME 选择pages.main配置 来确定使用哪个配置项
    // * 启动 src/main/main.js

    // "build:main": "cross-env APP_NAME=main vue-cli-service build --dest dist/main",
    // "build:detailedpage": "cross-env APP_NAME=detailedpage vue-cli-service build --dest dist/detailedpage"

vue.config.js
具体配置已在当前项目中
项目目录中src下需要将两个独立应用放在不同文件夹

# 针对GalleryPreview组件点击箭头滚动事件意外触发mouseenter事件总结

## 问题本质

- 点击箭头按钮触发滚动功能
- 滚动过程中意外出发了缩略图的mouseenter事件
- 导致主图被错误切换，并没有按照设定距离滚动

## 问题分析

- **CSS transform动画的副作用，translateY()改变元素视觉位置但不改变DOM流，动画过程中元素经过鼠标位置，被浏览器识别为进入**
- **浏览器mouseenter实现机制，基于元素编辑框计算过程中元素边界框连续移动**
- **事件绑定颗粒度过粗，在整个.item容器上绑定mouseenter，应该在具体交互元素上绑定**

## 解决策略

- 事件源验证

``` javascript
changeMainImage(index, event) {
// 验证是真实用户交互
    if (!event || !event.isTrusted) return;

// 验证事件类型
if (event.type !== 'mouseenter') return;

// 执行逻辑
}
```

- 状态锁机制

``` javascript
data() {
  return {
    isAnimating: false,
    lockTimeout: null
  }
},

handleNext() {
  this.isAnimating = true;
  // 执行滚动
  this.isAnimating = false;
},

changeMainImage(index) {
  if (this.isAnimating) return;
  // 执行逻辑
}
```  

- 事件绑定优化

## 事件处理最佳原则

- 精确绑定，事件绑定到最具体的交互元素
- 验证事件源， 事件类型，交互状态
- 状态隔离， 动画期间隔离用户交互
