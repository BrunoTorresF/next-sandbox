import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Home = () => (
  <Layout>
    <main>
      <Hero />
      <Hero />
    </main>

    <style jsx>{`
      main {
        padding: 5rem 0;
        border: 1px solid orange;
      }
    `}</style>
  </Layout>
)

export default Home
