const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onTodoAdd if todo text entered', () => {
		const todoText = 'Check mail';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call onTodoAdd if no todo text entered', () => {
		const todoText = '';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});
