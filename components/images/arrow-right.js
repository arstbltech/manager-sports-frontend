export default {
    props: {
        // Permitimos que el padre pase cualquier clase de Tailwind
        customClass: {
            type: String,
            default: 'text-gray-800' // Color por defecto
        }
    },
    template: `<svg :class="customClass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-fg-d3bl70="0.8:2.18060:/src/app/App.tsx:243:15:7842:94:e:ArrowRight::::::s5N" data-fgid-d3bl70=":r11:"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`
}