export const BOOK_PAGE_INIT = 'BOOK_PAGE_INIT' as const;
export const BOOK_ERROR = 'BOOK_ERROR' as const;
export const BOOK_SUCCESS = 'BOOK_SUCCESS' as const;
export const BOOK_CREATE_INIT = 'BOOK_CREATE_INIT' as const;
export const BOOK_CREATE_SUCCESS = 'BOOK_CREATE_SUCCESS' as const;
export const BOOK_CREATE_ERROR = 'BOOK_CREATE_ERROR' as const;
export const BOOK_UPDATE_INIT = 'BOOK_UPDATE_INIT' as const;
export const BOOK_UPDATE_ERROR = 'BOOK_UPDATE_ERROR' as const;
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS' as const;
export const BOOK_DELETE_INIT = 'BOOK_DELETE_INIT' as const;
export const BOOK_DELETE_ERROR = 'BOOK_DELETE_ERROR' as const;
export const BOOK_DELETE_SUCCESS = 'BOOK_DELETE_SUCCESS' as const;


export function bookPageInit() {
  return {
      type: BOOK_PAGE_INIT,
  };
}

export function bookError(error) {
  return {
      type: BOOK_ERROR,
      error,
  };
}

export function bookSuccess(payload) {
  return {
      type: BOOK_SUCCESS,
      payload
  };
}
export function bookCreateInit(payload) {
  return {
      type: BOOK_CREATE_INIT,
      payload
  };
}
export function bookCreateError(error) {
  return {
      type: BOOK_CREATE_ERROR,
      error,
  };
}
export function bookCreateSuccess(payload) {
  return {
      type: BOOK_CREATE_SUCCESS,
      payload
  };
}
export function bookUpdateInit(payload) {
  return {
      type: BOOK_UPDATE_INIT,
      payload
  };
}
export function bookUpdateError(error) {
  return {
      type: BOOK_UPDATE_ERROR,
      error,
  };
}
export function bookUpdateSuccess(payload) {
  return {
      type: BOOK_UPDATE_SUCCESS,
      payload
  };
}
export function bookDeleteInit(payload) {
  return {
      type: BOOK_DELETE_INIT,
      payload
  };
}
export function bookDeleteError(error) {
  return {
      type: BOOK_DELETE_ERROR,
      error,
  };
}
export function bookDeleteSuccess(payload) {
  return {
      type: BOOK_DELETE_SUCCESS,
      payload
  };
}
export type GetBooksActionsType =
  | ReturnType<typeof bookPageInit>
  | ReturnType<typeof bookError>
  | ReturnType<typeof bookSuccess>
  | ReturnType<typeof bookCreateInit>
  | ReturnType<typeof bookCreateSuccess>
  | ReturnType<typeof bookCreateError>
  | ReturnType<typeof bookUpdateInit>
  | ReturnType<typeof bookUpdateError>
  | ReturnType<typeof bookUpdateSuccess>
  | ReturnType<typeof bookDeleteInit>
  | ReturnType<typeof bookDeleteError>
  | ReturnType<typeof bookDeleteSuccess>

