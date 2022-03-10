import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';
import {getToken} from 'src/utils/Cookies/Cookies';

const REACT_APP_BASIC_URI : string = (`${process.env.REACT_APP_BASIC_URI}pages` as string);

function* pagesCallWorker () {
  const config = getToken();
  try {
    const pages: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI, config));
    yield put(actionTypes.pageSuccess(pages.data));
  } catch(err:any) {
    yield put(actionTypes.pageError(err));
  }
}

function* pageCreateWorker({ payload }) {
  const config = getToken();
  try {
    
    const createBook: AxiosResponse = yield call(() => axios.post(REACT_APP_BASIC_URI,payload,config));
    console.log(createBook)
    
    const pages: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.pageSuccess(pages.data));
  } catch (err:any) {
    yield put(actionTypes.pageCreateError(err.response.data));
  }
}

function* pageUpdateWorker(payload) {
  const config = getToken();
  try {
    

    let updateJson;
    let parameter
    if(payload.payload.image_cover){
      updateJson={image_cover:payload.payload.image_cover}
      parameter = "image-cover";
      
    }else if(payload.payload.title){
      updateJson={title:payload.payload.title}
      parameter = "title";
    }
    const updataBook: AxiosResponse = yield call(() => axios.patch(`${REACT_APP_BASIC_URI}/${payload.payload.id}/${parameter}`,updateJson,config));    
    console.log(updataBook);
    yield put(actionTypes.pageUpdateSuccess(updataBook.data));
    const pages: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.pageSuccess(pages.data));
  } catch (err:any) {
    yield put(actionTypes.pageUpdateError(err));
  }
}

function* pageDeleteWorker(payload) {
  const config = getToken();
  try {
    
    const deleteBook: AxiosResponse = yield call(() => axios.delete(`${REACT_APP_BASIC_URI}/${payload.payload}`,config));
    console.log(deleteBook)
    const pages: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.pageSuccess(pages.data));
  } catch (err:any) {
    yield put(actionTypes.pageDeleteError(err));
  }
}

export function* getPagesSaga() {
  
  yield all([
    takeLatest(actionTypes.PAGE_INIT , pagesCallWorker),
    takeLatest(actionTypes.PAGE_CREATE_INIT as any, pageCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.PAGE_UPDATE_INIT , pageUpdateWorker),
    takeLatest(actionTypes.PAGE_DELETE_INIT , pageDeleteWorker),
    
  ]); 
}