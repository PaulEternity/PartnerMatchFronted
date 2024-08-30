import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/dist/vite';
import {VantResolver} from "unplugin-vue-components/dist/resolvers";
// import {VantResolver} from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    server:{
        proxy:{
            'api':{
                target:'http://localhost:8080',
                changeOrigin:true,
                ws:true,
                rewrite:(path)=>{
                    return path.replace(/\/api/,'')
                }
            }
        }
    }
});