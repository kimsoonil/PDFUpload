import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';

import {getToken} from 'src/utils/Cookies/Cookies';

const REACT_APP_BASIC_URI : string = (`${process.env.REACT_APP_BASIC_URI}sections` as string);

function* sectionsCallWorker () {
  const config = getToken();
  try {
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI, config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch(err:any) {
    yield put(actionTypes.sectionError(err));
  }
}
function* settingCallWorker () {
  const config = getToken();
  try {
    const setting: AxiosResponse = yield call(() => axios.get(`${REACT_APP_BASIC_URI}/setting`, config));
    console.log('setting',setting)
    yield put(actionTypes.sectionSettingSuccess(setting.data));
  } catch(err:any) {
    yield put(actionTypes.sectionSettingError(err));
  }
}
function* sectionCreateWorker({ payload }) {
  const config = getToken();
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
  const config = getToken();
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
    yield put(actionTypes.sectionUpdateSuccess(updataBook.data));
    const sections: AxiosResponse = yield call(() => axios.get(REACT_APP_BASIC_URI,config));
    yield put(actionTypes.sectionSuccess(sections.data));
  } catch (err:any) {
    yield put(actionTypes.sectionUpdateError(err));
  }
}

function* sectionDeleteWorker(payload) {
  const config = getToken();
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

export function* getSectionsSaga() {
  yield all([
    takeLatest(actionTypes.SECTION_INIT , sectionsCallWorker),
    takeLatest(actionTypes.SECTION_SETTING_INIT , settingCallWorker),
    takeLatest(actionTypes.SECTION_CREATE_INIT as any, sectionCreateWorker), 
    // 타입 오버라이딩 에러로 any 타입 삽입
    takeLatest(actionTypes.SECTION_UPDATE_INIT , sectionUpdateWorker),
    takeLatest(actionTypes.SECTION_DELETE_INIT , sectionDeleteWorker),
    
  ]); 
}