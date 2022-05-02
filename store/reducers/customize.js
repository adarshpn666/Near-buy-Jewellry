import { ADD_CUSTOM } from '../actions/customize';

const initialState = {
    customOrders: [],
}

const customReducer = (state  = initialState, action) => {
    switch(action.type){
        case ADD_CUSTOM:
            return{...state, customOrders : state.customOrders.concat(action.order)}
    }
    return state;
}

export default customReducer;