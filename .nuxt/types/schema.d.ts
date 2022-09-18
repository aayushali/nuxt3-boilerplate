import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     API_BASE_URL: string,

    APP_NAME: string,

    APP_ENV: string,

    API_URL: string,

    APP_URL: string,

    CUSTOMER_APP_URL: string,

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
  interface PublicRuntimeConfig {
     API_BASE_URL: string,

    APP_NAME: string,

    APP_ENV: string,

    API_URL: string,

    APP_URL: string,

    CUSTOMER_APP_URL: string,
  }
}