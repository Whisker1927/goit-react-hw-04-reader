import React, { Component } from 'react';
import T from 'prop-types';
import queryString from 'query-string';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../Data/publication.json';
import styles from '../../styles/index.module.css';

//
export default class Reader extends Component {
  static propTypes = {
    location: T.shape().isRequired,
    history: T.shape().isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (!location.search) {
      history.replace({
        ...location,
        search: '?item=1',
      });
    }
  }

  handlePrevList = () => {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search).item;

    if (parsed > 1) {
      history.push({
        ...location,
        search: `?item=${Number(parsed) - 1}`,
      });
    }
  };

  handleNextList = () => {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search).item;

    if (parsed < publications.length) {
      history.push({
        ...location,
        search: `?item=${Number(parsed) + 1}`,
      });
    }
  };

  render() {
    const { location } = this.props;
    const parsed = queryString.parse(location.search).item;
    return (
      <div className={styles.reader}>
        {parsed && (
          <>
            <Controls
              nextArticle={this.handleNextList}
              prevArticle={this.handlePrevList}
              prevDisabled={Number(parsed)}
              nextDisabled={publications.length}
            />
            <Counter
              currentArticle={Number(parsed)}
              allArticles={publications.length}
            />
            <Publication article={publications[parsed - 1]} />
          </>
        )}
      </div>
    );
  }
}
