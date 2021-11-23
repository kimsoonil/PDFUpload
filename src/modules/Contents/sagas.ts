import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getContentsSuccess, getContentsError, GET_CONTENTS_START } from './actions';

function* getContents () {
  const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
  const users: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
  try {
    yield put(getContentsSuccess(users.data));
  } catch(e) {
    yield put(getContentsError(e as any));
  }
}

export function* getContentsSaga() {
  yield takeEvery(GET_CONTENTS_START, getContents)
}