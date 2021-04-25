//import { sampleData } from '../../app/api/sampleData';
import { CREATE_BANNER, UPDATE_BANNER, DELETE_BANNER, FETCH_BANNERS } from './bannerConstants';

const initialState = {
  banners: [],
};

const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BANNER:
      return {
        ...state,
        banners: [...state.banners, payload],
      };
    case UPDATE_BANNER:
      return {
        ...state,
        banners: [...state.banners.filter((ban) => ban.id !== payload.id), payload],
      };
    case DELETE_BANNER:
      return {
        ...state,
        banners: [...state.banners.filter((ban) => ban.id !== payload)],
      };
    case FETCH_BANNERS:
      return {
        ...state,
        banners: [...payload],
      };
    default:
      return state;
  }
};

export default bannerReducer;
