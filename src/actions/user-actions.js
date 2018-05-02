import * as types from './types';
import * as mensajes from '../utils/mensajes';
import { handleError } from './error-actions';
import { login, registro, recuperar, changePassword,fetchUserProfile }  from '../services/user';

export function getUserProfile() {
  return (dispatch, getState) => {
    dispatch({ type: types.SET_USER_PROFILE, payload: {nombre:'Robert'}});
  }
}
