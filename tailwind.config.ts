/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: 0,
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-2px)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(2px)',
          },
        },
        orbit: {
          '0%': {
            transform:
              'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
          },
          '100%': {
            transform:
              'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-1px) rotate(2deg)' },
        },
        wake: {
          '0%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
            width: '0.5rem',
            opacity: '0.5',
          },
          '50%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(180deg)',
            width: '1.5rem',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(360deg)',
            width: '0.5rem',
            opacity: '0.5',
          },
        },
        anchor: {
          '0%, 100%': {
            transform: 'rotate(-5deg) translateY(0)',
          },
          '50%': {
            transform: 'rotate(5deg) translateY(-2px)',
          },
        },
        chain: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          },
          '50%': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'right',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shake: 'shake 0.5s ease-in-out',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        wave: 'wave 1.5s ease-in-out infinite',
        wake: 'wake 1.5s linear infinite',
        anchor: 'anchor 1.5s ease-in-out infinite',
        chain: 'chain 1.5s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate, require('tailwindcss-animate')], // Sử dụng biến đã nhập
};

export default config; // Xuất cấu hình
