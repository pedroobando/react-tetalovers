import { combineReducers } from 'redux';
import testReducer from '../../features/sandox/testRedux';
import asyncReducer from '../async/asyncReducer';
import authReducer from '../../features/auth/authReducer';
// import bannerReducer from '../../features/banner/bannerReducer';
import categoryReducer from '../../features/category/categoryReducer';
import modalReducer from '../common/modals/modalReducer';
import productReducer from '../../features/product/productReducer';
import menuReducer from '../../features/nav/menuReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  test: testReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  // banner: bannerReducer,
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;
