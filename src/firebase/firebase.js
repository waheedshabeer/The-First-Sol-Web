import 'firebase/storage'
import 'firebase/firestore'
import firebase from 'firebase/app'
import {storage, firestore} from 'firebase'
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: 'AIzaSyC8qUd8m3sAOoQPvmGRVq-VykpUaijMwQU',
        authDomain: 'thefirstsol-adminpanel.firebaseapp.com',
        projectId: 'thefirstsol-adminpanel',
        storageBucket: 'thefirstsol-adminpanel.appspot.com',
        messagingSenderId: '846649358593',
        appId: '1:846649358593:web:452c598b1486bd90c24300',
    })
}

const store = firestore()

export const Firestorage = storage()

export const adminsRef = store.collection('Admins')
export const developersRef = store.collection('Developers')
export const categoriesRef = store.collection('Categories')
export const portfoliosRef = store.collection('Portfolios')
