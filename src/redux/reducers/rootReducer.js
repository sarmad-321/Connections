import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  commonReducer,
});

export default rootReducer;
