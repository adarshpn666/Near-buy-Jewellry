import { db, auth } from "../../firebase/firebase-config";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import Product from "../../models/Product";


export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const LOAD_PRODUCT_ERROR = "LOAD_PRODUCT_ERROR";

export const loadingProducts = (shopId) => {
  return (dispatch) => {
    const q = query(collection(db, "products"),where("shopId", "==",shopId ));
    const unsubscribe = onSnapshot(q,  (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        
        products.push(doc.data());
      });
      dispatch({type:LOAD_PRODUCT, products:products });
    });
  };
};
