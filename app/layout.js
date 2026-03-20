import './globals.css'

export const metadata = {
  title: 'Abeydon — Heavy Metal Clásico',
  description: 'Sitio oficial de Abeydon, banda de Heavy Metal Clásico argentina.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}