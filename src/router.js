import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Homepage = () => import('./views/homepage/Homepage.vue')
  const SearchPage =() => import('./views/searchpage/SearchPage.vue')
    const Detail =()=> import('./views/detail/Detail.vue')
const Inner =()=> import('./views/inner/Inner.vue')
const Cart = () => import('./views/cart/Cart.vue')
const List = () => import('./views/list/List.vue')
const Mine = () => import('./views/mine/Mine.vue')
const More = () => import('./views/more/More.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/homepage'
    },
    {
      path: '/homepage',
      component:Homepage,
    },
    {
      path: '/cart',
      component:Cart,
    },
    {
      path: '/list',
      component:List,
    },
    {
      path: '/mine',
      component:Mine,
    },
    {
      path: '/more',
      component:More,
    },
    {
      path: '/detail',
      component:Detail,
    },
    {
      path: '/searchpage',
      component:SearchPage,
    },
    {
      path: '/inner',
      component:Inner,
    }
  ]
})
