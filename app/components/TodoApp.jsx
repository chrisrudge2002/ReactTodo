const moment = require('moment');
const React = require('react');
const uuid = require('node-uuid');

const AddTodo = require('AddTodo');
const Search = require('Search');
const TodoAPI = require('TodoAPI');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
	getInitialState: function() {
		return {
			searchText: '',
			showCompleted: false,
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
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
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	render: function() {
		const {todos, showCompleted, searchText} = this.state;
		const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div className="column small-centered medium-8 large-6">
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;
