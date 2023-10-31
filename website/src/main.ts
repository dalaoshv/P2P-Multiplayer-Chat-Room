import { createApp } from 'vue'
import router from "./router"
import App from './App.vue'
import ElementPlus from 'element-plus'
import ContextMenu from '@imengyu/vue3-context-menu'

import './style.css'
import 'element-plus/dist/index.css'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'

const app = createApp(App)
app.use(router).use(ElementPlus).use(ContextMenu).mount('#app')
