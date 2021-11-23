import { AxiosError } from 'axios';
import { ContentsType } from './types';

export const GET_CONTENTS_START = 'contents/GET_CONTENTS_START' as const;
export const GET_CONTENTS_SUCCESS = 'contents/GET_CONTENTS_SUCCESS' as const;
export const GET_CONTENTS_ERROR = 'contents/GET_CONTENTS_ERROR' as const;

export const getContentsStart = () => ({ type: GET_CONTENTS_START });
export const getContentsSuccess = (contents: ContentsType[]) => ({
  type: GET_CONTENTS_SUCCESS,
  payload: contents
});
export const getContentsError = (error: AxiosError) => ({
  type: GET_CONTENTS_ERROR,
  payload: error
});

export type GetContentsActionsType =
  | ReturnType<typeof getContentsStart>
  | ReturnType<typeof getContentsSuccess>
  | ReturnType<typeof getContentsError>;
