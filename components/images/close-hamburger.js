export default {
    props: {
        // Permitimos que el padre pase cualquier clase de Tailwind
        customClass: {
            type: String,
            default: 'text-[#06B6D4]' // Color por defecto
        }
    },
    template:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6" data-fg-d3bl24="0.8:2.18060:/src/app/App.tsx:84:15:2450:25:e:X::::::TvS" data-fgid-d3bl24=":rh:"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`
}