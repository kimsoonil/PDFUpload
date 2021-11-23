import {
  GetContentsActionsType,
  GET_CONTENTS_START,
  GET_CONTENTS_SUCCESS,
  GET_CONTENTS_ERROR
} from './actions';
import { ContentsType } from './types';
import { AxiosError } from 'axios';

type State = {
  loading: boolean;
  data: ContentsType[] | null;
  error: AxiosError | null;
};

const initiaState = {
  loading: false,
  data: null,
  error: null
};

export default function users(
  state: State = initiaState,
  action: GetContentsActionsType
): State {
  switch (action.type) {
    case GET_CONTENTS_START:
      return {
        ...state,
        loading: true
      };
    case GET_CONTENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_CONTENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
