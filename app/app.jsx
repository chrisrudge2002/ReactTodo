const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoApp = require('TodoApp');

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);
