import React from 'react';

import AddTodo from 'AddTodo';
import Search from 'Search';
import TodoList from 'TodoList';

export class TodoApp extends React.Component {
	render() {
		return (
			<div>
				<h1 className="page-title">Todo App</h1>

				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = TodoApp;
