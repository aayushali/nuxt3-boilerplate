import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],


    alias: {
        '@vue/devtools-api': '@vue/devtools-api',
    },

    buildModules: [
        "@pinia/nuxt",
    ],
    build: {
        transpile: ['@heroicons/vue', '@headlessui/vue'],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        // @ts-ignore
        // ssr: { noExternal: ["moment"]},
        logLevel: "info",
    },

    publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000',
        APP_NAME: process.env.APP_NAME || 'Easy Path Lab',
        APP_ENV: process.env.APP_ENV || 'local',
        API_URL: process.env.API_URL || 'localhost:8000',
        APP_URL: process.env.APP_URL || 'localhost:3000',
        CUSTOMER_APP_URL: process.env.CUSTOMER_APP_URL || 'https://dev.easypathlab.com',
    }
});
