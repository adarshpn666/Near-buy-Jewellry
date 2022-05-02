import PRODUCTS from '../../database/TempProductData'
import { TOGGLE_FAVORITE } from '../actions/favorites';
const initialState = {
    products : PRODUCTS,
    favoritesProducts: [],
}

const favoriteReducer = (state  = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE :
            const existingIndex  = state.favoritesProducts.findIndex(product => product.id === action.productId)
            if(existingIndex >= 0){
                const updatedFavProduct = [...state.favoritesProducts];
                updatedFavProduct.splice(existingIndex,1);
                return {...state, favoritesProducts : updatedFavProduct}
            }else{
                const product  = state.products.find(product => product.id === action.productId);
                return {...state,favoritesProducts : state.favoritesProducts.concat(product)};
            }
        default:
            return state;
    }
    return state;
}

export default favoriteReducer;