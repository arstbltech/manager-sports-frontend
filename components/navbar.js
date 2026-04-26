window.App = window.App || {};

window.App.Navbar = {
    template: `
    <nav class="flex items-center justify-between bg-red-500 p-4 text-white shadow-lg">
        <div class="font-bold text-lg">Mi Aplicación</div>
        
        <div class="flex gap-6">
            <router-link to="/" class="hover:underline">Inicio</router-link>
            <router-link to="/institutional" class="hover:underline">Vista Institucional</router-link>
            <router-link to="/register" class="hover:underline">Registro</router-link>
            <router-link to="/login" class="bg-white text-red-500 px-4 py-1 rounded font-bold hover:bg-gray-100">Login</router-link>
        </div>
    </nav>
    `
};