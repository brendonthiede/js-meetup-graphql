import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SwapiDemo from '@/components/SwapiDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/swapi',
      name: 'SwapiDemo',
      component: SwapiDemo
    }
  ]
})
