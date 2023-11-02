import {createApp} from 'vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'
import ContextMenu from '@imengyu/vue3-context-menu'
import piniaPluginPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from "./utils/router"

import './style.css'
import 'element-plus/dist/index.css'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'

const app = createApp(App)
app.use(
    createPinia().use(
        piniaPluginPersist
    )
).use(router
).use(ElementPlus
).use(ContextMenu
).mount('#app')
