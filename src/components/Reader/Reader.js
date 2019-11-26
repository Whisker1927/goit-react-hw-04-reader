import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from '../../styles/index.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        text: T.string.isRequired,
        title: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    currentIdx: 0,
  };

  handleNextPublication = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1,
    }));
  };

  handlePrevPublication = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx - 1,
    }));
  };

  render() {
    const { currentIdx } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          nextArticle={this.handleNextPublication}
          prevArticle={this.handlePrevPublication}
          nextDisabled={currentIdx >= items.length - 1}
          prevDisabled={currentIdx <= 0}
        />
        <Counter currentArticle={currentIdx + 1} allArticles={items.length} />
        <Publication article={items[currentIdx]} idx={currentIdx + 1} />
      </div>
    );
  }
}
