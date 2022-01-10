import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import About from '../views/About.vue'
//路由重复报错解决
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [

  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },

      {
        path: '/ma',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('@/views/Mall/Mall.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User/User.vue')
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
