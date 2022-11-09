import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

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
      <div className="min-h-screen">{children}</div>
    </>
  )
}
