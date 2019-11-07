import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {enterpriseReducer as enterprise} from './enterpriseReducer';
export default combineReducers({
  login: loginReducer,
  enterprise,
});
