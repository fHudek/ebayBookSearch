import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import BookSearchDisplay from '../BookSearchDisplay';
import configureStore from 'redux-mock-store';
import { RootState } from '../../../features/store';
import { Book } from '../../../features/books/types';
import BookSearchDisplayItem from '../BookSearchDisplayItem';

export const createStore = (state: Partial<RootState>) =>
	configureStore()(state);

const book1: Book = {
	id: 'test1',
	authors: ['A1', 'A2'],
	title: 'Title1',
	description: 'qwerty',
	imageLinks: {
		thumbnail: 'https://link.com',
		smallThumbnail: 'https://link.com',
	},
	publishedDate: '2021',
	publisher: 'tester1',
};

const book2: Book = {
	id: 'test2',
	authors: ['B1', 'B2'],
	title: 'Title2',
	description: 'qwerty',
	imageLinks: {
		thumbnail: 'https://link.com',
		smallThumbnail: 'https://link.com',
	},
	publishedDate: '2021',
	publisher: 'tester2',
};

const book3: Book = {
	id: 'test3',
	authors: ['C1', 'C2'],
	title: 'Title3',
	description: 'qwerty',
	imageLinks: {
		thumbnail: 'https://link.com',
		smallThumbnail: 'https://link.com',
	},
	publishedDate: '2021',
	publisher: 'tester2',
};

describe('BookSearchDispay tests', () => {
	it('should render 1 book in display', () => {
		const store = createStore({
			books: {
				searchPhrase: '',
				searchList: [book1],
				wishList: {},
			},
		});
		const bookSearchDisplay = mount(
			<Provider store={store}>
				<BookSearchDisplay />
			</Provider>
		);
		const bookSearch = bookSearchDisplay.find(BookSearchDisplayItem);
		expect(bookSearch).toHaveLength(1);
	});
	it('should render 3 book in display', () => {
		const store = createStore({
			books: {
				searchPhrase: '',
				searchList: [book1, book2, book3],
				wishList: {},
			},
		});
		const bookSearchDisplay = mount(
			<Provider store={store}>
				<BookSearchDisplay />
			</Provider>
		);
		const bookSearch = bookSearchDisplay.find(BookSearchDisplayItem);
		expect(bookSearch).toHaveLength(3);
	});
	it('should render prompt to search for "Javascript" and no book', () => {
		const store = createStore({
			books: {
				searchPhrase: '',
				searchList: [],
				wishList: {},
			},
		});
		const bookSearchDisplay = mount(
			<Provider store={store}>
				<BookSearchDisplay />
			</Provider>
		);
		const bookSearch = bookSearchDisplay.find(BookSearchDisplayItem);
		expect(bookSearch).toHaveLength(0);
		const promptWrapper = bookSearchDisplay.find('.empty');
		expect(promptWrapper).toHaveLength(1);
		const promptWrapperSearchButton = bookSearchDisplay.find('button');
		expect(promptWrapperSearchButton).toHaveLength(1);
		expect(promptWrapperSearchButton.text()).toEqual(' "Javascript"');
	});
});
