import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserRegisterPage from "../pages/UserRegisterPage.vue";


const routes = [
    {path: '/', component: Index},
    {path: '/team', title: '找队伍', component: TeamPage},
    {path: '/user', title: '个人信息', component: UserPage},
    {path: '/user/update', title: '个人信息更新', component: UserUpdatePage},
    {path: '/user/team/create', title: '我创建的队伍', component: UserTeamCreatePage},
    {path: '/user/team/join', title: '我加入的队伍', component: UserTeamJoinPage},
    {path: '/search', title: '找伙伴', component: SearchPage},
    {path: '/user/edit', title: '编辑信息', component: UserEditPage},
    {path: '/user/list', title: '用户列表', component: SearchResultPage},
    {path: '/user/login', tile: '登录', component: UserLoginPage},
    {path: '/user/register', tile: '注册', component: UserRegisterPage},
    {path: '/team/add', tile: '加入队伍', component: TeamAddPage},
    {path: '/team/update', tile: '更新队伍', component: TeamUpdatePage},

]

export default routes;