window.App = window.App || {};

window.App.MainLayout = {
    template: `
        <div>
            <navbar-component></navbar-component>
            <main class="container mx-auto p-4">
                <router-view></router-view>
            </main>
        </div>
    `
};