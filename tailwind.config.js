/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('./src/config')],

    content: ['./res/**/*.{html,js}'],

    plugins: [require('./src/plugin')],
}
