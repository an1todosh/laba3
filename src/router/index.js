import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Culture from '../views/Culture/Culture.vue'
import Economy from '../views/Economy/Economy.vue'
import Politics from '../views/Polits/Politics.vue'
import Header from '../components/Header.vue'
import carouseliitem from '../components/carouselItem.vue'
import carousel from '../components/carousel.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Culture',
        name: 'Culture',
        component: Culture,
    },
    {
        path: '/Economy',
        name: 'Economy',
        component: Economy,
    },
    {
        path: '/Politics',
        name: 'Politics',
        component: Politics,
    },
    {
        path: '/Header',
        name: 'Header',
        component: Header,
    },
    {
        path: '/carouseliitem',
        name: 'carouseliitem',
        component: carouseliitem,
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: carousel,
    },
]

const router = new VueRouter({
    routes,
})

export default router