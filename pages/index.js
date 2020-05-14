import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Home = () => (
  <Layout>
    <main>
      <Hero />
      <section>
        <div className="headline">
          <h3 className="headline-title">
            Hosting guests will no longer require any effort.
          </h3>
          <br />
          <strong>
            We'll take care of everything for you, from start to finish.
          </strong>
          <div className="text-component headline-description">
            <p>
              We help you host with a complete and simple solution designed for
              people who don't have the time. The satisfaction of your guests is
              our top priority.
            </p>
          </div>
        </div>
      </section>
      <aside>
        <div className="announcement container">
          <div className="announcement-inset">
            <figure className="announcement-figure">
              <img src="https://picsum.photos/id/1039/80/87" className="lazy" />
            </figure>
            <div className="text-component">
              Since the beginning, [client] has become a
              <strong>family owned business.</strong>
            </div>
          </div>
        </div>
      </aside>
    </main>
    <style jsx>{`
      main {
        scroll-behavior: smooth;
      }

      .headline {
        padding: 4.0625em 0;
        text-align: center;
      }

      .headline-title {
        font-size: 1.6128em;
        line-height: 1.25em;
      }

      .headline-description {
        font-size: 1rem;
        margin: 1.25em auto 0;
      }

      .text-component {
        p {
          line-height: 1.818;
          color: var(--spanish-grey-600);
          margin-bottom: 0.75em;
        }

        strong {
          color: var(--spanish-grey-800);
        }

        & > :first-child {
          margin-top: 0;
        }

        & > :last-child {
          margin-bottom: 0;
        }
      }

      .announcement {
        padding: 2.5em 0;
        background-color: var(--spanish-grey-100);

        img {
          max-width: 80px;
        }
      }

      .announcement-inset {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: inherit;
      }

      .announcement-text {
        margin-top: 0;
        font-size: 1.344em;
        line-height: 1.3636em;
        width: auto;
        min-width: 55px;
        margin-left: 15px;
      }
    `}</style>
  </Layout>
);

export default Home;
