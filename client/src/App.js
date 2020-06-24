import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          {/* <Landing /> */}
          <Home />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
