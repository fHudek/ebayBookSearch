import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions } from '../../features/books/actions';
import { history } from '../../features/store';
import { getSearchPhrase } from '../../features/router/selectors';

const BookSearchForm = () => {
	const dispatch = useDispatch();
	const [bookType, updateBookType] = useState('');
	const searchPhrase = useSelector(getSearchPhrase);

	useEffect(() => {
		if (searchPhrase) {
			updateBookType(searchPhrase);
			dispatch(BookActions.searchBooks(searchPhrase));
		} else {
			dispatch(BookActions.clearSearchList());
		}
	}, [searchPhrase, dispatch]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				history.push({
					search: `?searchPhrase=${bookType}`,
				});
			}}
		>
			<input
				className="book-search-input"
				autoFocus
				name="gsearch"
				type="search"
				value={bookType}
				placeholder="Search for books to add to your reading list and press Enter"
				onChange={(e) => updateBookType(e.target.value)}
			/>
		</form>
	);
};

export default BookSearchForm;
