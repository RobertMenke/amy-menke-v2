const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gradientColorStops: (theme) => ({
                'cyan-500': '#06B6D4',
                'fuchsia-500': '#d946ef',
                'orange-400': '#fb923c',
                'royal-blue': '#2B4BAF',
                'dark-blue': '#111827'
            }),
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            textColor: {
                'fuchsia-500': '#d946ef'
            },
            colors: {
                'royal-blue': '#2B4BAF',
                'dark-blue': '#111827',
                'orange-400': '#fb923c'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
