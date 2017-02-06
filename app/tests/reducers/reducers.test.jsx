const expect = require('expect');

const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			const action = {
				type: 'SET_SEARCH_TEXT',
				text: 'dog'
			};
			const res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toBe(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			const action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			const res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toBe(true);
		});
	});
});