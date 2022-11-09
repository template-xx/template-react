import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'

interface LayoutProps {
  page: Record<string, any>
  children: ReactNode
}

export default function DefaultLayout({ page, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{page?.title}</title>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        {children}
        <Footer copyright={null} />
      </div>
    </>
  )
}
