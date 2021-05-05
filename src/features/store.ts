import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
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

export const history = createBrowserHistory();

/* Create root reducer, containing all features of the application */
export const rootReducer = combineReducers({
	router: connectRouter(history),
	books,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware, routerMiddleware(history))
	)
);

sagaMiddleware.run(rootSaga);

export default store;
