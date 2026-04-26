import './globals.css'
import {Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: 'Day 2 with Next.js',
    description: 'we are learning about routing in Next.js and how to create different pages and navigate between them.',
  }
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
        </html>
    );
  }