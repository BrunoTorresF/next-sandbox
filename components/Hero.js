
const Hero = () => {
  return (
    <section>
    <h1 className="title">
    Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  <style jsx>{`
    a {
      color: inherit;
      text-decoration: none;
    }

    .title a {
      color: #0070f3;
      text-decoration: none;
    }

    .title a:hover,
    .title a:focus,
    .title a:active {
      text-decoration: underline;
    }

    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
    }

    .title,
    .description {
      text-align: center;
    }
  `}</style>
    </section>
  )
}

export default Hero;
