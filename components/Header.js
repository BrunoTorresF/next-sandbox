import Link from 'next/link';

const Header = () => {
  return (
    <header className="header" >
      <div className="navigation">
        <div>
          <img />
        </div>
        <nav>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
          <Link href="/guests">
            <a>Guests</a>
          </Link>
        </nav>
      </div>
      <div className="actions">
        <button className="header-cta subtle">
          Lang
        </button>
        <button className="header-cta primary">
          Login
        </button>
      </div>
      <style jsx>{`
    .header {
      border: 1px solid blue;
      display: grid;
      grid-template-columns: 3fr 2fr;
      column-gap: 75vw;
    }

    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .actions {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .header-cta {
      width: auto;
      padding: 0.9375em 1.5625em;
      margin-bottom: inherit;
    }

  `}</style>
    </header>
  )
}

export default Header;
