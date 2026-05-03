export default {
    props: {
        // Permitimos que el padre pase cualquier clase de Tailwind
        customClass: {
            type: String,
            default: 'text-[#06B6D4]' // Color por defecto
        }
    },
    template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket w-9 h-9 text-[#06B6D4]" data-fg-d3bl95="0.8:2.18060:/src/app/App.tsx:341:19:11762:119:e:Icon" data-fgid-d3bl95=":r1v:"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>`
}