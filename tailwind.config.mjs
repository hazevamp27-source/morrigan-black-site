/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#00E5CC',
        'primary-dim': '#00C4AE',
        'primary-container': '#005F56',
        'on-primary': '#000000',
        'on-surface': '#ffffff',
        'on-surface-variant': '#c1c6d5',
        surface: '#0a0a0a',
        'surface-container': '#181818',
        'surface-container-low': '#121212',
        'surface-container-high': '#1f1f1f',
        'surface-container-highest': '#32353c',
        'surface-container-lowest': '#050505',
        'surface-variant': '#222222',
        'surface-bright': '#2a2a2a',
        'outline-variant': '#414753',
        error: '#ffb4ab',
        'error-dim': '#d73357',
        'youtube-red': '#FF0000',
        'patreon-coral': '#f96854',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
