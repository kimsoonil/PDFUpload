import { combineReducers } from 'redux';
import contents, { getBooksSaga } from './Books';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  contents
});

export function* rootSaga() {
  yield all([getBooksSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
