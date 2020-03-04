import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="layout container">
      <Head>
        <title>SANDBOX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <style jsx global>{`
        .layout {
          display: grid;
          grid-template-areas:
            "header header header header"
            "main main main main"
            "footer footer footer footer";
          grid-template-rows: 10vh 1fr 15vh;

          > header {
            grid-area: header;
            position: sticky;
            top: 0;
            background-color: white;
            z-index: 1;
          }

          > main {
            grid-area: main;
          }

          > footer {
            grid-area: footer;
          }

          .container {
            width: calc(100% - 1.5em);
            margin: 0 auto;
          }
        }
    `}</style>
    </div>
  )
}

export default Layout;
