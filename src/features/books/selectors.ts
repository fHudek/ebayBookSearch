import { RootState } from '../store';

export const getSearchListBooks = (state: RootState) => state.books.searchList;

export const getWishListBooks = (state: RootState) =>
	Object.values(state.books.wishList);

export const getWishListBookCount = (state: RootState) =>
	Object.keys(state.books.wishList).length;

export const getWishListBookIds = (state: RootState) =>
	Object.keys(state.books.wishList);

export const getSearchPhrase = (state: RootState) => state.books.searchPhrase;
