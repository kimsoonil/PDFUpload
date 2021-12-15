import * as React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Pages from './views/Pages';
import Books from './views/Books';
const Root: React.FC = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/books" exact component={Books} />
      <Route path="/books/pages" exact component={Pages} />
      <Route path="/books/pages/:id" exact component={Pages} />
      <Redirect path="*" to="/books" />
    </Switch>
  </BrowserRouter>
)

export default Root;