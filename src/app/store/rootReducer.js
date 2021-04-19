import { combineReducers } from 'redux';
import testReducer from '../../features/sandox/testRedux';
import asyncReducer from '../async/asyncReducer';
import authReducer from '../../features/auth/authReducer';
// import eventReducer from '../../features/events/eventReducer';

import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
  test: testReducer,
  // event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
