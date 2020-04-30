// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3002',
   firebaseConfig : {
    apiKey: 'AIzaSyBZla-RugcDXajs5BV2Nn24FCjJNjmZ7v4',
    authDomain: 'brimaslead.firebaseapp.com',
    databaseURL: 'https://brimaslead.firebaseio.com',
    projectId: 'brimaslead',
    storageBucket: 'brimaslead.appspot.com',
    messagingSenderId: '479593800525',
    appId: '1:479593800525:web:717e4bca590552e553cd04',
    measurementId: 'G-854PD7BJX5'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
