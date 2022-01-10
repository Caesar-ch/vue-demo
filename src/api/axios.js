//二次封装axios拦截器
import axios from 'axios'
import config from '../config/index.js'
//设置配置，根据开发和生产环境不一样
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
class HttpRequst {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {

      }

    }
    return config
  }
  interceptors(instance) {
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log("拦截处理请求");
      return config;
    }, function (error) {
      // 对请求错误做些什么
      console.log(error)
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      console.log("处理响应");
      return response.data;
    }, function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      console.log(error);
      return Promise.reject(error);
    });
  }
  request(options) {
    //请求
    const instance = axios.create()
    //技巧
    options = { ...(this.getInsideConfig()), ...options }
    this.interceptors(instance)
    return instance(options)
  }
}
export default new HttpRequst(baseUrl)