import { CREATE_BANNER, DELETE_BANNER, FETCH_BANNERS, UPDATE_BANNER } from './bannerConstants';

export const listenToBanners = (banners) => {
  return {
    type: FETCH_BANNERS,
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
