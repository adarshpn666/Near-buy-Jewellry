import { db, auth } from "../../firebase/firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";
import * as SecureStore from 'expo-secure-store';




export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_OUT_ERROR = "SIGN_OUT_ERROR";
export const FIRST_TIME_APP = "FIRST_TIME_APP";

export const signInUser = (userDetails,  setIsError,setErrorMessage) => {
  return (dispatch) => {

    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
       const userDetails = userCredential.user;
        dispatch({ type: SIGN_IN, user: userDetails });
        saveToken("accessToken", userDetails.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = '';
        if(errorCode === 'auth/invalid-email'){
          errorMessage = 'Invalid Email';
        }else if(errorCode === 'auth/user-not-found'){
          errorMessage = 'user not found';
        }else if(errorCode === 'auth/wrong-password'){
          errorMessage = 'Wrong password';
        }
        setErrorMessage(errorMessage);
        setIsError(true);
        dispatch({ type: SIGN_IN_ERROR, error:errorMessage});
      });
};

};

export const signUpUser = (userDetails,password) => {
  
    return  (dispatch) =>  {

        const response = createUserWithEmailAndPassword(auth, userDetails.email, password)
          .then((userCredential) => {
           const user = userCredential.user;
           saveToken("accessToken", user.accessToken);
           const userInfo = {...userDetails,id:user.uid}
           addUserData(user.uid, userInfo);
            dispatch({ type: SIGN_UP, user: user });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({ type: SIGN_UP_ERROR, error:errorMessage});

          });
    };
  
};

export const firstTimeApp = () => {
  
  return  {
    type:FIRST_TIME_APP,
  };

};




export const signOutUser = () => {
  return (dispatch) => {
  signOut(auth).then(() => {
    deleteToken('accessToken');
    dispatch({ type: SIGN_OUT});
  }).catch((error) => {
    dispatch({ type: SIGN_OUT_ERROR});
  });
};
  
};


async function addUserData(uid, userdetails){
  
  try {
    const docRef = await setDoc(doc(db, "users", uid), userdetails);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}


async function saveToken(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function deleteToken(key) {
  await SecureStore.deleteItemAsync(key, value);
}