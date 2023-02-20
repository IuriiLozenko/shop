import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const container = document.getElementById("root")!;
const root = createRoot(container);

const firebaseConfig = {
  apiKey: "AIzaSyA-KanmdeE7TIuq1eP_AJvad-zIo_5HWKs",
  authDomain: "project-react-66.firebaseapp.com",
  projectId: "project-react-66",
  storageBucket: "project-react-66.appspot.com",
  messagingSenderId: "590910815829",
  appId: "1:590910815829:web:3de1e492ff6a6193631edc",
  measurementId: "G-RDHE9E0JYH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
