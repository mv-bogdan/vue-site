import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage'
import about from '../components/about'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: mainPage,
        },
        {
            path: '/about',
            name: 'About',
            component: about,
        },
    ],
})
