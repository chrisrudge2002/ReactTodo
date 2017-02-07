const {connect} = require('react-redux');
const React = require('react');

import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export const TodoList = React.createClass({
	render: function() {
		const {searchText, showCompleted, todos} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return <p className="container__message">Nothing To Do</p>;
			}

			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
				return (<Todo key={todo.id} {...todo}/>);
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(TodoList);
