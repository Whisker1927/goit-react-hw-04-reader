import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../Data/publication.json';
import styles from '../../styles/index.module.css';

const getQuery = queryStr =>
  Number.parseInt(new URLSearchParams(queryStr).get('item'), 10);
export default class Reader extends Component {
  static propTypes = {
    location: T.shape().isRequired,
    history: T.shape().isRequired,
    items: T.shape().isRequired,
  };

  componentDidMount() {
    const { location, history, items } = this.props;

    const publicationIdx = getQuery(location.search);

    if (!publicationIdx || publicationIdx < 1) {
      history.replace({
        ...location.pathname,
        search: 'item=1',
      });
    }

    if (publicationIdx > items.length) {
      history.replace({
        ...location.pathname,
        search: `item=${items.length}`,
      });
    }
  }

  handlePrevList = () => {
    const { location, history } = this.props;

    const publicationIdx = getQuery(location.search);

    history.push({
      ...location.pathname,
      search: `item=${publicationIdx - 1}`,
    });
  };

  handleNextList = () => {
    const { location, history } = this.props;

    const publicationIdx = getQuery(location.search);

    history.push({
      ...location.pathname,
      search: `item=${publicationIdx + 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    let publicationIdx = getQuery(location.search);
    if (!publicationIdx || publicationIdx < 1) {
      publicationIdx = 1;
    }

    if (publicationIdx > items.length) {
      publicationIdx = items.length;
    }
    return (
      <div className={styles.reader}>
        {publicationIdx && (
          <>
            <Controls
              nextArticle={this.handleNextList}
              prevArticle={this.handlePrevList}
              prevDisabled={Number(publicationIdx)}
              nextDisabled={publications.length}
            />
            <Counter
              currentArticle={Number(publicationIdx)}
              allArticles={publications.length}
            />
            <Publication article={items[publicationIdx - 1]} />
          </>
        )}
      </div>
    );
  }
}
