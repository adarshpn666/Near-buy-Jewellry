import {
  doc,
  onSnapshot,
  getDoc,
  getDocs,
  collection,
  setDoc,
  addDoc,
  query,
  where
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorite = (uid, id, product) => {
  return async (dispatch) => {
    const docRef = query(collection(db, "favorites", uid,id), where("productId", "==", id));
    const docSnap = await getDocs(docRef);

    if (docSnap.exist) {
      console.log("Document data:", docSnap.data());
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      updateFav(docRef,{...product,productId:id});
    }

    dispatch({ type: ADD_FAVORITE });
  };
};

const updateFav = async (docRef, product) => {
  await addDoc(docRef, product);
};

const removeFav = async (docRef) => {
    await deleteDoc(docRef);
};
