import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage'
import projects from '../components/projects'


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
            path: '/projects',
            name: 'projects',
            component: projects,
        },
    ],
})
