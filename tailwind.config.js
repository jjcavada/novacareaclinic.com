/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic Mapping to CSS Variables */
        background: 'var(--color-bg-light)',
        foreground: 'var(--color-text-charcoal)',

        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          accessible: 'var(--color-primary-accessible)',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          foreground: '#ffffff'
        },

        /* Warm Neutrals */
        warm: {
          50: 'var(--color-warm-50)',
          100: 'var(--color-warm-100)',
          200: 'var(--color-warm-200)',
          300: 'var(--color-warm-300)',
          400: 'var(--color-warm-400)',
          500: 'var(--color-warm-500)',
          600: 'var(--color-warm-600)',
          700: 'var(--color-warm-700)',
          800: 'var(--color-warm-800)',
          900: 'var(--color-warm-900)',
        },

        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',

        /* Direct Text Colors */
        'text-charcoal': 'var(--color-text-charcoal)',
        'text-gray': 'var(--color-text-gray)',
        'text-muted': 'var(--color-text-muted)',
        'text-primary': 'var(--color-text-charcoal)',
        'text-secondary': 'var(--color-text-gray)',

        /* Background variants */
        'bg-light': 'var(--color-bg-light)',
        'bg-white': 'var(--color-bg-white)',
        'bg-cream': 'var(--color-bg-cream)',

        /* Legacy support */
        card: 'var(--color-bg-white)',
        muted: {
          DEFAULT: 'var(--color-warm-100)',
          foreground: 'var(--color-warm-600)',
        },
        warning: '#d97706',
        error: '#dc2626',
        'error-foreground': '#ffffff',
        'healing-teal': '#0d9488',
        'healing-teal-foreground': '#ffffff',
      },
      fontFamily: {
        /* Primary fonts - DM Serif Display for headlines, Plus Jakarta Sans for body */
        'headline': ['"DM Serif Display"', 'Georgia', 'serif'],
        'body': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],

        /* Legacy font class aliases - all map to the new fonts */
        'brand-headline': ['"DM Serif Display"', 'Georgia', 'serif'],
        'value-prop': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'cta': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'content': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'accent': ['"DM Serif Display"', 'Georgia', 'serif'],

        /* Override system defaults */
        'sans': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'serif': ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
        'soft': 'var(--shadow-soft)',
        'lift': 'var(--shadow-lift)',
        'glow': 'var(--shadow-glow)',
        'healing': '0 4px 14px -3px rgba(13, 148, 136, 0.15)',
        'healing-lg': '0 10px 40px -10px rgba(13, 148, 136, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'healing': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionProperty: {
        'healing': 'all',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'soft-pulse': 'softPulse 2s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.02)' },
        },
      },
    }
  },
  plugins: []
}
