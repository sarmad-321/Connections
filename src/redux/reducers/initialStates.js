const authReducer = {
  loggedin: false,
  isLoading: false,
  rememberData: {},
  token: null,
};

const profileReducer = {
  isLoading: false,
  unRead: 0,
  user: {},
};
const commonReducer = {
  isLoading: false,
  btnLoader: false,
};

const initialStates = {
  authReducer: authReducer,
  profileReducer: profileReducer,
  commonReducer: commonReducer,
};
export default initialStates;
