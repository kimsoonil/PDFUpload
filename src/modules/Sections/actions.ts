export const SECTION_INIT = 'SECTION_INIT' as const;
export const SECTION_ERROR = 'SECTION_ERROR' as const;
export const SECTION_SUCCESS = 'SECTION_SUCCESS' as const;
export const SECTION_SETTING_INIT = 'SECTION_SETTING_INIT' as const;
export const SECTION_SETTING_ERROR = 'SECTION_SETTING_ERROR' as const;
export const SECTION_SETTING_SUCCESS = 'SECTION_SETTING_SUCCESS' as const;
export const SECTION_CREATE_INIT = 'SECTION_CREATE_INIT' as const;
export const SECTION_CREATE_SUCCESS = 'SECTION_CREATE_SUCCESS' as const;
export const SECTION_CREATE_ERROR = 'SECTION_CREATE_ERROR' as const;
export const SECTION_UPDATE_INIT = 'SECTION_UPDATE_INIT' as const;
export const SECTION_UPDATE_ERROR = 'SECTION_UPDATE_ERROR' as const;
export const SECTION_UPDATE_SUCCESS = 'SECTION_UPDATE_SUCCESS' as const;
export const SECTION_DELETE_INIT = 'SECTION_DELETE_INIT' as const;
export const SECTION_DELETE_ERROR = 'SECTION_DELETE_ERROR' as const;
export const SECTION_DELETE_SUCCESS = 'SECTION_DELETE_SUCCESS' as const;


export function sectionInit() {
  return {
      type: SECTION_INIT,
  };
}

export function sectionError(error) {
  return {
      type: SECTION_ERROR,
      error,
  };
}

export function sectionSuccess(payload) {
  return {
      type: SECTION_SUCCESS,
      payload
  };
}
export function sectionSettingInit() {
  return {
      type: SECTION_SETTING_INIT,
  };
}

export function sectionSettingError(error) {
  return {
      type: SECTION_SETTING_ERROR,
      error,
  };
}

export function sectionSettingSuccess(payload) {
  return {
      type: SECTION_SETTING_SUCCESS,
      payload
  };
}
export function sectionCreateInit(payload) {
  return {
      type: SECTION_CREATE_INIT,
      payload
  };
}
export function sectionCreateError(error) {
  return {
      type: SECTION_CREATE_ERROR,
      error,
  };
}
export function sectionCreateSuccess(payload) {
  return {
      type: SECTION_CREATE_SUCCESS,
      payload
  };
}
export function sectionUpdateInit(payload) {
  return {
      type: SECTION_UPDATE_INIT,
      payload
  };
}
export function sectionUpdateError(error) {
  return {
      type: SECTION_UPDATE_ERROR,
      error,
  };
}
export function sectionUpdateSuccess(payload) {
  return {
      type: SECTION_UPDATE_SUCCESS,
      payload
  };
}
export function sectionDeleteInit(payload) {
  return {
      type: SECTION_DELETE_INIT,
      payload
  };
}
export function sectionDeleteError(error) {
  return {
      type: SECTION_DELETE_ERROR,
      error,
  };
}
export function sectionDeleteSuccess(payload) {
  return {
      type: SECTION_DELETE_SUCCESS,
      payload
  };
}
export type GetBooksActionsType =
  | ReturnType<typeof sectionInit>
  | ReturnType<typeof sectionError>
  | ReturnType<typeof sectionSuccess>
  | ReturnType<typeof sectionSettingInit>
  | ReturnType<typeof sectionSettingError>
  | ReturnType<typeof sectionSettingSuccess>
  | ReturnType<typeof sectionCreateInit>
  | ReturnType<typeof sectionCreateSuccess>
  | ReturnType<typeof sectionCreateError>
  | ReturnType<typeof sectionUpdateInit>
  | ReturnType<typeof sectionUpdateError>
  | ReturnType<typeof sectionUpdateSuccess>
  | ReturnType<typeof sectionDeleteInit>
  | ReturnType<typeof sectionDeleteError>
  | ReturnType<typeof sectionDeleteSuccess>