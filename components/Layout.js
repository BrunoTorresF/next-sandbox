import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="container">
      <Head>
        <title>SANDBOX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <style jsx global>{`
        .container {
          display: grid;
          grid-template-areas:
            "header header header header"
            "main main main main"
            "footer footer footer footer";
          grid-template-rows: 10vh 1fr 15vh;
          width: calc(100% - 1.5em);
          margin: 0 auto;

          > header {
            grid-area: header;
          }

          > main {
            grid-area: main;
          }

          > footer {
            grid-area: footer;
          }
        }
    `}</style>
    </div>
  )
}

export default Layout;
