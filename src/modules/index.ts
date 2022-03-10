import { combineReducers } from 'redux';
import books, { getBooksSaga } from './Books';
import pages, { getPagesSaga } from './Pages';
import sections, { getSectionsSaga } from './Sections';
import login, {getLoginSaga} from './Login'
import { all } from 'redux-saga/effects';
import PDF, {getPDFSaga} from './PDF';

const rootReducer = combineReducers({
  books,
  pages,
  sections,
  login,
  PDF
});

export function* rootSaga() {
  yield all([ 
    getBooksSaga(),
    getPagesSaga(),
    getSectionsSaga(),
    getLoginSaga(),
    getPDFSaga()
  ]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
