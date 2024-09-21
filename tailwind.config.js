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
                'roboto': ['Roboto', 'sans-serif']
            },
            colors: {
                "primary": "#067E9A",
                "primary-dark": "#05718A",
                "primary-light": "#CDE5EA",
                "gray-light": "#FAFAFA",
                "gray-warm": "#F5F5F5",
                "gray-dark": "#EEEEEE",
                "secondary": "#333333",
                "secondary-dark": "#2C2C2C",
                "secondary-gray": "#4F4F4F"
            }
        },
    },

    plugins: [forms, 
        function({ addBase }) {
            addBase({
              'ul': { listStyleType: 'disc', paddingLeft: '1.25rem' },
              'ol': { listStyleType: 'decimal', paddingLeft: '1.25rem' },
              'li': { marginBottom: '0.5rem' },
            });
          }
    ],
};
