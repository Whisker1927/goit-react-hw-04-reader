import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styles from '../styles/index.module.css';
import Reader from './Reader/Reader';

const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <h1>HELLO!!!!</h1>
      <Switch>
        <Route route="/reader" exact component={Reader} />
        <Redirect to="/reader" />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
