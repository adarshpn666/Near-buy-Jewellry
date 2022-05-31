import favoriteReducer from "./reducers/favorites";
import customReducer from "./reducers/customize";
import authReducer from "./reducers/auth";
import storesReducer from './reducers/stores';
import shopProductReducer from "./reducers/shopProduct";

import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    favorite: favoriteReducer,
    custom : customReducer,
    auth : authReducer,
    stores:storesReducer,
    shopProduct:shopProductReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));

  export default store;
  