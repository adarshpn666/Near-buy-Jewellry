import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_OUT_ERROR,
  FIRST_TIME_APP
} from "../actions/auth";

const initialState = {
  user: null,
  token:null,
  isLoggedIn:false,
  didTryAutoLogin: false,
  error: null,
};

const signUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("SIGN IN SUCCESS");
      console.log(action.user);
      return { ...state, user: action.user, token:action.user.accessToken, isLoggedIn:true,error:null };

    case SIGN_UP:
      console.log("SIGN UP SUCCESS");
      console.log(action.user);
      return { ...state, user: action.user, token:action.user.accessToken, isLoggedIn:true,error:null };

    case SIGN_OUT:
      return { ...state, user : null, token:null, isLoggedIn:false,error:null};
    
    case SIGN_IN_ERROR:;
      return { ...state, error : action.error };
    
    case SIGN_UP_ERROR:
          console.log('Error Happened !', action.error);
          return { ...state, error : action.error };
    case SIGN_OUT_ERROR:
          console.log('Error Happened !', action.error);
          return { ...state, error : action.error };
    
    case FIRST_TIME_APP:
      console.log('running first time');
        return { ...state, didTryAutoLogin:true }
  }
  return state;
};

export default signUserReducer;
