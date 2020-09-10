import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/Login.vue';
import User from '../views/Users.vue'
import axios from 'axios';
import Alter from '../views/alter.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/register',
    name:'Register',
    component:()=>Register
  },
  {
    path:'/login',
    name:'Login',
    component:()=>Login
  },
  {
    path:'/user',
    name:'User',
    component:()=>User,
    beforeEnter: (to, from ,next)=>{
      if(localStorage.getItem('token')!=undefined){


        var req={
          headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }

axios.post("http://localhost:8686/validate",{}, req).then(res=>{
  console.log(res);


}).catch(error=>{

  console.log(error);
  next('/login')
});
      }else{

        next('/login');
      }
      next();
    }
  },
  {
    path:'/alter/:id',
    name:'Alter',
    component:()=>Alter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
