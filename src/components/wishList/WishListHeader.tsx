import React from 'react';
import { useSelector } from 'react-redux';
import { getWishListBookCount } from '../../features/books/selectors';

const WishListHeader = () => {
	const wishListBookCount = useSelector(getWishListBookCount);
	return (
		<h2 className="wish-list-header">{`My Wishlist (${wishListBookCount})`}</h2>
	);
};

export default WishListHeader;
