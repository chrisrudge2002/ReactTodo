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
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Leave mail on porch'
				}, {
					id: 4,
					text: 'Play video-games'
				}
			]
		};
	},
	handleAddTodo: function(text) {
		
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
			<div>
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;
