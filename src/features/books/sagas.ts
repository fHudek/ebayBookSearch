import { all, call, put, debounce } from 'redux-saga/effects';
import { BookActions, SEARCH_BOOKS } from './actions';
import { getBooksByType } from '../../components/bookSearch/book-search.service';

function* searchBooks(action: ReturnType<typeof BookActions.searchBooks>) {
	const phrase = action.payload;
	if (phrase) {
		const searchResultBooks = yield call(getBooksByType, phrase);
		const booksInfo = searchResultBooks.items.map((book: any) => {
			return { id: book.id, ...book.volumeInfo };
		});
		yield put(BookActions.setBooksToSearchList(booksInfo));
	} else {
		yield put(BookActions.setBooksToSearchList([]));
	}
}

export function* rootSaga() {
	yield all([debounce(500, SEARCH_BOOKS, searchBooks)]);
}
