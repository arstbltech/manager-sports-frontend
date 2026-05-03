export default {
    props: {
        // Permitimos que el padre pase cualquier clase de Tailwind
        customClass: {
            type: String,
            default: 'text-[#06B6D4]' // Color por defecto
        }
    },
    template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6" data-fg-d3bl25="0.8:2.18060:/src/app/App.tsx:86:15:2508:28:e:Menu::::::D5X5" data-fgid-d3bl25=":rh:"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`
}