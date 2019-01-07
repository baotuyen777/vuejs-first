import Vue from 'vue'
import Router from 'vue-router'
import ListTask from '@/components/ListTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listtask',
      component: ListTask
    }
  ]
})
