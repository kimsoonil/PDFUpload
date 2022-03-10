import  * as actionTypes from './actions';
import { AxiosError } from 'axios';


type State = {
  data: {[key:string]:any} | null;
  error: AxiosError | null;
  isLoggingIn:boolean;
  token:any | null;
};

const initiaState = {
  data: null,
  error: null,
  isLoggingIn:false,
  token:null
};

export default function sections(
  state: State = initiaState,
  action: actionTypes.GetBooksActionsType
): State {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn:false,
        data:null,
        error:null
      };  
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn:true,
        token: action
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
      case actionTypes.LOGOUT_REQUEST:
        return {
          ...state,
          data:null,
        error:null
        }
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          isLoggingIn:false
        }
      case actionTypes.LOGOUT_FAILURE:
        return {
          ...state,
          error: action.error
        }   
    default:
      return state;
  }
}
