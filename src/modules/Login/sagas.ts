import { put, all, call, takeLatest,takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import  * as actionTypes from './actions';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const REACT_APP_BASIC_URI : string = (`${process.env.REACT_APP_BASIC_URI}users` as string);
 function* login (payload) {
  try {
    const token: AxiosResponse = yield call(() => axios.post(`${REACT_APP_BASIC_URI}/sign-in`, payload.payload));
    cookies.set('token',token.data.result.token)
    yield put(actionTypes.loginSuccess());
  } catch(err:any) {
    console.log(err);
    alert('이메일 또는 비밀번호를 다시 한번 확인해주세요.');
    yield put(actionTypes.loginFailure(err));
  }
}

function* logout() {
  try {
    yield put(actionTypes.logoutSuccess());
    //localStorage.setItem('token',"");
     cookies.remove('token');
     console.log('getCookie',cookies.get('token'))
  } catch(err:any) {
    yield put(actionTypes.logoutFailure(err));
  }
}


export function* getLoginSaga() {
  // yield takeEvery(actionTypes.LOGIN_REQUEST, login),
  yield all([
    takeLatest(actionTypes.LOGIN_REQUEST, login),
    takeLatest(actionTypes.LOGOUT_REQUEST, logout),
  ]); 
}