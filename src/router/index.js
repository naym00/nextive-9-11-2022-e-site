import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProductDetail from '../views/SingleProductDetail.vue'
import EidCollection from '../views/EidCollection.vue'
import KidCollection from '../views/KidCollection.vue'
import MenCollection from '../views/MenCollection.vue'
import NewCollection from '../views/NewCollection.vue'
import PujaCollection from '../views/PujaCollection.vue'
import WomenCollection from '../views/WomenCollection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/productdetails',
    name: 'productdetails',
    component: SingleProductDetail,
    props: true
  },
  {
    path: '/eidcollection',
    name: 'eidcollection',
    component: EidCollection,
    props: true
  },
  {
    path: '/kidcollection',
    name: 'kidcollection',
    component: KidCollection, 
    props: true
  },
  {
    path: '/mencollection',
    name: 'mencollection',
    component: MenCollection, 
    props: true
  },
  {
    path: '/newcollection',
    name: 'newcollection',
    component: NewCollection, 
    props: true
  },
  {
    path: '/pujacollection',
    name: 'pujacollection',
    component: PujaCollection, 
    props: true
  },
  {
    path: '/womencollection',
    name: 'womencollection',
    component: WomenCollection, 
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
