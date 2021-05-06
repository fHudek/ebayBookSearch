import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchListBooks } from '../../features/books/selectors';
import BookSearchDisplayItem from './BookSearchDisplayItem';
import { BookActions } from '../../features/books/actions';

const BookSearchDisplay = () => {
	const dispatch = useDispatch();
	const searchListBooks = useSelector(getSearchListBooks);

	if (searchListBooks.length === 0) {
		return (
			<div className="empty">
				<p>
					Try searching for a topic, for example
					<button
						className="link-button"
						onClick={() => {
							dispatch(BookActions.searchBooks('Javascript'));
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
					<BookSearchDisplayItem key={book.id} book={book} />
				))}
			</div>
		);
	}
};

export default BookSearchDisplay;
