import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import firebase from 'app/firebase/';
import Router from 'app/router/';

const store = require('configureStore').configure();

// Redirect based on auth status
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}
});

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>,
	document.getElementById('app')
);
