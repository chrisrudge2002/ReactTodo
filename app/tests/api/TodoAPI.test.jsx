const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	it('should exist', () => {
		expect(TodoAPI).toExist();
	});


	describe('setTodos', () => {
		beforeEach(() => {
			localStorage.removeItem('todos');
		});

		it('should set valid todos array', () => {
			const todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			const actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			const badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad local storage data', () => {
			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array in local storage', () => {
			const todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));

			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});

	});
});
