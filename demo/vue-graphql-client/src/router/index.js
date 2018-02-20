import Vue from 'vue'
import Router from 'vue-router'
import HelloMeetup from '@/components/HelloMeetup'
import GQL from '@/components/GQL'
import REST from '@/components/REST'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMeetup',
      component: HelloMeetup
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
