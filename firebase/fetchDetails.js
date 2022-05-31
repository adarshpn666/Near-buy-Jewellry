import { collection, query, where, onSnapshot,doc, getDoc } from "firebase/firestore";

import { db, auth } from "./firebase-config";




export const fetchUser = async (uid, setUserDetails) => {
const docRef = doc(db, "users", uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setUserDetails(docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}