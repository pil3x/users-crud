import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../app/components/Header/Header.js'
import Main from '../app/components/Main/Main.js';
import Users from '../app/users/UsersList/Users.js';
import UserSingle from '../app/users/UserSingle/UserSingle.js';
import Footer from '../app/components/Footer/Footer.js'
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Main >
        <Switch>
          <Route path="/users/:id" component={UserSingle} />
          <Route path="/users" component={Users} />
          <Redirect to='/users' />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
