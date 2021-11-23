import { AxiosError } from 'axios';
import { BooksType } from './types';

export const GET_BOOKS_START = 'contents/GET_BOOKS_START' as const;
export const GET_BOOKS_SUCCESS = 'contents/GET_BOOKS_SUCCESS' as const;
export const GET_BOOKS_ERROR = 'contents/GET_BOOKS_ERROR' as const;

export const getBooksStart = () => ({ type: GET_BOOKS_START });
export const getBooksSuccess = (contents: BooksType[]) => ({
  type: GET_BOOKS_SUCCESS,
  payload: contents
});
export const getBooksError = (error: AxiosError) => ({
  type: GET_BOOKS_ERROR,
  payload: error
});

export type GetBooksActionsType =
  | ReturnType<typeof getBooksStart>
  | ReturnType<typeof getBooksSuccess>
  | ReturnType<typeof getBooksError>;
