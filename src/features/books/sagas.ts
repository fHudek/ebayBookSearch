import { all, call, put, takeLatest } from 'redux-saga/effects';
import { BookActions, SEARCH_BOOKS } from './actions';
import { getBooksByType } from '../../book-search/book-search.service';

export function* searchBooks(
	action: ReturnType<typeof BookActions.searchBooks>
) {
	const phrase = action.payload;
	const searchResultBooks = yield call(getBooksByType, phrase);

	yield put(BookActions.setBooksToSearchList(searchResultBooks));
}

export function* rootSaga() {
	yield all([takeLatest(SEARCH_BOOKS, searchBooks)]);
}
