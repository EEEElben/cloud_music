import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'



const Recommend = () => import('../views/recommend/recommend.vue')
const songList = () => import('../views/songList/songList.vue')


const routes = [
  {
    path:"",
    redirect:"/home/recommend"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'recommend',
        name: 'Recommend',
        component: Recommend,
      },
      {
        path: 'songList',
        name: 'songList',
        component: songList,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
