import {endpoints} from '../config';
import * as types from '../types';
import {post, get} from '../Api/index';
import {showToast} from '../Api/HelperFunction';

export const getDates = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.home.myDates, data);
      dispatch({
        type: types.BTN_LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      // console.log(e, 'eeee');
      setTimeout(() => {
        showToast(e);
      }, 1000);
    }
  };
};

export const addComment = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await post(endpoints.home.addComment, data, false);

      dispatch({
        type: types.BTN_LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      // console.log(e, 'eeee');
      setTimeout(() => {
        showToast(e);
      }, 1000);
    }
  };
};

export const getMyRequests = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.home.myRequest);
      dispatch({
        type: types.BTN_LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      // console.log(e, 'eeee');

      setTimeout(() => {
        showToast(e);
      }, 1000);
      return Promise.reject(e);
    }
  };
};
export const getMyMatches = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.home.myMatches);
      dispatch({
        type: types.BTN_LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      // console.log(e, 'eeee');

      setTimeout(() => {
        showToast(e);
      }, 1000);
      return Promise.reject(e);
    }
  };
};

export const getMyPromptComments = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.home.getPromptComments, data);
      console.log(response, 'rsponse of comments');
      dispatch({
        type: types.BTN_LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.BTN_LOADING_END,
      });
      // console.log(e, 'eeee');

      setTimeout(() => {
        showToast(e);
      }, 1000);
      return Promise.reject(e);
    }
  };
};
