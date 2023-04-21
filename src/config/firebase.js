
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const firebaseConfig = {
  apiKey: "AIzaSyADB2tIpnBsyFN4snJNNYFWQEOoTHs1Sv8",
  authDomain: "alura-esporte-bcae8.firebaseapp.com",
  projectId: "alura-esporte-bcae8",
  storageBucket: "alura-esporte-bcae8.appspot.com",
  messagingSenderId: "969003035567",
  appId: "1:969003035567:web:285afcef8832c99a7b5d5a",
  measurementId: "G-F8LPZQEHSF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});



export { auth };