import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'

export default function DefaultLayout({ page, children }) {
  return (
    <>
      <Helmet>
        <title>{page?.title}</title>
      </Helmet>
      <div className="min-h-screen bg-zinc-100">{children}</div>
    </>
  )
}
