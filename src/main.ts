import "./style.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_LNw7iEYCj0KAV0ixerpq_HTKBfCufk",
  authDomain: "gamercamp-e4f10.firebaseapp.com",
  projectId: "gamercamp-e4f10",
  storageBucket: "gamercamp-e4f10.appspot.com",
  messagingSenderId: "897851026776",
  appId: "1:897851026776:web:88c863ab4c15eab610492d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')