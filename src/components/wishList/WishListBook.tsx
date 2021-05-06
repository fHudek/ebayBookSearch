import React, { useCallback } from 'react';
import { Book } from '../../features/books/types';
import { BookActions } from '../../features/books/actions';
import { useDispatch } from 'react-redux';

const WishListBook = ({ book }: { book: Book }) => {
	const dispatch = useDispatch();

	const removeBookFromWishList = useCallback(() => {
		dispatch(BookActions.removeBookFromWishList(book.id));
	}, [book.id, dispatch]);

	return (
		<div className="wish-list-book">
			<span>{book.title}</span>
			<button
				className="wish-list-book-button"
				onClick={removeBookFromWishList}
			>
				remove
			</button>
		</div>
	);
};

export default WishListBook;
