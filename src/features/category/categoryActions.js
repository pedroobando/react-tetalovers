import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from './categoryConstants';

export const listenToCategories = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    payload: categories,
  };
};

export const createCategory = (category) => {
  return {
    type: CREATE_CATEGORY,
    payload: category,
  };
};

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    payload: category,
  };
};

export const deleteCategory = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    payload: categoryId,
  };
};
