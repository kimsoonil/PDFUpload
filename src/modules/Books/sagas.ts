import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getBooksSuccess, getBooksError, GET_BOOKS_START } from './actions';

function* getBooks () {
  const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
  const users: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
  try {
    yield put(getBooksSuccess(users.data));
  } catch(e) {
    yield put(getBooksError(e as any));
  }
}

export function* getBooksSaga() {
  yield takeEvery(GET_BOOKS_START, getBooks)
}