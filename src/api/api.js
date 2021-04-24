import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Detect if user is on IE browser
var isIE = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE) {
   // Create Promise polyfill script tag
    var promiseScript = document.createElement("script");
    promiseScript.type = "text/javascript";
    promiseScript.src =
        "https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/dist/polyfill.min.js";

    // Create Fetch polyfill script tag
    var fetchScript = document.createElement("script");
    fetchScript.type = "text/javascript";
    fetchScript.src =
        "https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/dist/fetch.umd.min.js";

    // Add polyfills to head element
    document.head.appendChild(promiseScript);
    document.head.appendChild(fetchScript);
}

const firebaseConfig = {
  apiKey: "AIzaSyA4Ut5x488eODNFmnlisGKRSNYhuoHJ6Pw",
  authDomain: "mcu-tiers.firebaseapp.com",
  databaseURL: "https://mcu-tiers.firebaseio.com",
  projectId: "mcu-tiers",
  storageBucket: "mcu-tiers.appspot.com",
  messagingSenderId: "236578939074",
  appId: "1:236578939074:web:b57b6e1006f6b327"
}

// Initialize DB
const db = firebase
  .initializeApp(firebaseConfig)
  .database()

const API_BASE = 'https://gateway.marvel.com/v1/public'
const MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab'
const requestConfig = window.location.hostname === 'localhost'
  ? {
      "method": "GET",
      "referrer": "developer.marvel.com",  // required for API responses
      "referrerPolicy": "no-referrer-when-downgrade"
    }
  : { "method": "GET" }

export default {

  // Marvel API Calls
  getComicsByDateDescriptor: (dateDescriptor) => {
    const fetchURI = `${API_BASE}/comics?dateDescriptor=${dateDescriptor}&apikey=${MARVEL_API_PUBLIC}&limit=100&orderBy=title`
    return fetch(fetchURI, requestConfig)
  },

  getCreator: (creatorID) => {
    const fetchURI = `${API_BASE}/creators/${creatorID}?&apikey=${MARVEL_API_PUBLIC}`
    return fetch(fetchURI, requestConfig)
  },

  getCharacter: (charID) => {
    const fetchURI = `${API_BASE}/characters/${charID}?&apikey=${MARVEL_API_PUBLIC}`
    return fetch(fetchURI, requestConfig)
  },

  getStory: (storyID) => {
    const fetchURI = `${API_BASE}/stories/${storyID}?&apikey=${MARVEL_API_PUBLIC}`
    return fetch(fetchURI, requestConfig)
  },

  // Firebase Calls
  getMoviesFB: () => {
    return db.ref('movies').once('value')
  },

  getTiersFB: () => {
    return db.ref('tiers').once('value')
  },

  getRemAlbumsFB: () => {
    return db.ref('rem-albums').once('value')
  },

  getRemTiersFB: () => {
    return db.ref('rem-tiers').once('value')
  },

  updateRemTiersFB: (tiers) => {
    return db.ref('rem-tiers').set(tiers)
  },

  login: (email, pass) => {
    firebase.auth()
            .signInWithEmailAndPassword(email, pass)
            .then((response) => {
              console.log('response: ', response)
              console.log('...you are signed in!')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });
  },

  logout: () => {
    firebase.auth()
            .signOut()
            .then(() => {
              console.log('You have signed out')
            })
            .catch((error) => {
              console.log('Error signing out: ', error)
            })
  },

  getLoginObserver: (callback) => {
    firebase.auth()
            .onAuthStateChanged((user) => {
              user = user ? user : {}
              callback(user)
            })
  }
}
