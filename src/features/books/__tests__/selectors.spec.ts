import { RootState } from '../../store';
import * as selectors from '../selectors';
import { Book } from '../types';

const phrase = 'test';

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
	publisher: 'tester1',
};

const state: Partial<RootState> = {
	books: {
		searchPhrase: phrase,
		searchList: [book1, book2, book3],
		wishList: { [book1.id]: book1, [book2.id]: book2 },
	},
};

describe('Book selectors', () => {
	it('should get phrase from store', () => {
		// @ts-ignore
		expect(selectors.getSearchPhrase(state)).toEqual(phrase);
	});
	it('should get search list from store from store', () => {
		// @ts-ignore
		expect(selectors.getSearchListBooks(state)).toEqual([
			book1,
			book2,
			book3,
		]);
	});
	it('should get books from wish list  from store', () => {
		// @ts-ignore
		expect(selectors.getWishListBooks(state)).toEqual([book1, book2]);
	});
	it('should get ids of books in wish list from store', () => {
		// @ts-ignore
		expect(selectors.getWishListBookIds(state)).toEqual([
			book1.id,
			book2.id,
		]);
	});
	it('should get count of books in wish list from store', () => {
		// @ts-ignore
		expect(selectors.getWishListBookCount(state)).toEqual(2);
	});
});
