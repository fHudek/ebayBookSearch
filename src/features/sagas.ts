import { all, call } from 'redux-saga/effects';
import { rootSaga as booksSagas } from './books/sagas';

function* allSagas() {
	yield all([booksSagas()]);
}

export function* rootSaga() {
	while (true) {
		try {
			yield call(allSagas);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('Error in sagas.', e);
		}
	}
}
