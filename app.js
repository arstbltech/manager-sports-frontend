const routes = [
  { path: '/', component: window.HomeView },
  { path: '/admin', component: window.Admin }
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

app.use(router);
app.mount('#app');