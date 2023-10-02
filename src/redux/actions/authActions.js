import {base_url, endpoints} from '../config';
import * as types from '../types';
import {post, get} from '../Api/index';
import {log, showToast} from '../Api/HelperFunction';
import axios from 'axios';
import {store} from '../store/index';

// import {console.log} from '../Api/HelperFunction';

export const verifyUser = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.auth.verifyUser, data);
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
export const getPrompt = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await get(endpoints.auth.prompts, data);
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

export const userSignUp = data => {
  //console.log(data, 'userSignUpData');
  return async dispatch => {
    try {
      dispatch({
        type: types.BTN_LOADING_START,
      });
      const response = await post(endpoints.auth.signup, data, false);
      console.log(response?.token, 'token from signup');
      dispatch({
        type: types.LOGIN,
        payload: {
          token: response?.token,
        },
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

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: types.LOGOUT,
    });

    // const response = await get(endpoints.auth.logout, false);
    dispatch({
      type: types.LOADING_END,
    });

    return Promise.resolve();
  };
};

export const rembemberMe = data => {
  return async dispatch => {
    dispatch({
      type: types.REMEMBER_ME,
      payload: data,
    });
    return Promise.resolve();
  };
};

export const userLogin = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.BTN_LOADING_START,
        });
        const response = await post(endpoints.auth.login, data, false);
        dispatch({
          type: types.BTN_LOADING_END,
        });
        dispatch({
          type: types.LOGIN,
          payload: {
            token: response?.token,
          },
        });
        dispatch({
          type: types.GET_PROFILE_DETAILS,
          payload: response?.user,
        });

        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.BTN_LOADING_END,
        });
        showToast(e);
        reject(e);
        return Promise.reject(e);
      }
    });
  };
};

export const verifyEmailPassword = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.BTN_LOADING_START,
        });
        const response = await post(
          endpoints.profile.changePassword,
          data,
          false,
        );
        dispatch({
          type: types.BTN_LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.BTN_LOADING_END,
        });
        showToast(e);
        reject(e);

        return Promise.reject(e);
      }
    });
  };
};

export const changePassword = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.BTN_LOADING_START,
        });
        const response = await post(
          endpoints.profile.changePassword,
          data,
          false,
        );
        dispatch({
          type: types.BTN_LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.BTN_LOADING_END,
        });
        showToast(e);
        reject(e);

        return Promise.reject(e);
      }
    });
  };
};

export const forgotPassEmail = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.BTN_LOADING_START,
        });
        const response = await post(
          endpoints.auth.forgotPasswordMail,
          data,
          false,
        );
        dispatch({
          type: types.BTN_LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.BTN_LOADING_END,
        });
        showToast(e);
        reject(e);
        return Promise.reject(e);
      }
    });
  };
};

export const forgotPassReset = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await post(endpoints.auth.resetPassword, data, false);

        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });

        reject(e);

        return Promise.reject(e);
      }
    });
  };
};

export const forgotPassCode = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.BTN_LOADING_START,
        });
        const response = await post(
          endpoints.auth.verifyCodeForgotPassword,
          data,
          false,
        );

        dispatch({
          type: types.BTN_LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.BTN_LOADING_END,
        });
        reject(e);
        return Promise.reject(e);
      }
    });
  };
};

export const verifyCode = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await post(
          endpoints.auth.userverifyRecoverCode,
          data,
          false,
        );

        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);

        showToast(e);
        return Promise.reject(e);
      }
    });
  };
};

export const completeProfile = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await post(
          endpoints.auth.completeProfile + '/' + data.user,
          data,
        );

        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        showToast(e);
        reject(e);

        return Promise.reject(e);
      }
    });
  };
};

export const resetForgetPassword = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await post(endpoints.auth.resetForgetPassword, data);

        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        showToast(e);
        reject(e);
        return Promise.reject(e);
      }
    });
  };
};

export const deleteUserAccount = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const response = await post(
          endpoints.auth.deleteUserAccount,
          null,
          false,
        );

        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        showToast(e);
        reject(e);

        return Promise.reject(e);
      }
    });
  };
};

export const uploadImages = (data, userId) => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });

        const formData = jsonToFormData(data);

        const response = await fetch(
          base_url + endpoints.general.uploadImages + userId,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            method: 'POST',
            body: formData,
          },
        ).then(res => res.json());
        console.log(response, 'response');
        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        showToast(e);
        reject(e);
        console.log(e);

        return Promise.reject(e);
      }
    });
  };
};

export const chatImageUpload = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const result = store.getState();

        const formData = jsonToFormData(data);

        const response = await fetch(
          base_url + endpoints.general.chatImageUpload,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + result.authReducer?.token,
            },
            method: 'POST',
            body: formData,
          },
        ).then(res => res.json());
        console.log(response, 'response');
        dispatch({
          type: types.LOADING_END,
        });
        resolve(response);
        return Promise.resolve(response);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        showToast(e);
        reject(e);
        console.log(e, 'error in action');

        return Promise.reject(e);
      }
    });
  };
};

function jsonToFormData(jsonArray) {
  const formData = new FormData();

  jsonArray.forEach((item, index) => {
    // Append the file to the FormData with the key "images"
    formData.append('images', item.images);
  });
  return formData;
}
