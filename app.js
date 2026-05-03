import navbar from './components/navbar.js';
import MainLayout from './layout/MainLayout.js';
import Admin from './views/admin/admin.js';
import Login from './views/auth/login.js';
import Register from './views/auth/register.js';
import HomeView from './views/global/home.js';
import logo from './components/images/logo.js';
import star from './components/images/star.js';
import footer from './components/footer.js';
import arrowRight from './components/images/arrow-right.js';
import shield from './components/images/shield.js';
import starOutlined from './components/images/star-outlined.js';
import logoCyan from "./components/images/logo-cyan.js"
import user from './components/images/user.js';
import ticket from './components/images/ticket.js';
import calendar from './components/images/calendar.js';
import hamburger from './components/images/hamburger.js';
import closeHamburger from './components/images/close-hamburger.js';
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
app.component('navbar-component', navbar);
app.component('footer-component', footer)
//registro de imagenes 
app.component('logo', logo)
app.component('arrow-right', arrowRight)
app.component('shield', shield)
app.component('star', star)
app.component('star-outlined', starOutlined)
app.component('logo-cyan', logoCyan)
app.component('user', user)
app.component('ticket', ticket)
app.component('calendar', calendar)
app.component('hamburger', hamburger)
app.component('close-hamburger', closeHamburger)

app.use(router);
app.mount('#app');