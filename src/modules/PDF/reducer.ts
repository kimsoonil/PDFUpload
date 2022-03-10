import  * as actionTypes from './actions';
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

export default function PDF(
  state: State = initiaState,
  action: actionTypes.GetPDFActionsType
): State {
  switch (action.type) {
    case actionTypes.PDF_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PDF_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case actionTypes.PDF_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
