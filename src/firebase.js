import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCYz1jBtmmEqUO_xhLCyOcBmnawlvpdQ5c",
    authDomain: "app-b8d14.firebaseapp.com",
    projectId: "app-b8d14",
    storageBucket: "app-b8d14.appspot.com",
    messagingSenderId: "278335991616",
    appId: "1:278335991616:web:a89aa3f0d7fd52c0a514a5",
    databaseURL:"https://app-b8d14-default-rtdb.firebaseio.com" 
  };


export const app = initializeApp(firebaseConfig)