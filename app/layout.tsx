import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: "Akankha's Blog",
  description: 'Generated by Akankha Haidar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">{children}</body>
    </html>
  )
}
