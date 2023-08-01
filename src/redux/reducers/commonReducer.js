import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates;

const commonReducer = (state = initialState.commonReducer, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };

    case types.BTN_LOADING_START:
      return {
        ...state,
        btnLoader: true,
      };
    case types.BTN_LOADING_END:
      return {
        ...state,
        btnLoader: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
