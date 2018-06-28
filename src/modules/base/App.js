import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../assets/css/base/App.css';
import { Default, emptyLayout } from '../../layouts';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

const App = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>
        <Route exec path="/signin" component={emptyLayout} />
        <Route exec path="/signup" component={emptyLayout} />
        <Route exec path="/" component={Default} />
      </Switch>
    </BrowserRouter>
  </AlertProvider>
);

export default App;
