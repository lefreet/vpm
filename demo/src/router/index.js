import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menu1',
      name: 'menu1',
      component: resolve => require(['../components/menu1.vue'], resolve)
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: resolve => require(['../components/menu2.vue'], resolve)
    }
  ]
})
