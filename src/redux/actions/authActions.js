import { endpoints } from '../config';
import * as types from '../types';
import { post, get } from '../Api/index';
import { showToast } from '../Api/HelperFunction';

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
  }
}

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
        const response = await post(endpoints.auth.completeProfile, data, true);

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
