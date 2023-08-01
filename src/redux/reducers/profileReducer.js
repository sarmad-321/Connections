import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.profileReducer;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case types.GET_UNREADNOTIFICATIONS:
      return {
        ...state,
        unRead: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
