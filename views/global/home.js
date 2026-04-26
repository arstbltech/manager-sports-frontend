// Usamos window para que sea accesible desde app.js
window.HomeView = {
  template: `
    <div>
      <h2>Dashboard del Sistema</h2>
      <p>Bienvenido. Los datos se sincronizan vía API.</p>
      <button @click="test">Probar Sistema</button>
    </div>
  `,
  methods: {
    test() {
      alert("¡Módulo Home funcionando!");
    }
  }
};