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

	describe('todosReducer', () => {
		it('should add new todo', () => {
			const action = {
				type: 'ADD_TODO',
				text: 'Walk the dog'
			};
			const res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toBe(1);
			expect(res[0].text).toBe(action.text);
		});

		it('should toggle todo', () => {
			const todos = [{
				id: '123',
				text: 'Something',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}];
			const action = {
				type: 'TOGGLE_TODO',
				id: '123'
			};
			const res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toBe(false);
			expect(res[0].completedAt).toEqual(undefined);
		});
	});
});
