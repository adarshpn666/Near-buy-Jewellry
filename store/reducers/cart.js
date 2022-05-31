import PRODUCTS from "../../data/TempProductData";
import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../actions/cart";

const initialState = {
  products: PRODUCTS,
  cartProducts: [],
  price: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      const existingIndex = state.favoritesProducts.findIndex(
        (product) => product.id === action.productId
      );
      if (existingIndex >= 0) {
        const updatedFavProduct = [...state.favoritesProducts];
        updatedFavProduct.splice(existingIndex, 1);
        return { ...state, favoritesProducts: updatedFavProduct };
      } else {
        const product = state.products.find(
          (product) => product.id === action.productId
        );
        return {
          ...state,
          favoritesProducts: state.favoritesProducts.concat(product),
        };
      }
    case REMOVE_ITEM_CART:
      const existingIndex1 = state.favoritesProducts.findIndex(
        (product) => product.id === action.productId
      );
      if (existingIndex >= 0) {
        const updatedFavProduct = [...state.favoritesProducts];
        updatedFavProduct.splice(existingIndex, 1);
        return { ...state, favoritesProducts: updatedFavProduct };
      } else {
        const product = state.products.find(
          (product) => product.id === action.productId
        );
        return {
          ...state,
          favoritesProducts: state.favoritesProducts.concat(product),
        };
      }
    default:
      return state;
  }
  return state;
};

export default cartReducer;
