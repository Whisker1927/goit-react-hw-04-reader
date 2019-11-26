import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Controls = ({ nextArticle, prevArticle, nextDisabled, prevDisabled }) => (
  <section className={styles.controls}>
    <button
      className={styles.button}
      type="button"
      onClick={prevArticle}
      disabled={prevDisabled === 1}
    >
      Назад
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={nextArticle}
      disabled={prevDisabled === nextDisabled}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  prevArticle: T.func.isRequired,
  prevDisabled: T.number.isRequired,
  nextArticle: T.func.isRequired,
  nextDisabled: T.number.isRequired,
};
export default Controls;
