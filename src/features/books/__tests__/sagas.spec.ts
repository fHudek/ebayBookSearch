import { BookActions } from '../actions';
import { searchBooks } from '../sagas';
import { getBooksByType } from '../../../components/bookSearch/book-search.service';
import { call, put } from 'redux-saga/effects';
import { Book } from '../types';

describe('Book sagas tests', () => {
	it('When phrase is containing some letters, it should call api to get new search list and set it to store', () => {
		const phrase = 'test';
		const action = BookActions.searchBooks(phrase);

		const gen = searchBooks(action);

		expect(gen.next().value).toEqual(call(getBooksByType, phrase));
		const book: Book = {
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
		const response: { items: any[] } = {
			items: [
				{
					id: 'test1',
					volumeInfo: {
						authors: ['A1', 'A2'],
						title: 'Title1',
						description: 'qwerty',
						imageLinks: {
							thumbnail: 'https://link.com',
							smallThumbnail: 'https://link.com',
						},
						publishedDate: '2021',
						publisher: 'tester1',
					},
				},
			],
		};
		const books: Book[] = [book];
		expect(gen.next(response).value).toEqual(
			put(BookActions.setBooksToSearchList(books))
		);
		expect(gen.next().value).toEqual(undefined);
	});

	it('When phrase is empty, it should set empty search list', () => {
		const phrase = '';
		const action = BookActions.searchBooks(phrase);

		const gen = searchBooks(action);
		expect(gen.next([]).value).toEqual(
			put(BookActions.setBooksToSearchList([]))
		);
		expect(gen.next().value).toEqual(undefined);
	});
});
