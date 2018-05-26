import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import ViewSong from '@/components/ViewSong'
import Create from '@/components/Create'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/song/:id',
      name: 'ViewSong',
      component: ViewSong
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ],
  mode : "history"
})
