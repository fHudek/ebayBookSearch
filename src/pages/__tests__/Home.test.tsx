import React from 'react';
import { mount } from 'enzyme';
import Home from '../Home';
import { Provider } from 'react-redux';
import store from '../../features/store';
import BookSearch from '../../components/bookSearch/BookSearch';
import WishList from '../../components/wishList/WishList';

describe('Home page tests', () => {
	test('renders main parts of home page', () => {
		const homePage = mount(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		const header = homePage.find('header');
		expect(header).toHaveLength(1);
		const headerTitle = header.find('h1');
		expect(headerTitle).toHaveLength(1);
		expect(header.text()).toEqual('My Good Reads');
		const bookSearch = homePage.find(BookSearch);
		expect(bookSearch).toHaveLength(1);
		const wishList = homePage.find(WishList);
		expect(wishList).toHaveLength(1);
	});
});
