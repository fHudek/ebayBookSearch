import React, { useEffect, useState, useCallback } from 'react';
import { getBooksByType } from './book-search.service';

const BookSearch = () => {
	const [bookType, updateBookType] = useState('');
	const [bookTypeToSearch, updateBookTypeToSearch] = useState('');
	const [allAvailableBooks, setAllAvailableBooks] = useState([]);

	const requestBooks = useCallback(async () => {
		if (bookTypeToSearch) {
			const allBooks = await getBooksByType(bookTypeToSearch);
			setAllAvailableBooks(allBooks);
		}
	}, [bookTypeToSearch]);

	useEffect(() => {
		async function getAllBooks() {
			await requestBooks();
		}
		getAllBooks();
	}, [bookTypeToSearch, requestBooks]);

	return (
		<>
			<div className="book--container">
				<div className="search-params">
					<div>
						<form
							onSubmit={(e) => {
								debugger;
								e.preventDefault();
								updateBookTypeToSearch(bookType);
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
			{<pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>}
		</>
	);
};

export default BookSearch;
