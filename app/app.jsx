const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const store = require('configureStore').configure();
const TodoApp = require('TodoApp');

store.subscribe(() => {
	console.log('New state', store.getState());
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);
