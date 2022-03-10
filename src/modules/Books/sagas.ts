import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';
import {getToken} from 'src/utils/Cookies/Cookies';

const REACT_APP_BOOK_URI : string = (`${process.env.REACT_APP_BASIC_URI}books` as string);


function* booksCallWorker () {
  const config = getToken();
  try {
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`, config));
    console.log('books',books)
    yield put(actionTypes.bookSuccess(books.data));
  } catch(err:any) {
    yield put(actionTypes.bookError(err));
  }
}
function* booksCallIdWorker (payload) {
  const config = getToken()
  try {
    const bookId: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}/${payload.payload}`, config));
    console.log("booksId",bookId)
    yield put(actionTypes.bookIdSuccess(bookId.data));
  } catch(err:any) {
    yield put(actionTypes.bookIdError(err));
  }
}
function* bookCreateWorker({ payload }) {
  const config = getToken()
  try {
    //  yield put(actionTypes.bookCreateInit(payload));
    const createBook: AxiosResponse = yield call(() => axios.post(REACT_APP_BOOK_URI,payload,config));
    //yield put(actionTypes.bookCreateSuccess(createBook.data));
    const books: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BOOK_URI}?ordering=DESC`,config));
    yield put(actionTypes.bookSuccess(books.data));
  } catch (err:any) {
    yield put(actionTypes.bookCreateError(err));
  }
}

function* bookUpdateWorker(payload) {
  const config = getToken();
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
  const config = getToken();
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
    takeLatest(actionTypes.BOOK_ID_INIT , booksCallIdWorker),
    takeLatest(actionTypes.BOOK_CREATE_INIT as any, bookCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.BOOK_UPDATE_INIT , bookUpdateWorker),
    takeLatest(actionTypes.BOOK_DELETE_INIT , bookDeleteWorker),
    
  ]); 
}