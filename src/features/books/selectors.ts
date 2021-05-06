import { RootState } from '../store';

export const getSearchListBooks = (state: RootState) => state.books.searchList;

export const getWishListBooks = (state: RootState) =>
	Object.values(state.books.wishList);

export const getWishListBookIds = (state: RootState) =>
	Object.keys(state.books.wishList);
