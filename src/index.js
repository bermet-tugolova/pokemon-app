import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { Provider } from 'react-redux'

import firebase from './config/firebaseConfig'
import { createFirestoreInstance } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './redux/reducer/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase})))

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance,
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
