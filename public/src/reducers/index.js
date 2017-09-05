import { combineReducers } from 'redux';
import Auth from './Auth';

const RootReducer = combineReducers({
  auth: Auth,
});

export default RootReducer;
