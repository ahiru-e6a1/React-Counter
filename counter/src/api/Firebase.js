import React from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcxkLsnUd3-C9zAJ7nilf1nrBcjlJXyfY",
  authDomain: "awesome-2460e.firebaseapp.com",
  projectId: "awesome-2460e",
  storageBucket: "awesome-2460e.appspot.com",
  messagingSenderId: "509866348092",
  appId: "1:509866348092:web:404734a356151f225afd39",
};

const app = initializeApp(firebaseConfig);

export const Firebase = () => {
  return <div></div>;
};
