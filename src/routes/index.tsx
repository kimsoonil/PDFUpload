import * as React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Content from '../pages/Content';
import Main from '../pages/Main';
const Root: React.FC = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/main"  component={Main} />
      <Route path="/content/*" exact component={Content} />
      <Redirect path="*" to="/main" />
    </Switch>
  </BrowserRouter>
)

export default Root;