import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import books from './books/reducer';
import { rootSaga } from './sagas';

export type RootState = StateType<typeof rootReducer>;

export type StateType<ReducerOrMap> = ReducerOrMap extends (
	...args: any[]
) => any
	? ReturnType<ReducerOrMap>
	: ReducerOrMap extends object
	? { [K in keyof ReducerOrMap]: StateType<ReducerOrMap[K]> }
	: never;

/* Create root reducer, containing all features of the application */
export const rootReducer = combineReducers({
	books,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
