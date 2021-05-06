import React from 'react';
import { useSelector } from 'react-redux';
import { getWishListBooks } from '../../features/books/selectors';
import { Book } from '../../features/books/types';
import WishListBook from './WishListBook';

const WishListBooks = () => {
	const wishListBooks = useSelector(getWishListBooks);

	if (wishListBooks.length > 0) {
		return (
			<div className="wish-list-books">
				{wishListBooks.map((book: Book) => {
					return <WishListBook key={book.id} book={book} />;
				})}
			</div>
		);
	} else {
		return <div>Empty :(</div>;
	}
};

export default WishListBooks;
