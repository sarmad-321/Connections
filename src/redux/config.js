export const urls = {
  v1: `https://average-stole-fox.cyclic.app/api`,
};

export const base_url = urls.v1;
export const image_url = '';
export const endpoints = {
  auth: {
    signup: '/',
    login: '/',
    logout: '/',
    verifyUser: '/user/verifyUser',
    prompts: '/prompts',
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
