import {
	ADD_BOOK_TO_WISH_LIST,
	BookActionsType,
	SET_BOOKS_TO_SEARCH_LIST,
	CLEAR_SEARCH_LIST,
	REMOVE_BOOK_TO_WISH_LIST,
	SEARCH_BOOKS,
} from './actions';
import { Book } from './types';

export type BookstateType = {
	searchPhrase: string;
	searchList: Book[];
	wishList: { [key: string]: Book };
};

const initialState: BookstateType = {
	searchPhrase: '',
	searchList: [],
	wishList: {},
};

export default (state = initialState, action: BookActionsType) => {
	switch (action.type) {
		case SEARCH_BOOKS:
			return {
				...state,
				searchPhrase: action.payload,
			};
		case SET_BOOKS_TO_SEARCH_LIST:
			const books = action.payload;
			return {
				...state,
				searchList: books,
			};
		case CLEAR_SEARCH_LIST:
			return { ...state, searchList: [] };
		case ADD_BOOK_TO_WISH_LIST:
			const book = action.payload;
			return {
				...state,
				wishList: { ...state.wishList, [book.id]: book },
			};
		case REMOVE_BOOK_TO_WISH_LIST:
			const bookId = action.payload;
			const newWishList = state.wishList;
			delete newWishList[bookId];
			return {
				...state,
				wishList: { ...newWishList },
			};
		default:
			return state;
	}
};
