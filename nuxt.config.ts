// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/image',
        '@pinia/nuxt'
    ],
    app: {
        head: {
            title: "WGDashboard | Simple dashboard to manage WireGuard VPN",
            htmlAttrs: {
                lang: 'en',
            },
            script: [
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-BXCJGLTK17"
                }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: 'https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Logos/Logo-2-Rounded-128x128.png' },
            ],
        },
    }
})