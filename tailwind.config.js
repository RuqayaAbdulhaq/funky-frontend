import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'roboto': ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: "#067E9A",
                    dark: "#05718A",
                    light: "#CDE5EA",
                },
                neutral: {
                    light: "#FAFAFA",
                    warm: "#F5F5F5",
                    DEFAULT: "#EEEEEE",
                    dark: "#333333",
                },
                secondary: {
                    DEFAULT: "#4F4F4F",
                    dark: "#2C2C2C",
                },
                success: "#4CAF50",  // Green for success
                warning: "#FFC107",  // Yellow for warning
                danger: "#E53935",   // Red for danger
            },
        },
    },

    plugins: [
        forms,
        function({ addBase }) {
            addBase({
                'ul': { listStyleType: 'disc', paddingLeft: '1.25rem' },
                'ol': { listStyleType: 'decimal', paddingLeft: '1.25rem' },
                'li': { marginBottom: '0.5rem' },
            });
        },
    ],
};
