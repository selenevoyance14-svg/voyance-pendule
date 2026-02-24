import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mystic: {
                    50: '#f5f0ff',
                    100: '#ede5ff',
                    200: '#dcceff',
                    300: '#c4a8ff',
                    400: '#a67aff',
                    500: '#8b4cfc',
                    600: '#7c2df4',
                    700: '#6b1de0',
                    800: '#5a19bb',
                    900: '#4a1698',
                    950: '#2d0b66',
                },
                celestial: {
                    50: '#f0f4ff',
                    100: '#dfe6ff',
                    200: '#c6d2ff',
                    300: '#9db0ff',
                    400: '#6d83ff',
                    500: '#4457ff',
                    600: '#2a30f5',
                    700: '#2023d8',
                    800: '#1d20ae',
                    900: '#1e2189',
                    950: '#131453',
                },
                gold: {
                    50: '#fefce8',
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#facc15',
                    500: '#d4a017',
                    600: '#b8860b',
                    700: '#92710c',
                    800: '#785d10',
                    900: '#664d14',
                    950: '#3c2c07',
                },
            },
            fontFamily: {
                heading: ['Cinzel', 'serif'],
                body: ['Raleway', 'sans-serif'],
            },
            backgroundImage: {
                'starfield': "radial-gradient(ellipse at 50% 0%, rgba(139,76,252,0.15) 0%, transparent 60%)",
                'mystic-gradient': 'linear-gradient(135deg, #0f0520 0%, #1a0a3e 30%, #12082a 60%, #0a0518 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'twinkle': 'twinkle 3s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(139,76,252,0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(139,76,252,0.6), 0 0 80px rgba(139,76,252,0.3)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
