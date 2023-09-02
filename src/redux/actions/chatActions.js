import {endpoints} from '../config';
import * as types from '../types';
import {post, get} from '../Api/index';
import {showToast} from '../Api/HelperFunction';

// import {console.log} from '../Api/HelperFunction';

export const getMyMatches = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.home.myMatches);
      dispatch({
        type: types.BTN_LOADING_END,
      });
      console.log(response, 'response');
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      console.log(e, 'eeee');
      setTimeout(() => {
        showToast(e);
      }, 1000);
      return Promise.reject(e);
    }
  };
};
