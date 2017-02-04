const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Search = require('Search');

describe('Search', () => {
	it('should exist', () => {
		expect(Search).toExist();
	});

	it('should call onSearch with entered input text', () => {
		const searchText = 'Dog';
		const spy = expect.createSpy();
		const search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

		search.refs.searchText.value = searchText;
		TestUtils.Simulate.change(search.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});

	it('should call onSearch with proper checked value', () => {
		const spy = expect.createSpy();
		const search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

		search.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(search.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});
