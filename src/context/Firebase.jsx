import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { useToast } from "@chakra-ui/react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref as ref_storage,
  uploadBytes,
} from "firebase/storage";
import { getDatabase, ref as ref_db, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_ZZYR9DvE2uBZWTRwCDbFZQ6ROQMPfgA",
  authDomain: "ecoshopp-c3a4d.firebaseapp.com",
  projectId: "ecoshopp-c3a4d",
  storageBucket: "ecoshopp-c3a4d.firebasestorage.app",
  messagingSenderId: "714063893040",
  appId: "1:714063893040:web:4af8b095f1b4521e2b53f5",
  databaseURL: "https://ecoshopp-c3a4d-default-rtdb.firebaseio.com/",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const storage = getStorage(firebaseApp);
export const db = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const toast = useToast();

  const signUpUserWithEmailAndPassword = (name, email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        set(ref_db(db, `users/${firebaseAuth.currentUser.uid}`), {
          name,
          email,
          photoURL: "",
        });
        updateProfile(firebaseAuth.currentUser, {
          displayName: name,
        }).then(() => {
          sendEmailVerification(firebaseAuth.currentUser).then(() => {
            toast({
              title: "Email verification sent.",
              status: "success",
              variant: "subtle",
              position: "top",
              isClosable: true,
            });
          });
        });
        toast({
          title: "Account created.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((res) => {
        set(ref_db(db, `users/${firebaseAuth.currentUser.uid}`), {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });
        toast({
          title: "Signed In Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };
  const signInWithGithub = () => {
    signInWithPopup(firebaseAuth, githubProvider)
      .then((res) => {
        set(ref_db(db, `users/${firebaseAuth.currentUser.uid}`), {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });
        toast({
          title: "Signed In Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        toast({
          title: "Signed In Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };
  const signOutUser = () => {
    signOut(firebaseAuth)
      .then(() => {
        toast({
          title: "Logged Out Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };
  const updateUserData = async (userDetails, name, image) => {
    if (name || image) {
      let imageURL = "";
      if (image) {
        const imageRef = ref_storage(storage, `images/profile/${user.uid}`);
        const uploadRef = await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(uploadRef.ref);
      }
      set(ref_db(db, `users/${user.uid}`), {
        ...userDetails,
        name: name ? name : userDetails.name,
        photoURL: image ? imageURL : userDetails.photoURL,
      });
      await updateProfile(firebaseAuth.currentUser, {
        displayName: name ? name : userDetails.name,
        photoURL: image ? imageURL : userDetails.photoURL,
      });
      toast({
        title: "Profile Updated Successfully.",
        status: "success",
        variant: "subtle",
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: "Please fill at least one field.",
        status: "error",
        variant: "subtle",
        position: "top",
        isClosable: true,
      });
    }
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
        user,
        userName,
        setUserName,
        updateUserData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
