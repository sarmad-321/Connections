import * as types from '../types';
import {base_url, endpoints} from '../config';
import {post, get} from '../Api/index';
import {showToast} from '../Api/HelperFunction';

export const createMyProfile = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await post(
        endpoints.profile.createMyProfile,
        data,
        true,
      );
      // console.log(response, 'responseresponse');

      dispatch({
        type: types.CREATE_MY_PROFILE,
      });
      setTimeout(() => {
        showToast('Profile Created Successfully');
      }, 1000);
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      // console.log(e, 'eeee');
      setTimeout(() => {
        showToast(e);
      }, 1000);
    }
  };
};

export const updateMyProfile = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await post(endpoints.profile.updateProfile, data, false);
      dispatch({
        type: types.GET_PROFILE_DETAILS,
        payload: response.user,
      });

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

export const getProfileDetails = data => {
  return async dispatch => {
    try {
      const response = await get(endpoints.profile.getProfileDetails);
      dispatch({
        type: types.LOADING_END,
      });
      // console.log(response, 'Profile Data');
      dispatch({
        type: types.GET_PROFILE_DETAILS,
        payload: response?.user,
      });

      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });

      // console.log(e, 'eeee');
      setTimeout(() => {
        // showToast(e);
      }, 1000);
    }
  };
};

export const updateProfilePicture = data => {
  return async dispatch => {
    dispatch({
      type: types.LOADING_END,
    });
    try {
      const editPhoto = await post(
        endpoints.profile.updateProfilePciture,
        data,
        true,
      );
      // console.log(editPhoto);
      // const profile = await get(endpoints.account.profile);
      // dispatch({type: actionTypes.saveProfile, user: profile.user});
      return Promise.resolve(editPhoto);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.reject(e);
    }
  };
};

export const getMyOrders = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(endpoints.profile.myOrders);
      // console.log(response, 'MY Orders response');
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      // console.log(e, 'eeee');
      setTimeout(() => {
        // console.log(e);
      }, 1000);
    }
  };
};

export const getMyBooking = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(endpoints.profile.myBookings);
      // console.log(response, 'My Bookings response');
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      // console.log(e, 'eeee');
      setTimeout(() => {
        // console.log(e);
      }, 1000);
    }
  };
};

export const contactUs = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await post(endpoints.contact.contactAdmin, data);
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });

      setTimeout(() => {
        showToast(e);
      }, 1000);
    }
  };
};

export const getNotifications = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });
      const response = await get(endpoints.profile.getNotifications);
      dispatch({
        type: types.LOADING_END,
      });
      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });

      setTimeout(() => {
        showToast(e);
      }, 1000);
    }
  };
};
