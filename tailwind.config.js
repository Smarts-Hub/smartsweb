export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-mint': '#00f9a3',
        'primary-blue': '#01aaf9',
        'primary-cyan': '#10cad7',
        'primary-emerald': '#02e4ba',
        'primary-sky': '#04bee3',
        'primary-teal': '#04d7c8',
        'primary-azure': '#01b4ee',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 249, 163, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 249, 163, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}