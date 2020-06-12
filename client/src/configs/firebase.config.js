import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBL5jQ6IRmBC1RHHgR67zBlTnCyQgsa_Y4',
  authDomain: 'project-manager-34e50.firebaseapp.com',
  databaseURL: 'https://project-manager-34e50.firebaseio.com',
  projectId: 'project-manager-34e50',
  storageBucket: 'project-manager-34e50.appspot.com',
  messagingSenderId: '533889806630',
  appId: '1:533889806630:web:890c2d114de6b1580991e7',
  measurementId: 'G-3XCL9TWK45',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export default firebase
