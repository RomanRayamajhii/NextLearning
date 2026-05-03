import './globals.css'
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
        <body className="font-sans antialiased">
          {children}
        </body>
        </html>
    );
  }
