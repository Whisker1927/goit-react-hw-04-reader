import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styles from '../styles/index.module.css';
import Reader from './Reader/Reader';
import routes from '../routes';
import publications from '../Data/publication.json';

const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Switch>
        <Route
          exact
          path={routes.HOME}
          render={props => <Reader {...props} items={publications} />}
        />
        <Redirect to={routes.HOME} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
