const MENU_ACTIVO = 'MENU_ACTIVO';
const MENU_DESACTIVO = 'MENU_DESACTIVO';

export const menuActivo = (payload) => {
  return {
    type: MENU_ACTIVO,
    payload,
  };
};

export const menuDesactivo = () => {
  return {
    type: MENU_DESACTIVO,
  };
};

// const initialState = null;

const initialState = {
  menuActive: false,
  currentMenu: {
    createURL: '/create',
    updateURL: '/update',
    deleteURL: '/delete',
    createText: 'Crear',
    updateText: 'Actualizar',
    deleteText: 'Eliminar',
  },
};

const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MENU_ACTIVO:
      return {
        ...state,
        menuActive: true,
        currentMenu: {
          createURL: payload.createURL,
          updateURL: payload.updateURL,
          deleteURL: payload.deleteURL,
          createText: payload.createText,
          updateText: payload.updateText,
          deleteText: payload.deleteText,
        },
      };

    case MENU_DESACTIVO:
      return { menuActive: false, currentMenu: null };

    default:
      return state;
  }
};

export default menuReducer;
