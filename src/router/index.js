import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Solid from "@/components/Solid"
import Principle from "@/components/Principle"
import Crud from "@/components/Crud"
import CrudPrinciple from "@/components/CrudPrinciple"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/solid',
      name: 'Solid',
      component: Solid
    },
     {
      path: '/crud',
      name: 'Crud',
      component: Crud
    },{
      path: '/crud/:letter',
      name: 'CrudPrinciple',
      component: CrudPrinciple
    },
    {
      path: '/solid/:letter',
      name: 'Principle',
      component: Principle
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
