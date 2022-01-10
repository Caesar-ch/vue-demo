import Mock from 'mockjs'
//导入这个home.js的default对象，然后掉用那个函数，最终函数返回可数据
import homeApi from './mockServerData/home.js'
const res = Mock.mock('/api/home/getData', homeApi.getStatisticalData)
// 当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
// console.log(res);
//如果有这样的接口请求，便会通过mock拦截，然后返回自己定义的数据，mock是本地服务器
//Mock.mock('接口'，{
//   "data":"asda",
//   "asdas": "asdas",
//   "adas":"ada,"
// })