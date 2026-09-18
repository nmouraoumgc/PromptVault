import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'PromptVault — Prompts that perform', description: 'A curated library of production-grade AI prompts.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
