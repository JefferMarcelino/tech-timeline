import './globals.css'
// import Header from '@/components/Header'

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
    <html lang="en">
      <body className="bg-[#252627] text-[#F6F5F7] transition-colors duration-500 py-10">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
