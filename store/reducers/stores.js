import { LOAD_STORE, LOAD_STORE_ERROR } from "../actions/stores";

const initialState = {
    stores: [],
};

const storesReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOAD_STORE:
            return{stores:action.stores};
        case LOAD_STORE_ERROR:
            console.log('error happen');
        default:
            return {...state};
    }
}

export default storesReducer;