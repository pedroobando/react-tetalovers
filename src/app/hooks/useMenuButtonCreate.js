import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { menuActivo, menuDesactivo } from '../../features/nav/menuReducer';

export const useMenuButtonCreate = ({ createURL, createText, deps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuActivo({ createURL, createText }));
    return () => {
      dispatch(menuDesactivo());
    };
  }, deps);
};
