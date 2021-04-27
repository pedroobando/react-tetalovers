import {
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from './categoryConstants';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories.filter((cat) => cat.id !== payload.id), payload],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories.filter((cat) => cat.id !== payload)],
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
      };
    default:
      return state;
  }
};

export default categoryReducer;
