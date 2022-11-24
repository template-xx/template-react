import type { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import DefaultLayout from '../layouts/default'

interface LayoutProps {
  page: Record<string, any>
  children: ReactNode
}

export default function PageLayout({ page, children }: LayoutProps) {
  return (
    <DefaultLayout page={page}>
      <Header />
      <main>{children}</main>
      <Footer copyright={null} />
    </DefaultLayout>
  )
}
