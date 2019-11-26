import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Counter = ({ currentArticle, allArticles }) => (
  <p className={styles.counter}>
    {currentArticle}/{allArticles}
  </p>
);

Counter.propTypes = {
  currentArticle: T.number.isRequired,
  allArticles: T.number.isRequired,
};

export default Counter;
