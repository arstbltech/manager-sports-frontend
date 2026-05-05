// views/auth/login.js
export default {
  template: `
  <div class="min-h-screen relative flex flex-col" style="font-family: 'Inter', sans-serif">

    <!-- Fondo: imagen estadio + overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0" style="background: linear-gradient(135deg, #0F172A 0%, #1e3a5f 35%, #0e4f6e 65%, #0F172A 100%);"></div>
      <!-- Glow blobs decorativos -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style="background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full" style="background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);"></div>
    </div>

    <!-- Navbar -->
    <header class="relative z-10 bg-[#0F172A] sticky top-0">
      <div class="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
            <logo class="w-4 h-4 text-white" :stroke-width="2.5"></logo>
          </div>
          <span class="text-white text-xl" style="font-weight: 700; letter-spacing: -0.02em">
            Oly<span class="text-[#06B6D4]">mpia</span>
          </span>
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/login" class="text-slate-400 hover:text-white text-sm transition-colors" style="font-weight: 500">
            Iniciar sesión
          </router-link>
          <router-link to="/register">
            <button class="bg-[#2563EB] text-white px-5 py-2 rounded-full text-sm hover:bg-[#1d4ed8] transition-all duration-200" style="font-weight: 600">
              Registrarse
            </button>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Hero con tarjeta glassmorphism centrada -->
    <main class="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
      <div class="w-full max-w-md">
        <!-- Glassmorphism card -->
        <div class="rounded-2xl p-8 sm:p-10"
             style="background: rgba(255,255,255,0.07); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 25px 60px rgba(0,0,0,0.4);">

          <h1 class="text-white text-center mb-2" style="font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 800; letter-spacing: -0.025em;">
            Iniciar sesión en <span style="background: linear-gradient(90deg, #2563EB, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Olympia</span>
          </h1>
          <p class="text-slate-300 text-center text-sm mb-8" style="font-weight: 400">
            Accede a tus boletos y eventos deportivos.
          </p>

          <!-- Correo -->
          <div class="mb-4">
            <div class="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:border-[#2563EB] transition-colors duration-200">
              <svg class="w-5 h-5 text-[#06B6D4] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <input
                v-model="email"
                type="email"
                placeholder="Correo Electrónico"
                class="bg-transparent text-white placeholder-slate-400 text-sm flex-1 outline-none"
                style="font-weight: 400"
              />
            </div>
          </div>

          <!-- Contraseña -->
          <div class="mb-6">
            <div class="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:border-[#2563EB] transition-colors duration-200">
              <svg class="w-5 h-5 text-[#06B6D4] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Contraseña"
                class="bg-transparent text-white placeholder-slate-400 text-sm flex-1 outline-none"
                style="font-weight: 400"
              />
              <a href="#" class="text-[#06B6D4] text-xs hover:text-white transition-colors flex-shrink-0" style="font-weight: 500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <!-- Error message -->
          <p v-if="errorMsg" class="text-red-400 text-xs text-center mb-4">{{ errorMsg }}</p>

          <!-- Botón CTA -->
          <button
            @click="handleLogin"
            class="group w-full text-white py-4 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            style="background: linear-gradient(135deg, #2563EB, #1d4ed8); box-shadow: 0 6px 30px rgba(37,99,235,0.5); font-weight: 700"
          >
            Iniciar sesión
            <arrow-right class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"></arrow-right>
          </button>

          <!-- Link registro -->
          <p class="text-slate-400 text-center text-sm mt-6" style="font-weight: 400">
            ¿Aún no tienes cuenta?
            <router-link to="/register" class="text-[#06B6D4] hover:text-white transition-colors" style="font-weight: 600">
              Registrarse ahora
            </router-link>
          </p>
        </div>
      </div>
    </main>

    <!-- Stats strip -->
    <div class="relative z-10 bg-[#0F172A] py-10">
      <div class="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-2xl" style="font-weight: 800; background: linear-gradient(90deg, #2563EB, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            {{ stat.value }}
          </p>
          <p class="text-slate-400 text-xs mt-1" style="font-weight: 500">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer-component></footer-component>
  </div>
  `,
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errorMsg: '',
      stats: [
        { value: '100%', label: 'Trazabilidad de pagos' },
        { value: 'Real-time', label: 'Control de asistencia' },
        { value: 'Multi-deporte', label: 'Métricas adaptadas' },
        { value: '24/7', label: 'Soporte' },
      ]
    }
  },
  methods: {
    handleLogin() {
      if (!this.email || !this.password) {
        this.errorMsg = 'Por favor completa todos los campos.';
        return;
      }
      this.errorMsg = '';
      // Aquí va tu lógica de autenticación
      console.log('Login:', this.email, this.password);
    }
  }
};