import { combineReducers } from 'redux';
import users, { getUsersSaga } from './users';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  users
});

export function* rootSaga() {
  yield all([getUsersSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
