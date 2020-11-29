import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyA4Ut5x488eODNFmnlisGKRSNYhuoHJ6Pw",
  authDomain: "mcu-tiers.firebaseapp.com",
  databaseURL: "https://mcu-tiers.firebaseio.com",
  projectId: "mcu-tiers",
  storageBucket: "mcu-tiers.appspot.com",
  messagingSenderId: "236578939074",
  appId: "1:236578939074:web:b57b6e1006f6b327"
}

// Initialize Firebase
const db = firebase
  .initializeApp(firebaseConfig)
  .database();

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

  getComicsByDateDescriptor: (dateDescriptor) => {
    const fetchURI = `${API_BASE}/comics?dateDescriptor=${dateDescriptor}&apikey=${MARVEL_API_PUBLIC}&limit=100`
    return fetch(fetchURI, requestConfig)
  },

  getMoviesFB: () => {
    return db.ref('movies').once('value')
  },

  getTiersFB: () => {
    return db.ref('tiers').once('value')
  }

}
