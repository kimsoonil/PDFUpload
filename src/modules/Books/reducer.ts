import  * as actionTypes from './actions';
import { AxiosError } from 'axios';


type State = {
  loading: boolean;
  data: {[key:string]:any} | null;
  error: AxiosError | null;
  length: number | null;
  getData:{[key:string]:any} | null;
};

const initiaState = {
  loading: false,
  data: null,
  error: null,
  length: null,
  getData:null
};

export default function books(
  state: State = initiaState,
  action: actionTypes.GetBooksActionsType
): State {
  switch (action.type) {
    case actionTypes.BOOK_PAGE_INIT:
      return {
        ...state,
        loading: true,
        data:null,
        error:null
      };
    case actionTypes.BOOK_SUCCESS:
      const { result } = action.payload;
      return {
        ...state,
        loading: false,
        data: result,
        length: result.length
      };
    case actionTypes.BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
      case actionTypes.BOOK_ID_INIT:
      return {
        ...state,
        loading: true,
        data:null,
        error:null
      };
    case actionTypes.BOOK_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        getData: action.payload,
      }
    case actionTypes.BOOK_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case actionTypes.BOOK_CREATE_INIT:
        return {
          ...state,
          loading: true,
          data:null,
          error:null
        }
      case actionTypes.DISPLAY_MORE_BEGIN:
			return {
				...state,
				loading: true,
				data:null,
        error:null
			};
		case actionTypes.DISPLAY_MORE_END:
			return {
				...state,
				loading: false,
			};
      case actionTypes.BOOK_CREATE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload
        }
      case actionTypes.BOOK_CREATE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        }   
    case actionTypes.BOOK_UPDATE_INIT:
      return {
        ...state,
        loading: true,
        data:null,
        error:null
        
      }
    case actionTypes.BOOK_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.BOOK_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
      case actionTypes.BOOK_DELETE_INIT:
        return {
          ...state,
          loading: true,
          data:null,
          error:null
        }  
    case actionTypes.BOOK_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.BOOK_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
