import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,

  }
  
  render() {
    const { cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>

          <span className={styles.icon}>
            <Icon name={this.props.icon} />

          </span>
          {this.props.title}
        </h3>

        <div className={styles.cards}>
          {cards.map(listData => (
            <Card key={listData.id} {...listData} />
          ))}
        </div>
        {
          <div className={styles.creator}>

            <Creator text={settings.cardCreatorText} action={addCard} />

          </div>

        }

      </section>

    );
  }
}

export default SearchResults;