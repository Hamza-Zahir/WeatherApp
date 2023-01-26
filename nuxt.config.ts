// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // target: 'static',

    runtimeConfig: {
      // Private keys are only available on the server
      // examplePrivateKey : "PrivateExample"
      // Public keys that are exposed to the client
      public: {
        WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
      }
    },
    modules: [
      '@nuxtjs/tailwindcss'
  ]
   
})


//  "dependencies": {
//   "@tailwindcss/aspect-ratio": "^0.4.0",
//   "@tailwindcss/forms": "^0.5.0",
//   "@tailwindcss/line-clamp": "^0.3.1",
//   "@tailwindcss/typography": "^0.5.2",
//   "tailwindcss": "^3.0.23"
// }
