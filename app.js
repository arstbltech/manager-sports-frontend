window.App = window.App || {};

const routes = [
  {
        path: '/',
        component: window.App.MainLayout,
        children: [
            { path: '', component: window.App.HomeView },
            { path: 'institutional', component: window.App.InstView }
        ]
    },
  { path: '/admin', component: window.App.Admin },
  { path: '/login', component: window.App.Login },
  { path: '/register', component: window.App.Register}

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
app.component('navbar-component', window.App.Navbar);

app.use(router);
app.mount('#app');