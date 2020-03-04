import Link from 'next/link';

const Header = () => {
	return (
		<header className="header container">
			<div className="navigation">
				<figure className="header-logo">
					<img src="https://i.picsum.photos/id/1025/50/50.jpg" />
				</figure>
				<nav className="header-nav">
					<Link href="/contact">
						<a className="nav-item">Contact Us</a>
					</Link>
					<Link href="/guests">
						<a className="nav-item">Guests</a>
					</Link>
				</nav>
			</div>
			<div className="actions">
				<button className="btn-cta subtle">Lang</button>
				<button className="btn-cta primary">Login</button>
			</div>
			<style jsx>{`
				.header {
					display: grid;
					grid-template-columns: repeat(6, auto);
					align-items: center;
          padding: 0 3.25em;
          border-bottom: 1px solid var(--spanish-grey-100);
				}

				.navigation {
					display: flex;
					align-items: center;
				}

				.header-logo {
					margin-right: 2em;
				}

				.header-nav {
					display: flex;
				}

				.nav-item {
					text-decoration: none;
					color: inherit;
				}

				.nav-item:not(:last-of-type) {
					margin-right: 2em;
				}

				.actions {
					display: flex;
					justify-content: flex-end;
					grid-column-start: 6;
					grid-column-end: 7;
					padding-right: 1.625em;
				}

				.btn-cta:nth-of-type(1) {
					margin-right: 0.75em;
				}
			`}</style>
		</header>
	);
};

export default Header;
