import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';

const REACT_APP_BOOK_URI : string = (`${process.env.REACT_APP_BASIC_URI}books` as string);
const token = "caaf6c899fb805cc8fee9804df2037d50e8d5136";
const config = {
  headers: { Authorization: `Token ${token}` }
}
function* booksCallWorker () {
  
  try {
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`, config));
    yield put(actionTypes.bookSuccess(books.data));
  } catch(err:any) {
    yield put(actionTypes.bookError(err));
  }
}

function* bookCreateWorker({ payload }) {
  
  try {
    //  yield put(actionTypes.bookCreateInit(payload));
    const createBook: AxiosResponse = yield call(() => axios.post(REACT_APP_BOOK_URI,payload,config));
    console.log(createBook)
    //yield put(actionTypes.bookCreateSuccess(createBook.data));
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`,config));
    yield put(actionTypes.bookSuccess(books.data));
  } catch (err:any) {
    yield put(actionTypes.bookCreateError(err.response.data));
  }
}

function* bookUpdateWorker(payload) {
console.log(payload)
  try {
    // yield put(actionTypes.bookUpdateInit(payload));

    let updateJson;
    let parameter
    if(payload.payload.image_cover){
      updateJson={image_cover:payload.payload.image_cover}
      parameter = "image-cover";
      
    }else if(payload.payload.title){
      updateJson={title:payload.payload.title}
      parameter = "title";
    }
    const updataBook: AxiosResponse = yield call(() => axios.patch(`${REACT_APP_BOOK_URI}/${payload.payload.id}/${parameter}`,updateJson,config));    
    console.log(updataBook);
    // yield put(actionTypes.bookUpdateSuccess(updataBook.data));
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`,config));
    yield put(actionTypes.bookSuccess(books.data));
    
  } catch (err:any) {
    yield put(actionTypes.bookUpdateError(err));
  }
}

function* bookDeleteWorker(payload) {
  
  try {
    // yield put(actionTypes.bookDeleteInit(payload));
    
    const deleteBook: AxiosResponse = yield call(() => axios.delete(`${REACT_APP_BOOK_URI}/${payload.payload.id}`,config));
    console.log(deleteBook)
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`,config));
    yield put(actionTypes.bookSuccess(books.data));
  } catch (err:any) {
    yield put(actionTypes.bookDeleteError(err));
  }
}

export function* getBooksSaga() {
  // yield takeEvery(BOOK_PAGE_INIT, getBooks),
  yield all([
    takeLatest(actionTypes.BOOK_PAGE_INIT , booksCallWorker),
    takeLatest(actionTypes.BOOK_CREATE_INIT as any, bookCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.BOOK_UPDATE_INIT , bookUpdateWorker),
    takeLatest(actionTypes.BOOK_DELETE_INIT , bookDeleteWorker),
    
  ]); 
}