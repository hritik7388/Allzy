'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const noLayoutRoutes = ['/signin', '/signup']
  const shouldHideLayout = noLayoutRoutes.includes(pathname.replace(/\/$/, ''))

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  )
}
