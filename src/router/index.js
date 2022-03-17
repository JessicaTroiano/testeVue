import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioNovo from '../views/InicioNovo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'InicioNovo',
    component: InicioNovo
  },
]

const router = new VueRouter({
  routes
})

export default router
