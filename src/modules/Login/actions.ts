export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN_FAILURE' as const;
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE' as const;
export const LOGGED_IN = 'Logged in';
export const LOGGED_OUT = 'Logged out';


export function loginRequest(payload) {
  return {
      type: LOGIN_REQUEST,
      payload
  };
}

export function loginSuccess() {
  return {
      type: LOGIN_SUCCESS,
  };
}

export function loginFailure(error) {
  return {
      type: LOGIN_FAILURE,
      error
  };
}
export function logoutRequest() {
  return {
      type: LOGOUT_REQUEST,
  };
}
export function logoutSuccess() {
  return {
      type: LOGOUT_SUCCESS,
  };
}
export function logoutFailure(error) {
  return {
      type: LOGOUT_FAILURE,
      error
  };
}

export type GetBooksActionsType =
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof logoutSuccess>
  | ReturnType<typeof logoutFailure>