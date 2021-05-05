import React from 'react';
import BookSearchForm from './BookSearchInput';
import BooksSearchDisplay from './BookSearchDisplay';

const BookSearch = () => {
	return (
		<div className="book-search">
			<BookSearchForm />
			<BooksSearchDisplay />
		</div>
	);
};

export default BookSearch;
