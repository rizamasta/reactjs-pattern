import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_AUTH_DOMAIN,
    databaseURL: YOUR_DATABASE_URL,
    projectId: YOUR_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: YOUR_MESSAGING_SENDER_ID,
};

const devConfig = {
    apiKey: "AIzaSyAqR-c0gUq1-zha2RLz5s7ox8MIfds9e2E",
    authDomain: "for-hire-1519035362767.firebaseapp.com",
    databaseURL: "https://for-hire-1519035362767.firebaseio.com",
    projectId: "for-hire-1519035362767",
    storageBucket: 'for-hire-1519035362767.appspot.com',
    messagingSenderId: '1015069689813',
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
};