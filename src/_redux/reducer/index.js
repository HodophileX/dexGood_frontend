import { combineReducers } from 'redux';
import { USER_LOGOUT } from '../action/user/types';
import { postReducer } from './post';
import { userReducer } from './user';

const appReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
