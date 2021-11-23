import {
  GetBooksActionsType,
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR
} from './actions';
import { BooksType } from './types';
import { AxiosError } from 'axios';

type State = {
  loading: boolean;
  data: BooksType[] | null;
  error: AxiosError | null;
};

const initiaState = {
  loading: false,
  data: null,
  error: null
};

export default function users(
  state: State = initiaState,
  action: GetBooksActionsType
): State {
  switch (action.type) {
    case GET_BOOKS_START:
      return {
        ...state,
        loading: true
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
