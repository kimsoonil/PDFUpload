import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getUsersSuccess, getUsersError, GET_USERS_START } from './actions';

function* getUsers () {
  const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
  const users: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
  try {
    yield put(getUsersSuccess(users.data));
  } catch(e) {
    yield put(getUsersError(e as any));
  }
}

export function* getUsersSaga() {
  yield takeEvery(GET_USERS_START, getUsers)
}