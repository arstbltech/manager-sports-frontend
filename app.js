import Navbar from './components/navbar.js';
import MainLayout from './layout/MainLayout.js';
import Admin from './views/admin/admin.js';
import Login from './views/auth/login.js';
import Register from './views/auth/register.js';
import HomeView from './views/global/home.js';

const routes = [
  {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: HomeView },
        ]
    },
  { path: '/admin', component: Admin },
  { path: '/login', component: Login },
  { path: '/register', component: Register}

];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({
  data() {
    return {
      version: "1.0.0"
    }
  }
});

//registro de componentes
app.component('navbar-component', Navbar);

app.use(router);
app.mount('#app');