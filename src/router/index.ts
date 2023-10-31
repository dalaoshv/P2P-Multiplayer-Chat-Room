import { createRouter, createWebHistory } from "vue-router"

const Home = () => import('@/views/Home/index.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        }
    ]
})

export default router