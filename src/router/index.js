import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cases from '../views/Cases.vue'
import Tasks from '../views/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/crm', //
    name: 'Home',
    component: Home,
      
  },


  //look
  {
    path: '/cases',
    name: 'Cases',
    component: Cases,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/perps',
    name: 'Perps',
    component: () => import('../views/Perps.vue')
  },

  //create
  {
    path: '/file',
    name: 'File',
    component: () => import('../views/File.vue')
  },

  //admin
  {
    path: '/roster',
    name: 'Roster',
    component: () => import('../views/Roster.vue')
  },

  //components
  {
    path: '/cases/:id',
    name: 'Crime',
    component: () => import('../components/CaseDetails.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/Logout.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
