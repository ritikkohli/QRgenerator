import './global.css'

export const metadata = {
  title: 'QR code',
  description: 'created manually',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}