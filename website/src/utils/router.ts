import { createRouter, createWebHistory } from "vue-router"

const Home = () => import('@/views/Home/index.vue')

const router = createRouter({
    // @ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
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