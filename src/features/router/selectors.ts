import { RootState } from '../store';

export const getSearchPhrase = (state: RootState) =>
	state.router.location.query.searchPhrase;
