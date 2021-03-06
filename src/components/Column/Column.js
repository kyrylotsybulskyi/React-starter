import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,

  }

  render() {
    const { title, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>

          <span className={styles.icon}>
            <Icon name={this.props.icon} />

          </span>
          {this.props.title}
        </h3>

        <div className={styles.card}>
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>

          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />

        </div>

          */}

      </section>

    );
  }
}

export default Column;