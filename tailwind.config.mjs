import site from './site.config.json' with { type: 'json' };

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: site.theme.colors.dark,
          ink: site.theme.colors.ink,
          accent: site.theme.colors.accent,
          accentHover: site.theme.colors.accentHover,
          primary: site.theme.colors.primary,
          muted: site.theme.colors.muted,
          surface: site.theme.colors.surface,
        },
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
        heading: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
