import { combineReducers } from 'redux';
import testReducer from '../../features/sandox/testRedux';
import asyncReducer from '../async/asyncReducer';
import authReducer from '../../features/auth/authReducer';
import bannerReducer from '../../features/banner/bannerReducer';

import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
  test: testReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  banner: bannerReducer,
});

export default rootReducer;
