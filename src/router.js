import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Role from './views/Role.vue'

import Main from './views/Main.vue'

import Start from './views/Start.vue'



Vue.use(Router)

const router = new Router({
  routes: [
    // { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [

      ]
    },
    {
      path: '/start',
      name: 'start',
      component: Start,
      children: [
        // { path: '/login', component: Login },
        // { path: '/register', component: Register },//带参数, props: true
        // { path: '/topics/list', component: TopicList },

      ]
    },
    {
      path: '/login/:type',
      name: 'login',
      props: true,
      component: Login,
    },
    {
      path: '/role',
      name: 'role',
      component: Role
    },
  ]
})
// router.beforeEach((to, from ,next) => {
//   if (!to.meta.isPublic && !localStorage.token) {
//     return next('/login')
//   }
//   next()
// })
export default router
