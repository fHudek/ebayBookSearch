import React, { useCallback } from 'react';
import { Book } from '../../features/books/types';
import { ReactComponent as FullStar } from '../../assets/icons/star-full.svg';
import { useDispatch } from 'react-redux';
import { BookActions } from '../../features/books/actions';

const BookSearchDisplayItem = ({ book }: { book: Book }) => {
	const dispatch = useDispatch();

	const addToWishList = useCallback(() => {
		dispatch(BookActions.addBookToWishList(book));
	}, [book, dispatch]);

	return (
		<div key={book.id} className="book-search-display-item">
			<div className="top">
				<div className="image-wrapper">
					<img
						className="image"
						src={book.imageLinks?.thumbnail}
						alt="book cover"
					/>
				</div>
				<div className="top-right">
					<button className="star-button" onClick={addToWishList}>
						<FullStar width="2rem" height="2rem" />
					</button>
					<h3 className="title">{book.title}</h3>
				</div>
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
			<div className="bottom-fade" />
		</div>
	);
};

export default BookSearchDisplayItem;
