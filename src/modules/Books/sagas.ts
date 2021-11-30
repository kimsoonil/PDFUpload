import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  BOOK_PAGE_INIT,
  BOOK_CREATE_INIT,
  BOOK_UPDATE_INIT,
  BOOK_DELETE_INIT,
  bookError,
  bookSuccess,
  bookUpdateError,
  bookUpdateSuccess,
  bookDeleteError,
  bookDeleteSuccess,
  bookCreateSuccess,
  bookCreateError,
  bookPageInit
} from "./actions";
import { BooksAPI } from './api'

const apiEndpoint = "http://localhost:3001/books";
function* getBooks () {
    yield put(bookPageInit());
    try {
    const response = yield call(axios.get, apiEndpoint);
    console.log(response);
    yield put(bookSuccess(response.data));
  } catch(err:any) {
    yield put(bookError(err));
  }
}

function* bookCreateWorker({ payload }) {
  try {
    yield call(axios.post, `${apiEndpoint}`,payload);
  } catch (err:any) {
    yield put(bookCreateError(err.response.data));
  }
}

function* bookUpdateWorker(payload) {
  yield put(bookPageInit());
  try {
    yield call(axios.put, `${apiEndpoint}/${payload.id}`,payload);
    yield put(bookUpdateSuccess(payload.id));
    // let response = yield call(BooksAPI);
    // yield put(bookSuccess(response));
  } catch (err:any) {
    yield put(bookUpdateError(err));
  }
}

function* bookDeleteWorker(payload) {
  yield put(bookPageInit());
  try {
    yield call(axios.delete, `${apiEndpoint}/${payload.id}`);
    yield put(bookUpdateSuccess(payload));
    let response = yield call(BooksAPI);
    yield put(bookSuccess(response));
  } catch (err:any) {
    yield put(bookDeleteError(err));
  }
}

export function* getBooksSaga() {
  // yield takeEvery(BOOK_PAGE_INIT, getBooks),
  yield all([
    takeLatest(BOOK_PAGE_INIT, getBooks),
    takeLatest(BOOK_CREATE_INIT, bookUpdateWorker),
    takeLatest(BOOK_UPDATE_INIT, bookUpdateWorker),
    takeLatest(BOOK_DELETE_INIT, bookDeleteWorker),
    
  ]); 
}