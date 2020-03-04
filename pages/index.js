import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Home = () => (
  <Layout>
    <main>
      <Hero />
    </main>
    <style jsx>{`
      main {
        padding-top: 80px;
        scroll-behavior: smooth;
      }
    `}</style>
  </Layout>
)

export default Home
