import  * as actionTypes from './actions';
import { PagesType } from './types';
import { AxiosError } from 'axios';

type State = {
  loading: boolean;
  data: {[key:string]:any} | null;
  error: AxiosError | null;
};

const initiaState = {
  loading: false,
  data: null,
  error: null
};

export default function users(
  state: State = initiaState,
  action: actionTypes.GetBooksActionsType
): State {
  switch (action.type) {
    case actionTypes.SECTION_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.SECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case actionTypes.SECTION_CREATE_INIT:
        return {
          ...state,
          loading: true,
        }
      case actionTypes.SECTION_CREATE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload
        }
      case actionTypes.SECTION_CREATE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        }   
    case actionTypes.SECTION_UPDATE_INIT:
      return {
        ...state,
        loading: true,
        
      }
    case actionTypes.SECTION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.SECTION_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case actionTypes.SECTION_DELETE_INIT:
        return {
          ...state,
          loading: true,
        }  
    case actionTypes.SECTION_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.SECTION_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
