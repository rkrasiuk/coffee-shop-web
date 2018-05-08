import * as firebase from 'firebase';

export const init = () => {
  let config = {
    apiKey: 'AIzaSyATfiQbJ27o6JIrA2CTSQek2wnnnfevrLI',
    authDomain: 'coffee-mobile-6fe12.firebaseapp.com',
    databaseURL: 'https://coffee-mobile-6fe12.firebaseio.com',
    projectId: 'coffee-mobile-6fe12',
    storageBucket: 'coffee-mobile-6fe12.appspot.com',
    messagingSenderId: '921762686007'
  };
  if(!firebase.apps.length)
    firebase.initializeApp(config);
};

export const getOrdersDB = () => {
  return firebase.database().ref('/').once('value');
};