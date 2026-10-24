/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1120', panel: '#111827', accent: '#22D3EE', ink: '#F8FAFC', muted: '#94A3B8', line: '#263244', blue: '#3B82F6'
      },
      fontFamily: {
        display: ['Sora Variable', 'Inter Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
};
