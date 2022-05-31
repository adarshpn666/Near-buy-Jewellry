import { LOAD_PRODUCT, LOAD_PRODUCT_ERROR } from "../actions/shopProduct";

const initialState = {
    products: [],
};

const shopProductReducer = (state = initialState,action) => {
    switch(action.type) {
        case LOAD_PRODUCT:
            return{products:action.products};
        case LOAD_PRODUCT_ERROR:
            console.log('error happen');
        default:
            return {...state};
    }
}

export default shopProductReducer;