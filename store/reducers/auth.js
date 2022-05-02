import { CURR_USER } from '../actions/auth';

const initialState = {
    user: '',
}

const loggedUserReducer = (state  = initialState, action) => {
    switch(action.type){
        case CURR_USER:
            return{...state, user : action.user}
    }
    return state;
}

export default loggedUserReducer;