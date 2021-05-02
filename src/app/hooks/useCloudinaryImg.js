import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../async/asyncReducer';

export const useCloudinaryImg = ({ original, file, deps }) => {
  const dispatch = useDispatch();

  const cloudURL = 'https://api.cloudinary.com/v1_1/dj34u7d2f7o/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'tetalovers');
  formData.append('file', file);

  useEffect(async () => {
    dispatch(asyncActionStart());
    try {
      const resp = await fetch(cloudURL, { method: 'POST', body: formData });
      if (!resp.ok) {
        throw await resp.json();
      }
      const respCloud = await resp.json();

      dispatch(asyncActionFinish());
      // original = respCloud.secure_url;
      return respCloud.secure_url;
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  }, deps);
};
