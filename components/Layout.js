import Header from './Header'
import Head from 'next/head'

const Layout = ({ children, page }) => {
  return (
        <div>
          <Head>
            <title>Financial Center - {page}</title>
            <meta name="description" content="Financial Private Center" />
          </Head>
          <Header/>
          {children}
        </div>
    )
}

export default Layout