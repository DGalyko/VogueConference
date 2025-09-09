import { terser } from 'rollup-plugin-terser';

export default {
    input: '.assets/js/app.js',

    watch: {
        include: '.assets/js/**/*',
        clearScreen: false
    },

    plugins: [
        terser()
    ],

    output: {
        file: '.',
        format: 'iife'
    }
};
