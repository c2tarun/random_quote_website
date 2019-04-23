import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home.vue'
import RandomQuote from './components/RandomQuote.vue'
import SubmitQuote from './components/SubmitQuote.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/random-quote',
            name: 'random-quote',
            component: RandomQuote
        },
        {
            path: '/submit-quote',
            name: 'submit-quote',
            component: SubmitQuote
        }
    ]
})