import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        brand: {
          blue: '#004080',
          lightBlue: '#85C1E9',
          dark: '#002040',
          light: '#F8FBFF',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'swoop-in': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'shine': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'swing-in': {
          '0%': { 
            transform: 'translateX(200%) rotate(10deg)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateX(-20px) rotate(-5deg)',
            opacity: '0.8'
          },
          '75%': {
            transform: 'translateX(10px) rotate(2deg)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'translateX(0) rotate(0)',
            opacity: '1'
          },
        },
        'office-walk': {
          '0%': { 
            transform: 'scale(1.0) translate(0%, 0%)',
          },
          '50%': {
            transform: 'scale(1.15) translate(-2%, -1%)',
          },
          '100%': { 
            transform: 'scale(1.3) translate(-4%, -2%)',
          },
        },
        'modern-office-walk': {
          '0%': { 
            transform: 'scale(1.0) translate(0%, 0%)',
          },
          '33%': {
            transform: 'scale(1.1) translate(-1%, 0%)',
          },
          '66%': {
            transform: 'scale(1.2) translate(-2%, -1%)',
          },
          '100%': { 
            transform: 'scale(1.3) translate(-3%, -1%)',
          },
        },
        'luxury-office-zoom': {
          '0%': { 
            transform: 'scale(1.0) translate(0%, 0%)',
            filter: 'brightness(1.0)',
          },
          '50%': {
            transform: 'scale(1.2) translate(-1.5%, -1%)',
            filter: 'brightness(1.05)',
          },
          '100%': { 
            transform: 'scale(1.25) translate(-3%, -1.5%)',
            filter: 'brightness(1.1)',
          },
        },
        'bounce-and-swing': {
          '0%': { 
            transform: 'translateX(200%) translateY(-50px) rotate(15deg) scale(0.8)',
            opacity: '0'
          },
          '20%': {
            transform: 'translateX(100%) translateY(30px) rotate(-10deg) scale(1.1)',
            opacity: '0.4'
          },
          '40%': {
            transform: 'translateX(50%) translateY(-20px) rotate(5deg) scale(0.9)',
            opacity: '0.7'
          },
          '60%': {
            transform: 'translateX(10%) translateY(10px) rotate(-3deg) scale(1.05)',
            opacity: '0.9'
          },
          '80%': {
            transform: 'translateX(0%) translateY(-5px) rotate(1deg) scale(0.98)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(0) translateY(0) rotate(0) scale(1)',
            opacity: '1'
          },
        },
        'stagger-appear': {
          '0%': { 
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '40%': {
            transform: 'translateY(-10px)',
            opacity: '0.5'
          },
          '70%': {
            transform: 'translateY(5px)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'fade-in-up': {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'slide-in-left': {
          '0%': { 
            transform: 'translateX(-30px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        'slide-in-right': {
          '0%': { 
            transform: 'translateX(30px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        'scale-in': {
          '0%': { 
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-66.666%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'swoop-in': 'swoop-in 1.5s ease-out forwards',
        'shine': 'shine 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'swing-in': 'swing-in 1.5s ease-out forwards',
        'bounce-and-swing': 'bounce-and-swing 2.5s ease-out forwards',
        'stagger-appear': 'stagger-appear 1.2s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards', 
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'office-walk': 'office-walk 20s ease-in-out infinite alternate',
        'modern-office-walk': 'modern-office-walk 30s ease-in-out infinite alternate',
        'luxury-office-zoom': 'luxury-office-zoom 25s ease-in-out infinite alternate',
        'slide': 'slide 22.5s linear infinite',
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
