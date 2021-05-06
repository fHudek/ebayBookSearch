import reducer, { BookstateType, initialState } from '../reducer';
import { BookActions } from '../actions';
import { Book } from '../types';

describe('Book reducer tests', () => {
	it('should set search phrase', () => {
		const newPhrase = 'test';
		const expected: BookstateType = {
			...initialState,
			searchPhrase: newPhrase,
		};

		expect(
			reducer(initialState, BookActions.searchBooks(newPhrase))
		).toEqual(expected);
	});

	it('should set empty search book list', () => {
		const newSearchList: Book[] = [];
		const expected: BookstateType = {
			...initialState,
			searchList: newSearchList,
		};

		expect(
			reducer(
				initialState,
				BookActions.setBooksToSearchList(newSearchList)
			)
		).toEqual(expected);
	});

	it('should set search book list with 3 books', () => {
		const newSearchList: Book[] = [
			{
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
			},
			{
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
			},
			{
				id: 'test3',
				authors: ['C1', 'C2'],
				title: 'Title3',
				description: 'qwerty',
				imageLinks: {
					thumbnail: 'https://link.com',
					smallThumbnail: 'https://link.com',
				},
				publishedDate: '2021',
				publisher: 'tester1',
			},
		];
		const expected: BookstateType = {
			...initialState,
			searchList: newSearchList,
		};

		expect(
			reducer(
				initialState,
				BookActions.setBooksToSearchList(newSearchList)
			)
		).toEqual(expected);
	});

	it('should add book to wish list', () => {
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
		const expected: BookstateType = {
			...initialState,
			wishList: {
				[book.id]: book,
			},
		};

		expect(
			reducer(initialState, BookActions.addBookToWishList(book))
		).toEqual(expected);
	});

	it('should not add book to wish list when already there', () => {
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
		const startState: BookstateType = {
			...initialState,
			wishList: {
				[book.id]: book,
			},
		};
		const expected: BookstateType = {
			...initialState,
			wishList: {
				[book.id]: book,
			},
		};

		expect(
			Object.keys(
				reducer(startState, BookActions.addBookToWishList(book))
					.wishList
			).length
		).toEqual(1);
		expect(
			reducer(startState, BookActions.addBookToWishList(book))
		).toEqual(expected);
	});

	it('should remove book to wish list', () => {
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
			publisher: 'tester1',
		};
		const startState: BookstateType = {
			...initialState,
			wishList: {
				[book.id]: book,
				[book2.id]: book2,
			},
		};

		const expected: BookstateType = {
			...initialState,
			wishList: {
				[book2.id]: book2,
			},
		};

		expect(
			reducer(startState, BookActions.removeBookFromWishList(book.id))
		).toEqual(expected);
	});
});
