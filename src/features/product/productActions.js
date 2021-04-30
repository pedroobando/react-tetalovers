import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
} from './productConstants';

export const listenToProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};
