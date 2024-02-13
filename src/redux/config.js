export const urls = {
  v1: `https://average-stole-fox.cyclic.app/api`,
  v2: 'http://143.198.64.59/api',
  local: 'http://192.168.0.113:4000/api',
};

function trimApi(url) {
  if (url.endsWith('/api')) {
    return url.slice(0, -3); // Remove the last 3 characters ("api")
  } else {
    return url;
  }
}

export const base_url = urls.local;
export const image_url = trimApi(base_url);
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
  chat: {
    sendMessage: '/chat/sendMessage',
    getAllMessages: '/chat/getConversation',
  },
  profile: {
    getProfileDetails: '/user/profile',
    createMyProfile: '',
    updateProfile: '/user/editProfile',
  },
  general: {
    uploadImages: '/image/upload/',
    chatImageUpload: '/image/chatUpload',
  },
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
