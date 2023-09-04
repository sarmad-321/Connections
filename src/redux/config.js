export const urls = {
  v1: `https://average-stole-fox.cyclic.app/api`,
  v2: 'http://143.198.64.59/api',
};

export const base_url = urls.v2;
export const image_url = '';
export const endpoints = {
  auth: {
    signup: '/user/register',
    login: '/user/login',
    logout: '/',
    verifyUser: '/user/verifyUser',
    prompts: '/prompts',
    verifySignUpCode: '/',
    forgotPasswordMail: '/',
    verifyCodeForgotPassword: '/',
    resetPassword: '/',
    changePassword: '/',
    completeProfile: '/user/completeProfile',
    resentCodeEmail: '/',
    userverifyRecoverCode: '/',
    resetForgetPassword: '',
    deleteUserAccount: '/',
  },
  home: {
    myDates: '/date/myDates',
    addComment: '/date/addComment',
    myRequest: '/date/myRequests',
    getPromptComments: '/date/promptComments',
    myMatches: '/date/myMatches',
  },
  profile: {
    getProfileDetails: '/user/profile',
    createMyProfile: '',
    createPatientProfile: '/',
  },
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
