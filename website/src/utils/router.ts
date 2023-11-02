import { createRouter, createWebHistory } from "vue-router"

const Chat = () => import('@/views/Chat/index.vue')
const Home = () => import('@/views/Home/index.vue')

const router = createRouter({
    // @ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
            children: [{
                path: '',
                component: Chat,
            },{
                path: ':id',
                component: Chat,
            }]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        }
    ]
})

export default router