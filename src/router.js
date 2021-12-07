import { createRouter, createWebHashHistory } from 'vue-router'
import App                                    from './App.vue'
import Login                                  from './components/Login.vue'
import SignUp                                 from './components/SignUp.vue'
//import inicio                                 from './components/inicio'


const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login

  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp 
  },
  
  //{
    //path: '/user/inicio',
    //name: 'inicio',
    //component: inicio 
  //}
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
