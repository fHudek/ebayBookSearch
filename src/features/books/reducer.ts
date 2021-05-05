import {
	ADD_BOOK_TO_WISH_LIST,
	BookActionsType,
	SET_BOOKS_TO_SEARCH_LIST,
} from './actions';
import { Book } from './types';

export type BookstateType = {
	searchList: Book[];
	wishList: Book[];
};

const initialState: BookstateType = {
	searchList: [],
	wishList: [],
};

export default (state = initialState, action: BookActionsType) => {
	switch (action.type) {
		case SET_BOOKS_TO_SEARCH_LIST:
			const books = action.payload;
			return {
				...state,
				searchList: books,
			};
		case ADD_BOOK_TO_WISH_LIST:
			const book = action.payload;
			return {
				...state,
				wishList: [...state.wishList, book],
			};
		default:
			return state;
	}
};
