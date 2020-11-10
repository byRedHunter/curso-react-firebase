import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyA7GZlI1buhvfZcGiVJSEDdISvY3WyDYR4',
	authDomain: 'slider-react-65431.firebaseapp.com',
	databaseURL: 'https://slider-react-65431.firebaseio.com',
	projectId: 'slider-react-65431',
	storageBucket: 'slider-react-65431.appspot.com',
	messagingSenderId: '665974285349',
	appId: '1:665974285349:web:700b909e760f2366da4bcc',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const fbStorage = firebase.storage()
const fbFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { fbStorage, fbFirestore, timeStamp }
