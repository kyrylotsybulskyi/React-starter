import React from 'react';
import styles from './App.scss';
//import List from '../List/List.js';
import PropTypes from 'prop-types';
//import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    title: 'My first React app',
    image: 'https://i.postimg.cc/MpVBYK1P/space.png',
  }
  render() {
    const {title, subtitle} = this.props;
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>{styles.title}</h1>
          <h2 className={styles.subtitle}>{styles.subtitle}</h2>
          {/*
          <List {...listData} />
          */}
        </main>
      </div>
    );
  }
}

export default App;
