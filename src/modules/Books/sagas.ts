import { put, all, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  BOOK_PAGE_INIT,
  BOOK_DETAIL_INIT,
  BOOK_DELETE_INIT,
  bookError,
  bookSuccess,
  bookDetailError,
  bookDetailSuccess,
  bookDeleteError,
  bookDeleteSuccess,
  bookPageInit
} from "./actions";

//Book API calls
// function bookCall() {
//   return request('get', urls.BOOK);
// }

// function bookDetailCall(id) {
//   return request('get', urls.BOOK+'/'+id);
// }

// function bookDeleteCall(id) {
//   return request('delete', urls.BOOK+'/'+id);
// }


function* getBooks () {
  const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
  const users: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
  try {
    yield put(bookSuccess(users.data));
  } catch(err:any) {
    yield put(bookError(err));
  }
}


function* bookDetailWorker(payload) {
  const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
  const users: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
  try {
     let response = yield call(bookDetailCall, payload.id);
     response = response.data.data;
    yield put(bookDetailSuccess(response));
  } catch (err:any) {
    yield put(bookDetailError(err.response.data.data));
  }
}

function* bookDeleteWorker(payload) {
  try {
    let response = yield call(bookDeleteCall, payload.id);
    response = response.data;
    yield put(bookDeleteSuccess(response));
    yield put(bookPageInit());
  } catch (err:any) {
    yield put(bookDeleteError(err.response.data));
  }
}

export function* getBooksSaga() {
  // yield takeEvery(BOOK_PAGE_INIT, getBooks),
  yield all([
    takeEvery(BOOK_PAGE_INIT, getBooks),
    takeEvery(BOOK_DETAIL_INIT, bookDetailWorker),
    takeEvery(BOOK_DELETE_INIT, bookDeleteWorker),
    
  ]); 
}