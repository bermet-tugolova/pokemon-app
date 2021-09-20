import { combineReducers } from 'redux'
import { pokemonReducer } from './pokemonReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
})
