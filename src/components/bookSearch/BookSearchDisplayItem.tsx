import React from 'react';
import { Book } from '../../features/books/types';

const BookSearchDisplayItem = ({ book }: { book: Book }) => {
	return (
		<div className="book-search-display-item">
			<div className="top">
				<img
					className="image"
					src={book.imageLinks?.thumbnail}
					alt="book cover"
				/>
				<h3 className="title">{book.title}</h3>
			</div>
			<div className="attr">
				<b>{`${
					book.authors && book.authors.length > 1
						? 'Author: '
						: 'Authors: '
				}`}</b>
				{` ${book.authors ? book.authors.join(', ') : 'not specified'}`}
			</div>
			<div className="attr">
				<b>Publisher:</b>
				{` ${book.publisher ? book.publisher : 'not specified'}`}
			</div>
			<div className="attr">
				<b>Published:</b>
				{` ${
					book.publishedDate ? book.publishedDate : 'not specified'
				}`}
			</div>
			<div className="description-label">
				<b>Description:</b>
			</div>
			<div className="description-text-wrapper">
				{book.description ? book.description : 'not specified'}
			</div>
		</div>
	);
};

export default BookSearchDisplayItem;
