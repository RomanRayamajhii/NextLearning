import './globals.css'
import {Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: 'Day 1 with Next.js',
    description: 'This is the main layout for the app section.',
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