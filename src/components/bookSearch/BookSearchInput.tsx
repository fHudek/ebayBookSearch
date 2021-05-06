import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions } from '../../features/books/actions';
import { getSearchPhrase } from '../../features/router/selectors';

const BookSearchForm = () => {
	const dispatch = useDispatch();
	const searchPhrase = useSelector(getSearchPhrase);

	const onChange = useCallback(
		(e) => {
			const phrase = e.target.value;
			dispatch(BookActions.searchBooks(phrase));
		},
		[dispatch]
	);

	useEffect(() => {
		dispatch(BookActions.searchBooks(searchPhrase));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<input
				className="book-search-input"
				autoFocus
				name="gsearch"
				type="search"
				value={searchPhrase}
				placeholder="Search for books to add to your reading list and press Enter"
				onChange={onChange}
			/>
		</form>
	);
};

export default BookSearchForm;
