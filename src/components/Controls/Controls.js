import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Controls = ({ nextArticle, prevArticle, nextDisabled, prevDisabled }) => (
  <section className={styles.controls}>
    <button
      className={styles.button}
      type="button"
      onClick={prevArticle}
      disabled={prevDisabled}
    >
      Назад
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={nextArticle}
      disabled={nextDisabled}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  prevArticle: T.func.isRequired,
  prevDisabled: T.bool.isRequired,
  nextArticle: T.func.isRequired,
  nextDisabled: T.bool.isRequired,
};
export default Controls;
