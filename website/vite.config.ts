import path from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from "unplugin-vue-components/dist/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/P2P-Multiplayer-Chat-Room/',
    build: {
        outDir: '../docs' // 导出到项目根目录，人工部署Github Page
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // Vite路径别名配置
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        // 类型： string[] 导入时想要省略的扩展名列表。
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    }
})
