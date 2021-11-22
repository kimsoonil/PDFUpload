import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./routes";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
