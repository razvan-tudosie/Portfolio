export default defineNuxtConfig({
    app: {
        baseURL: '/Portfolio/',
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700&display=swap'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    devtools: {
        enabled: true
    }
})
