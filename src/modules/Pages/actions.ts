export const PAGE_INIT = 'PAGE_INIT' as const;
export const PAGE_ERROR = 'PAGE_ERROR' as const;
export const PAGE_SUCCESS = 'PAGE_SUCCESS' as const;
export const PAGE_CREATE_INIT = 'PAGE_CREATE_INIT' as const;
export const PAGE_CREATE_SUCCESS = 'PAGE_CREATE_SUCCESS' as const;
export const PAGE_CREATE_ERROR = 'PAGE_CREATE_ERROR' as const;
export const PAGE_UPDATE_INIT = 'PAGE_UPDATE_INIT' as const;
export const PAGE_UPDATE_ERROR = 'PAGE_UPDATE_ERROR' as const;
export const PAGE_UPDATE_SUCCESS = 'PAGE_UPDATE_SUCCESS' as const;
export const PAGE_DELETE_INIT = 'PAGE_DELETE_INIT' as const;
export const PAGE_DELETE_ERROR = 'PAGE_DELETE_ERROR' as const;
export const PAGE_DELETE_SUCCESS = 'PAGE_DELETE_SUCCESS' as const;


export function pageInit() {
  return {
      type: PAGE_INIT,
  };
}

export function pageError(error) {
  return {
      type: PAGE_ERROR,
      error,
  };
}

export function pageSuccess(payload) {
  return {
      type: PAGE_SUCCESS,
      payload
  };
}
export function pageCreateInit(payload) {
  return {
      type: PAGE_CREATE_INIT,
      payload
  };
}
export function pageCreateError(error) {
  return {
      type: PAGE_CREATE_ERROR,
      error,
  };
}
export function pageCreateSuccess(payload) {
  return {
      type: PAGE_CREATE_SUCCESS,
      payload
  };
}
export function pageUpdateInit(payload) {
  return {
      type: PAGE_UPDATE_INIT,
      payload
  };
}
export function pageUpdateError(error) {
  return {
      type: PAGE_UPDATE_ERROR,
      error,
  };
}
export function pageUpdateSuccess(payload) {
  return {
      type: PAGE_UPDATE_SUCCESS,
      payload
  };
}
export function pageDeleteInit(payload) {
  return {
      type: PAGE_DELETE_INIT,
      payload
  };
}
export function pageDeleteError(error) {
  return {
      type: PAGE_DELETE_ERROR,
      error,
  };
}
export function pageDeleteSuccess(payload) {
  return {
      type: PAGE_DELETE_SUCCESS,
      payload
  };
}
export type GetBooksActionsType =
  | ReturnType<typeof pageInit>
  | ReturnType<typeof pageError>
  | ReturnType<typeof pageSuccess>
  | ReturnType<typeof pageCreateInit>
  | ReturnType<typeof pageCreateSuccess>
  | ReturnType<typeof pageCreateError>
  | ReturnType<typeof pageUpdateInit>
  | ReturnType<typeof pageUpdateError>
  | ReturnType<typeof pageUpdateSuccess>
  | ReturnType<typeof pageDeleteInit>
  | ReturnType<typeof pageDeleteError>
  | ReturnType<typeof pageDeleteSuccess>