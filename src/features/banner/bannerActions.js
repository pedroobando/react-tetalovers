import { CREATE_BANNER, DELETE_BANNER, FETCH_BANNERS, UPDATE_BANNER } from './bannerConstants';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/asyncReducer';
// import { fetchSampleData } from '../../app/api/mockApi';
import { toast } from 'react-toastify';

// export const loadEvent = () => {
//   return async (dispatch) => {
//     dispatch(asyncActionStart());
//     try {
//       const events = await fetchSampleData();
//       dispatch({ type: FETCH_BANNERS, payload: events });
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       dispatch(asyncActionError(error));
//       toast.error(error);
//     }
//   };
// };

export const listenToEvents = (banners) => {
  return {
    type: FETCH_BANNES,
    payload: banners,
  };
};

export const createBanner = (banner) => {
  return {
    type: CREATE_BANNER,
    payload: banner,
  };
};

export const updateBanner = (banner) => {
  return {
    type: UPDATE_BANNER,
    payload: banner,
  };
};

export const deleteBanner = (bannerId) => {
  return {
    type: DELETE_BANNER,
    payload: bannerId,
  };
};
