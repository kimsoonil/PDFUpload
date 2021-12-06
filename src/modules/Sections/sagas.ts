import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';

const REACT_APP_BASIC_URI : string = (`${process.env.REACT_APP_BASIC_URI}/sections` as string);
const token = "bfe887177ff7a6b9ad133efe3060c189956bcf5f";
const config = {
  headers: { Authorization: `Bearer ${token}` }
}
function* sectionsCallWorker () {
  
  try {
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI, config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch(err:any) {
    yield put(actionTypes.sectionError(err));
  }
}

function* sectionCreateWorker({ payload }) {
  
  try {
    //  yield put(actionTypes.sectionCreateInit(payload));
    const createBook: AxiosResponse = yield call(() => axios.post(REACT_APP_BASIC_URI,payload,config));
    console.log(createBook)
    //yield put(actionTypes.sectionCreateSuccess(createBook.data));
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch (err:any) {
    yield put(actionTypes.sectionCreateError(err.response.data));
  }
}

function* sectionUpdateWorker(payload) {
console.log(payload)
  try {
    // yield put(actionTypes.sectionUpdateInit(payload));

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
    yield put(actionTypes.sectionUpdateSuccess(updataBook.data));
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch (err:any) {
    yield put(actionTypes.sectionUpdateError(err));
  }
}

function* sectionDeleteWorker(payload) {
  console.log(payload)
  try {
    // yield put(actionTypes.sectionDeleteInit(payload));
    const deleteBook: AxiosResponse = yield call(() => axios.delete(`${REACT_APP_BASIC_URI}/${payload.payload}`,config));
    console.log(deleteBook)
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch (err:any) {
    yield put(actionTypes.sectionDeleteError(err));
  }
}

export function* getBooksSaga() {
  // yield takeEvery(SECTION_SECTION_INIT, getBooks),
  yield all([
    takeLatest(actionTypes.SECTION_INIT , sectionsCallWorker),
    takeLatest(actionTypes.SECTION_CREATE_INIT as any, sectionCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.SECTION_UPDATE_INIT , sectionUpdateWorker),
    takeLatest(actionTypes.SECTION_DELETE_INIT , sectionDeleteWorker),
    
  ]); 
}