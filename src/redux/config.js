export const urls = {
  v1: ``,
};

export const base_url = urls.v1;
export const image_url = '';
export const endpoints = {
  auth: {
    signup: '/',
    login: '/',
    logout: '/',
    verifySignUpCode: '/',
    forgotPasswordMail: '/',
    verifyCodeForgotPassword: '/',
    resetPassword: '/',
    changePassword: '/',
    completeProfile: '/',
    resentCodeEmail: '/',
    userverifyRecoverCode: '/',
    resetForgetPassword: '',
    deleteUserAccount: '/',
  },

  profile: {
    createMyProfile: '',
    createPatientProfile: '/',
  },
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
