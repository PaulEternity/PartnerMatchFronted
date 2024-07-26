import { createApp } from 'vue'
import './style.css'
import {Button, Icon, NavBar, Tabbar, TabbarItem} from "vant";
import App from './App.vue'

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon)
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app');

// const app = createApp();
