import { createAction } from '../helpers';
import { ActionsUnion } from '../types';
import { Book } from './types';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const CLEAR_SEARCH_LIST = 'CLEAR_SEARCH_LIST';
export const SET_BOOKS_TO_SEARCH_LIST = 'SET_BOOKS_TO_SEARCH_LIST';
export const ADD_BOOK_TO_WISH_LIST = 'ADD_BOOK_TO_WISH_LIST';
export const REMOVE_BOOK_TO_WISH_LIST = 'REMOVE_BOOK_TO_WISH_LIST';

export const BookActions = {
	searchBooks: (phrase: string) => createAction(SEARCH_BOOKS, phrase),
	clearSearchList: () => createAction(CLEAR_SEARCH_LIST),
	setBooksToSearchList: (books: Book[]) =>
		createAction(SET_BOOKS_TO_SEARCH_LIST, books),
	addBookToWishList: (book: Book) =>
		createAction(ADD_BOOK_TO_WISH_LIST, book),
	removeBookFromWishList: (bookId: string) =>
		createAction(REMOVE_BOOK_TO_WISH_LIST, bookId),
};

export type BookActionsType = ActionsUnion<typeof BookActions>;
