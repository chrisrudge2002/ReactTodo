const uuid = require('node-uuid');
const React = require('react');

const AddTodo = require('AddTodo');
const Search = require('Search');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
	getInitialState: function() {
		return {
			searchText: '',
			showCompleted: false,
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				}, {
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				}, {
					id: uuid(),
					text: 'Leave mail on porch',
					completed: true
				}, {
					id: uuid(),
					text: 'Play video-games',
					completed: false
				}
			]
		};
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			searchText: searchText.toLowerCase(),
			showCompleted: showCompleted
		});
	},
	handleToggle: function(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	render: function() {
		const {todos} = this.state;

		return (
			<div className="column small-centered medium-8 large-6">
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;
