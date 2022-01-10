import axios from './axios.js'
// export const getMenu = () => {
//   return axios.request({
//     url: 'menu',
//     method: 'get'
//   })
// }
//此处为一个axios请求，
export const getHome = () => {
  return axios.request({
    url: '/api/home/getData',
    method: 'get'
  })
}