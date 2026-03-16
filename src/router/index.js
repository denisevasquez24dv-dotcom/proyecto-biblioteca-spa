import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

Vue.use(VueRouter)

const routes = [
{ path: '/', component: Inicio },
  { path: '/libros', component: ListaLibros },
  { 
    path: '/libro/:id', 
    component: DetalleLibro,
    props: true 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router