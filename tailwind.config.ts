import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { vault: { 950: '#08090d', 900: '#101217', 800: '#191c23' } }, boxShadow: { glow: '0 0 42px rgba(120,119,255,.16)' } } }, plugins: [] };
export default config;
