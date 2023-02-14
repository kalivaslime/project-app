import '../styles/global.css'
// import { Inter } from '@next/font/google'

// const inter = Inter({
//   variable: '--font-inter',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
    <head /> will contain the components returned by the nearest parent
    head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
  */}
      <head />
      <body className='gradient h-screen w-screen p-6'>{children}</body>
    </html>
  )
}
