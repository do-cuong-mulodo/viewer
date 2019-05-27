import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import {INDEX_ROUTER_PATH} from './config/const'
import {HOME_ROUTER_PATH} from './config/const'
import {HOME_ROUTER_NAME} from './config/const'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: INDEX_ROUTER_PATH,
      redirect: HOME_ROUTER_PATH
    },
    {
      path: HOME_ROUTER_PATH,
      name: HOME_ROUTER_NAME,
      component: Home
    }
  ]
})
export default router
