import {createApp} from 'vue'
import './style.css'
import {Button, Icon, NavBar, Tabbar, TabbarItem} from "vant";
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from "./config/route";



const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon)
app.use(Tabbar);
app.use(TabbarItem);

// const app = createApp();



const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router);
app.mount('#app');