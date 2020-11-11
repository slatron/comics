import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

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

const McuRankPage = () => {
  let [allMovies, setAllMovies] = useState([]);
  let [allTiers, setAllTiers] = useState([]);

  useEffect(() => {
    getMovies()
  }, []);

  function getMovies() {
    db.ref('movies').once('value').then(snapshot => {
      setAllMovies(snapshot.val())
    })
    db.ref('tiers').once('value').then(snapshot => {
      setAllTiers(snapshot.val())
    })
  }

  return (
    <div>
      <p>ranks</p>
    </div>
  )
}

export default McuRankPage
