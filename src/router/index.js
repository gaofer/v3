import {createRouter, createWebHashHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    /*name: 'home',
    component: HomeView*/
    name: 'FormDetailView',
    component: () => import('../views/FormDetailView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/formDetail',
    name: 'formDetail',
    component: () => import('../views/FormDetailView.vue')
  },
  {
    path: '/viewSinglePost/:id',
    name: 'ViewSinglePost',
    component: () => import('../views/ViewSinglePost.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
