/** @type {import('tailwindcss/types').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './assets/**/*.scss',
        './assets/**/*.css',
    ],
    theme: {
        extend: {
            fontFamily: {
                mulish: ["Mulish", "sans-serif"]
            },
            colors: {
                'brand-primary': '#1680EA',
                'brand-black': '#0A0047',
                'brand-grey': '#8D8D8D'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
