import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travelog',
  description: 'travel website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/totesbyria.appspot.com/o/anynull%2Flinkprev.png?alt=media&token=26209d51-1738-42f5-874f-d4f772758313&_gl=1*gy1dbs*_ga*NjcwOTQ0NjMyLjE2NzA3OTg2OTM.*_ga_CW55HF8NVT*MTY4NTc1NjAzOS41LjEuMTY4NTc1NjEyMS4wLjAuMA.." />
         </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
