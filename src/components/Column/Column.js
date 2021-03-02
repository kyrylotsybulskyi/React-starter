import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class Column extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.name}
          </h3>

      </section>

    )
  }
}

export default Column;