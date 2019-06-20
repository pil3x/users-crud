import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../app/components/Header/Header.js'
import Main from '../app/components/Main/Main.js';
import Home from '../app/pages/Home/Home.js';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Main >
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to='/users' />
        </Switch>
      </Main>
    </>
  );
}

export default App;
