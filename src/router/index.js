import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioNovo from '../views/InicioNovo.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'InicioNovo',
    component: InicioNovo
  },

  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
]

const router = new VueRouter({
  routes
})

export default router
