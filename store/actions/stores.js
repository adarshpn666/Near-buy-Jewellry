import { db, auth } from "../../firebase/firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";
import Shop from "../../models/shop";


export const LOAD_STORE = "LOAD_STORE";
export const LOAD_STORE_ERROR = "LOAD_STORE";

export const loadingStores = () => {
  return (dispatch) => {
    const q = query(collection(db, "shops"));
    const unsubscribe = onSnapshot(q,  (querySnapshot) => {
      const stores = [];
      querySnapshot.forEach((doc) => {
        
        stores.push(new Shop(
          doc.data().id,
          doc.data().email,
          doc.data().contact,
          doc.data().name,
          doc.data().smallDescription,
          doc.data().image,
        ));
      });
      dispatch({type:LOAD_STORE, stores:stores });
    });
  };
};
