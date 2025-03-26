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
                    DEFAULT: "#0792b2",
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
                    DEFAULT: "#f69333",
                    dark: "#2C2C2C",
                },
                light: "#c3f9ff",
                mid: "#58b3d0",
                accent: {
                    dark: "#1C2F33",
                    brown: "#332A1C",
                    primary: "#B33A07",
                    secondary: "#B37307"
                },
                success: "#4CAF50",  // Green for success
                warning: "#FFC107",  // Yellow for warning
                danger: "#E53935",   // Red for danger
            },
            boxShadow: {
                'primary': '-1px 0px 10px 0px rgba(7,146,178,1)', // Custom shadow
            },
            textShadow: {
                sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
            },
            backgroundImage: {
                'radial-fade': 'radial-gradient(circle, #cff4fd, #F5F5F5 75%)',
            },
            minWidth: {
                "1/2": "50%",
                "520": "520px"
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
        function ({ addUtilities }) {
            addUtilities({
              '.text-shadow-sm': {
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-md': {
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-lg': {
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
              },
            });
        },
    ],
};
