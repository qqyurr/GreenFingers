import firebase from '@react-native-firebase/app';
import {
  WEB_CLIENT_ID,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROEJCT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROEJCT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app);
} else {
  firebase.app();
}

// firebase.app.delete();

export default firebase;
