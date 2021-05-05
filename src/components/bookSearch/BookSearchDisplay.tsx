import React from 'react';
import { useSelector } from 'react-redux';
import { getSearchListBooks } from '../../features/books/selectors';
import { history } from '../../features/store';
import BookSearchDisplayItem from './BookSearchDisplayItem';

const BookSearchDisplay = () => {
	const searchListBooks = useSelector(getSearchListBooks);

	if (searchListBooks.length === 0) {
		return (
			<div className="empty">
				<p>
					Try searching for a topic, for example
					<button
						className="link-button"
						onClick={() => {
							history.push({
								search: '?searchPhrase=Javascript',
							});
						}}
					>
						{' "Javascript"'}
					</button>
				</p>
			</div>
		);
	} else {
		return (
			<div className="book-search-display">
				{searchListBooks.map((book) => (
					<BookSearchDisplayItem book={book} />
				))}
			</div>
		);
	}
};

export default BookSearchDisplay;
