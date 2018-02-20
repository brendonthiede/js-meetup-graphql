import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GQL from '@/components/GQL'
import REST from '@/components/REST'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gql',
      name: 'GQL',
      component: GQL
    },
    {
      path: '/rest',
      name: 'REST',
      component: REST
    }
  ]
})
