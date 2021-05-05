import React from 'react';
import '../styles/App.scss';
import BookSearch from '../components/bookSearch/BookSearch';

function Home() {
	return (
		<div>
			<header className="header">
				<div className="header--content">
					<h1>My Good Reads</h1>
				</div>
			</header>
			<main>
				<div className="book-search-container">
					<BookSearch />
				</div>
				<div className="wish-list"></div>
			</main>
		</div>
	);
}

export default Home;
