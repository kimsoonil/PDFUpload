import {
  GetBooksActionsType,
  BOOK_PAGE_INIT,
  BOOK_ERROR,
  BOOK_SUCCESS,
  BOOK_DETAIL_INIT,
  BOOK_DETAIL_ERROR,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_CLOSE,
  BOOK_DELETE_ERROR,
  BOOK_DELETE_SUCCESS,
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
    case BOOK_PAGE_INIT:
      return {
        ...state,
        loading: true
      };
    case BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case BOOK_DETAIL_INIT:
      return {
        ...state,
        loading: true
      };
    case BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case BOOK_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case BOOK_DETAIL_CLOSE:
      return {
        ...state,
        loading: true
      };
    case BOOK_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case BOOK_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
