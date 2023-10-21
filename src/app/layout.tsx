import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matthies\' Portfolio',
  description: 'Created using Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
