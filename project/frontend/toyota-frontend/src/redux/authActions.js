import * as ACTIONS from "./Constants";
import { login } from '../api/apiCalls';

export const loginSuccess = (authState) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    payload: authState,
  };
};

export const loginHandler = credentials => {
  return async function(dispatch) {
    const response = await login(credentials);
    const authState = {
      ...response.data.user,
      password: credentials.password,
      //token: response.data.token
    };
    dispatch(loginSuccess(authState));
    return response;
  };
};

export const logoutSuccess = () => {
  return async function(dispatch){
    try {
      //await logout();
    } catch (err){

    }
    dispatch({
      type: ACTIONS.LOGOUT_SUCCESS
    })
  }
};
