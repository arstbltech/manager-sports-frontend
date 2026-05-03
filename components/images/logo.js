export default {
    props: {
        // Permitimos que el padre pase cualquier clase de Tailwind
        customClass: {
            type: String,
            default: 'text-[#06B6D4]' // Color por defecto
        }
    },
    template: `
       <svg :class="customClass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-4 h-4 text-white" data-fg-d3bl6="0.8:2.18060:/src/app/App.tsx:27:15:690:102:e:Zap::::::Cp7" data-fgid-d3bl6=":r5:"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
    `
}