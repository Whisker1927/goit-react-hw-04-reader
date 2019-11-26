import React from 'react';
import styles from '../styles/index.module.css';
import publication from '../Data/publication.json';
import Reader from './Reader/Reader';

const App = () => (
  <div className={styles.container}>
    <Reader items={publication} />
  </div>
);
export default App;
