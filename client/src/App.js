import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Comment from './pages/Comment';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:id" component={Profile} />
          <Profile />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
