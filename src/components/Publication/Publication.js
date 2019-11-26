import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Publication = ({ article }) => (
  <article className={styles.publication}>
    <h2>{article.title}</h2>
    <p className={styles.articleText}>{article.text}</p>
  </article>
);

Publication.propTypes = {
  article: T.shape({
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};
export default Publication;
