import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Publication = ({ article, idx }) => (
  <article className={styles.publication}>
    <p className={styles.idx}>{idx}</p>
    <h2>{article.title}</h2>
    <p className={styles.articleText}>{article.text}</p>
  </article>
);

Publication.propTypes = {
  article: T.shape({
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
  idx: T.number.isRequired,
};
export default Publication;
