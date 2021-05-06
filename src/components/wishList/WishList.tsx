import React from 'react';
import WishListHeader from './WishListHeader';
import WishListBooks from './WishListBooks';

const WishList = () => {
	return (
		<div className="wish-list">
			<WishListHeader />
			<WishListBooks />
		</div>
	);
};

export default WishList;
