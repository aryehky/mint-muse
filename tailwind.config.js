/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                candy: {
                    pink: '#FF9EC8',
                    purple: '#9381FF',
                    blue: '#89CFF0',
                    mint: '#98FF98',
                    yellow: '#FFE5B4',
                    orange: '#FFB347',
                    red: '#FF6B6B',
                },
                primary: '#9381FF', // Purple as primary
                secondary: '#FF9EC8', // Pink as secondary
                dark: '#4A154B', // Deep purple for dark mode
                light: '#FFF5F7', // Light pink for light mode
            },
            fontFamily: {
                sans: ['Fredoka', 'sans-serif'],
                display: ['Fredoka', 'cursive'],
            },
            backgroundImage: {
                'candy-gradient': 'linear-gradient(to bottom, #FFB7D5, #FFC8DD, #FFE5F1)',
                'candy-stripe': 'repeating-linear-gradient(45deg, #FF6B6B, #FF6B6B 10px, #ffffff 10px, #ffffff 20px)',
            },
            borderWidth: {
                'candy': '8px',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 3s ease-in-out infinite',
                'float-slow': 'float 4s ease-in-out infinite',
                'float-slower': 'float 5s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}