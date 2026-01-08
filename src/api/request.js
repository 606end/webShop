// 对于axios进行二次封装
import axios from "axios";
// 引入进度条插件 start进度条开始 done进度条结束
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"

// 利用axios对象的方法create，去下创建axios实例
// request就是axios，只不过需要配置下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径中会默认携带api
    baseURL: "/api",
    // 代表请求超时的时间
    timeout:5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use( (config)=>{
    // 进度条开始
    nProgress.start()
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

// 响应拦截器：服务器成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nProgress.done()
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('failed'),error)
});

// 对外暴露
export default requests