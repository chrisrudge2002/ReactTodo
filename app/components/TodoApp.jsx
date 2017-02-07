const moment = require('moment');
const React = require('react');
const uuid = require('node-uuid');

import AddTodo from 'AddTodo';
const Search = require('Search');
const TodoAPI = require('TodoAPI');
import TodoList from 'TodoList';

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
	render: function() {
		//const {todos, showCompleted, searchText} = this.state;
		// const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1 className="page-title">Todo App</h1>

				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search onSearch={this.handleSearch}/>
							<TodoList/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TodoApp;
