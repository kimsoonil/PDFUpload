import * as React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from 'src/modules';
import { logoutSuccess,loginSuccess } from 'src/modules/Login';
import Pages from './views/Pages';
import Books from './views/Books';
import Screen from './views/Screen';
import Login from './views/Login';

const Root: React.FC = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootReducerType) => state.login.isLoggingIn);
  console.log('isLogin',isLogin)
  console.log('token',token)
  
   if(token === undefined || token === "" || token === null){
     dispatch(logoutSuccess());
   }else{
     dispatch(loginSuccess());
   }
  return(
    
    <Switch>
    {false ? (
    <>
      <Route path="/login" exact component={Login} />
      <Redirect path="*" to="/login" />
    </>
    ) : (
    <>
      <Route path="/books" exact component={(Books)} />
      <Route path="/books/screen"  component={Screen} />
      <Route path="/books/pages" exact component={Pages} />
      <Route path="/books/pages/:id" exact component={Pages} />
      <Redirect path="*" to="/books/screen" />
    </>
    )}

    </Switch>
  
  )
}

export default Root;