import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...state,
        user: action.payload,
      };

    case types.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.LOGOUT: {
      return {
        ...state,
        user: null,
        token: null,
      };
    }
    case types.REMEMBER_ME: {
      return {
        ...state,
        rememberData: action.payload,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }

    case types.FORGOT_PASSWORD:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.VERIFY_CODE:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
