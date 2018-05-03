import * as types from './types';

export function getUserProfile() {
  return (dispatch, getState) => {
    dispatch({ type: types.SET_USER_PROFILE, payload: {nombre:'Robert'}});
  }
}
