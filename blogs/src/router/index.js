import Vue from 'vue'
import Router from 'vue-router'
import showBlogs from '@/components/show_blogs'
import addBlogs from '@/components/add_blogs'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'showBlogs',
      component: showBlogs
    },{
      path: '/addBlogs',
      name: 'addBlogs',
      component: addBlogs
    },{
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
