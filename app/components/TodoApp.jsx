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
					text: 'Walk the dog'
				}, {
					id: uuid(),
					text: 'Clean the yard'
				}, {
					id: uuid(),
					text: 'Leave mail on porch'
				}, {
					id: uuid(),
					text: 'Play video-games'
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
					text: text
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
		const {todos} = this.state;

		return (
			<div className="column small-centered medium-8 large-6">
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;
