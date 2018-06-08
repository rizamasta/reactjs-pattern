import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../assets/css/base/App.css';
import { Default, emptyLayout } from '../../layouts'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exec path="/signin" component={emptyLayout} />
      <Route exec path="/signup" component={emptyLayout} />
      <Route exec path="/" component={Default} />
    </Switch>
  </BrowserRouter>
);

export default App;
