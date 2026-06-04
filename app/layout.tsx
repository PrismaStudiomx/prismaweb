import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prisma Studio | Paginas Web Profesionales desde $6,500 MXN',
  description: 'Disenamos paginas web profesionales enfocadas en conversion. Desde $6,500 MXN. Entrega en 5-8 dias. SEO incluido. Pago unico, sin mensualidades.',
  keywords: ['desarrollo web', 'paginas web', 'landing page', 'ecommerce', 'punto de venta', 'Prisma Studio', 'Guadalajara', 'Mexico'],
  authors: [{ name: 'Prisma Studio' }],
  openGraph: {
    title: 'Prisma Studio | Paginas Web Profesionales desde $6,500 MXN',
    description: 'Tu negocio necesita una web que genere clientes, no solo visitas. SEO incluido. Entrega en 5-8 dias.',
    type: 'website',
    locale: 'es_MX',
  },
  icons: {
    icon: '/images/isotipo.png',
    apple: '/images/isotipo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
