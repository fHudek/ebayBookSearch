import { all, call, put, debounce, takeLatest } from 'redux-saga/effects';
import { BookActions, SEARCH_BOOKS } from './actions';
import { history } from '../../features/store';
import { getBooksByType } from '../../components/bookSearch/book-search.service';

export function* searchBooks(
	action: ReturnType<typeof BookActions.searchBooks>
) {
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

export function setSearchQuery(
	action: ReturnType<typeof BookActions.searchBooks>
) {
	const phrase = action.payload;
	history.push({
		search: `?searchPhrase=${phrase}`,
	});
}

export function* rootSaga() {
	yield all([
		debounce(500, SEARCH_BOOKS, searchBooks),
		takeLatest(SEARCH_BOOKS, setSearchQuery),
	]);
}
