import { createAction } from '../helpers';
import { ActionsUnion } from '../types';
import { Book } from './types';

export const SET_BOOKS_TO_SEARCH_LIST = 'SET_BOOKS_TO_SEARCH_LIST';
export const ADD_BOOK_TO_WISH_LIST = 'ADD_BOOK_TO_WISH_LIST';

export const BookActions = {
	setBooksToSearchList: (books: Book[]) =>
		createAction(SET_BOOKS_TO_SEARCH_LIST, books),
	addBookToWishList: (book: Book) =>
		createAction(ADD_BOOK_TO_WISH_LIST, book),
};

export type BookActionsType = ActionsUnion<typeof BookActions>;
