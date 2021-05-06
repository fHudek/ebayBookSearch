import { all, call, put, takeLatest } from 'redux-saga/effects';
import { BookActions, SEARCH_BOOKS } from './actions';
import { getBooksByType } from '../../components/bookSearch/book-search.service';

export function* searchBooks(
	action: ReturnType<typeof BookActions.searchBooks>
) {
	const phrase = action.payload;
	const searchResultBooks = yield call(getBooksByType, phrase);

	const booksInfo = searchResultBooks.items.map((book: any) => {
		return { id: book.id, ...book.volumeInfo };
	});

	yield put(BookActions.setBooksToSearchList(booksInfo));
}

export function* rootSaga() {
	yield all([takeLatest(SEARCH_BOOKS, searchBooks)]);
}
