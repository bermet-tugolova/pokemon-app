// подключение firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAiiZTy6UG4ilNqyVrjrOlGaASmfmpKeJg',
	authDomain: 'pokemon-ded3c.firebaseapp.com',
	projectId: 'pokemon-ded3c',
	storageBucket: 'pokemon-ded3c.appspot.com',
	messagingSenderId: '497468595615',
	appId: '1:497468595615:web:b64b984840910b07b3f1aa',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
