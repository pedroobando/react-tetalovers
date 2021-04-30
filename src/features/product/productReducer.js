import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from './productConstants';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((prd) => prd.id !== payload.id), payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((prd) => prd.id !== payload)],
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };

    default:
      return state;
  }
};

export default productReducer;
