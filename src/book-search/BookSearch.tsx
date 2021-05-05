import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions } from '../features/books/actions';
import { getSearchListBooks } from '../features/books/selectors';
import { history } from '../features/store';
import { getSearchPhrase } from '../features/router/selectors';

const BookSearch = () => {
	const dispatch = useDispatch();
	const [bookType, updateBookType] = useState('');
	const searchListBooks = useSelector(getSearchListBooks);
	const searchPhrase = useSelector(getSearchPhrase);

	useEffect(() => {
		dispatch(BookActions.searchBooks(searchPhrase));
	}, [searchPhrase, dispatch]);

	return (
		<>
			<div className="book--container">
				<div className="search-params">
					<div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								history.push({
									search: `?searchPhrase=${bookType}`,
								});
							}}
						>
							<input
								className="full-width"
								autoFocus
								name="gsearch"
								type="search"
								value={bookType}
								placeholder="Search for books to add to your reading list and press Enter"
								onChange={(e) => updateBookType(e.target.value)}
							/>
						</form>
						{!bookType && (
							<div className="empty">
								<p>
									Try searching for a topic, for example
									<button
										className="link-button"
										onClick={() => {
											updateBookType('Javascript');
										}}
									>
										{' '}
										"Javascript"
									</button>
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			{<pre>{JSON.stringify(searchListBooks, null, 4)}</pre>}
		</>
	);
};

export default BookSearch;
