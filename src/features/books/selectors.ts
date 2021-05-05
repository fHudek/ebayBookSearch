import { RootState } from '../store';

export const getSearchListBooks = (state: RootState) => state.books.searchList;

export const getWishListBooks = (state: RootState) => state.books.wishList;
