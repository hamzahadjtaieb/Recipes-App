// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: 'AIzaSyBDyq-DWsUf3iHDOrr4AnvzJggJHxVZk9g',

  authDomain: 'ng-course-recipe-book-b43ea.firebaseapp.com',

  databaseURL: 'https://ng-course-recipe-book-b43ea-default-rtdb.firebaseio.com',

  projectId: 'ng-course-recipe-book-b43ea',

  storageBucket: 'ng-course-recipe-book-b43ea.appspot.com',

  messagingSenderId: '18481338153',

  appId: '1:18481338153:web:ecd6d6efa7902afab7c938',

  measurementId: 'G-K1DJ93X92P'

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false
};
