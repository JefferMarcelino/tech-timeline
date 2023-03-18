import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Tech Timeline',
  description: 'Explore the history of technology with our interactive timeline.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
