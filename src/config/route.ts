import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";


const routes = [
    {path: '/', component: Index},
    {path: '/team',title:'找队伍', component: TeamPage},
    {path: '/user', title:'个人信息',component: UserPage},
    {path: '/search', title: '找伙伴',component: SearchPage},
    {path: '/user/edit', title: '编辑信息',component: UserEditPage},
    {path: '/user/list', title:'用户列表',component: SearchResultPage},
    {path: '/user/login', tile:'登录',component: UserLoginPage},

]

export default routes;