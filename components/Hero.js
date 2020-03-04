const Hero = () => {
  return (
    <section className="hero container">
      <figure className="hero-figure">
        <img  className="lazy" src="https://picsum.photos/id/1020/410"/>
      </figure>
      <div className="hero-inset">
        <div>
          <h1 className="hero-title">Your listing is in good hands</h1>
        </div>
        <div className="hero-cta">
          <button type="button" className="btn-cta primary">Contact</button>
          <button type="button" className="btn-cta subtle">Host a home</button>
        </div>
      </div>
  <style jsx>{`
    .hero {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      padding: 4.0625em 0;
      max-width: 64rem;
      border-bottom: 1px solid var(--spanish-grey);
    }

    .hero-figure {
      position: relative;
      padding: 0;
      margin: 0 auto;
      text-align: center;
      max-width: 500px;
      flex: 1;
    }

    .lazy {
      transition: opacity 260ms ease-in-out;
      max-width: 100%;
    }

    .hero-inset {
      padding-bottom: 2em;
      width: 60%;
    }

    .hero-title {
      font-size: 3.712em;
      text-align: inherit;
      max-width: 90%;
      padding: 0.5em 0;
      font-weight: 900;
      line-height: 1.125em;
      color: var(--payne-grey);
    }

    .hero-cta {
      width: auto;
    }

    .btn-cta:nth-of-type(1) {
      margin-right: 1em;
    }

  `}</style>
    </section>
  )
}

export default Hero;
