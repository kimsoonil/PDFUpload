import { combineReducers } from 'redux';
import contents, { getContentsSaga } from './Contents';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  contents
});

export function* rootSaga() {
  yield all([getContentsSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
