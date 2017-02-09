import firebase from 'firebase';

try {
	const config = {
		apiKey: 'AIzaSyBQGV0CGx_62putxfssr3QM0Ndal0RBDMU',
		authDomain: 'cr-todo-app.firebaseapp.com',
		databaseURL: 'https://cr-todo-app.firebaseio.com',
		storageBucket: 'cr-todo-app.appspot.com',
		messagingSenderId: '124735499818'
	};

	firebase.initializeApp(config);
} catch (e) {
	console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
