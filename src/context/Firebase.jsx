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
  GithubAuthProvider,
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
const githubProvider = new GithubAuthProvider();

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

  const [error, setError] = useState(null);

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error.code.split("auth/")[1].split("-").join(" "));
        // console.log(error.code.split("auth/")[1].split("-").join(" "));
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.code.split("auth/")[1].split("-").join(" "));
        // console.log(error.code.split("auth/")[1].split("-").join(" "));
      });
  };
  const signInWithGithub = () => {
    signInWithPopup(firebaseAuth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.code.split("auth/")[1].split("-").join(" "));
        // console.log(error.code.split("auth/")[1].split("-").join(" "));
      });
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error.code.split("auth/")[1].split("-").join(" "));
        // console.log(error.code.split("auth/")[1].split("-").join(" "));
      });
  };
  const signOutUser = () => {
    signOut(firebaseAuth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        setError(error.code.split("auth/")[1].split("-").join(" "));
        // console.log(error.code.split("auth/")[1].split("-").join(" "));
      });
  };
  const isSignedIn = user ? true : false;
  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        isSignedIn,
        signInWithGoogle,
        signInWithGithub,
        signInUserWithEmailAndPassword,
        signOutUser,
        error,
        setError,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
