import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';
import { BooksAPI } from './api'

const apiEndpoint = "http://localhost:3001/books";
const REACT_APP_BASIC_URI : string = (process.env.REACT_APP_BASIC_URI as string);
function* getBooks () {
     try {
    const books: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI));
    yield put(actionTypes.bookSuccess(books.data));
  } catch(err:any) {
    yield put(actionTypes.bookError(err));
  }
}

function* bookCreateWorker({ payload }) {
  yield put(actionTypes.bookPageInit());
  try {
    const createBook: AxiosResponse = yield call(() => axios.post(REACT_APP_BASIC_URI,payload));
    console.log(createBook)
    yield put(actionTypes.bookCreateSuccess(createBook.data));
  } catch (err:any) {
    yield put(actionTypes.bookCreateError(err.response.data));
  }
}

function* bookUpdateWorker(payload) {
  yield put(actionTypes.bookUpdateInit(payload));
  try {
    const updataBook: AxiosResponse = yield call(() => axios.put(REACT_APP_BASIC_URI,payload));
    console.log(updataBook)
    yield put(actionTypes.bookUpdateSuccess(updataBook.data));
  } catch (err:any) {
    yield put(actionTypes.bookUpdateError(err));
  }
}

function* bookDeleteWorker(payload) {
  yield put(actionTypes.bookDeleteInit(payload));
  try {
    const deleteBook: AxiosResponse = yield call(() => axios.delete(REACT_APP_BASIC_URI,payload));
    console.log(deleteBook)
    yield put(actionTypes.bookUpdateSuccess(deleteBook.data));
  } catch (err:any) {
    yield put(actionTypes.bookDeleteError(err));
  }
}

export function* getBooksSaga() {
  // yield takeEvery(BOOK_PAGE_INIT, getBooks),
  yield all([
    takeLatest(actionTypes.BOOK_PAGE_INIT , getBooks),
    takeLatest(actionTypes.BOOK_CREATE_INIT as any, bookCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.BOOK_UPDATE_INIT , bookUpdateWorker),
    takeLatest(actionTypes.BOOK_DELETE_INIT , bookDeleteWorker),
    
  ]); 
}