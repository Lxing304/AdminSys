import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainSignIn from '../components/MainSignIn.vue'
import Manage from'../components/Manage.vue'
import UserInfo from '../page/UerInfo.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:Home 
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },{
    path:'/SignIn',
    name:'SignIn',
    component:MainSignIn
  }
  ,{
    path:'/manage',
    name:'Manage',
    component:Manage,
    children:[
      {
        path: '/userInfo',
        component: UserInfo,
        meta: ['用户信息','个人信息'],
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
