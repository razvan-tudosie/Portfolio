export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700&display=swap'
                }
            ],
            script: [
                {
                  hid: "gtm",
                  children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NW7NCXJ4');`,
                  type: "text/javascript",
                },
              ],
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    devtools: {
        enabled: true
    }
})
