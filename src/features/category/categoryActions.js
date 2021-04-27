import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from './categoryConstants';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/asyncReducer';
// import { fetchSampleData } from '../../app/api/mockApi';
import { toast } from 'react-toastify';
import { listenToCategoriesFromFirestore } from '../../app/firestore/firestoreService';

export const loadCategory = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const categories = await listenToCategoriesFromFirestore();
      dispatch({ type: FETCH_CATEGORIES, payload: categories });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
};

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
