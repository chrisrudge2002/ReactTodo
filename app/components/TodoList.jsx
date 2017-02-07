import {connect} from 'react-redux';
import React from 'react';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends React.Component {
	render() {
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
}

export default connect(
	(state) => {
		return state;
	}
)(TodoList);
