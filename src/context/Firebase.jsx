import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_tlSLNCd7UwEn1FQYwrqLyNzNzs0U9DQ",
  authDomain: "ecoshop-b5edf.firebaseapp.com",
  projectId: "ecoshop-b5edf",
  storageBucket: "ecoshop-b5edf.appspot.com",
  messagingSenderId: "1024688150342",
  appId: "1:1024688150342:web:366331664d56a397673747",
  measurementId: "G-5853F8Q1FG",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const isSignedIn = user ? true : false;

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOutUser = () => {
    signOut(firebaseAuth);
  };
  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        isSignedIn,
        signInWithGoogle,
        signInUserWithEmailAndPassword,
        signOutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
