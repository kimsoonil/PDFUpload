import * as React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import App from '../pages/App';
import Main from '../pages/Main';
const Root: React.FC = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/detail" exact component={App} />
      <Route path="/main" exact  component={Main} />
      <Redirect path="*" to="/main" />
    </Switch>
  </BrowserRouter>
)

export default Root;