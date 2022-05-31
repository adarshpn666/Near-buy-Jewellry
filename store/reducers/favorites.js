import { db, auth } from "../../firebase/firebase-config";
import { doc, onSnapshot, updateDoc, setDoc } from "firebase/firestore";
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites';
const initialState = {
 
    favoritesProducts: [],
}

const favoriteReducer = (state  = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE :
            
            return {favoritesProducts : action.favorites};
        default:
            return state;
    }
    return state;
}

export default favoriteReducer;