import { put, all, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';
import Cookies from 'universal-cookie';

const REACT_APP_BASIC_URI : string = (`${process.env.REACT_APP_BASIC_URI}pdf` as string);
const cookies = new Cookies()





function* PDFCallWorker (payload) {
  
  console.log('payload',payload.payload)
  const token = cookies.get('token');
  const config = {
    headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}
  }


  

  try {
    const PDF: AxiosResponse = yield call(() => axios.post(REACT_APP_BASIC_URI,payload.payload, config));
    console.log('PDF',PDF)
    yield put(actionTypes.PDFSuccess(PDF.data));
  } catch(err:any) {
    yield put(actionTypes.PDFError(err));
  }
}

export function* getPDFSaga() {
  yield all([
    takeLatest(actionTypes.PDF_INIT , PDFCallWorker)
  ])
};