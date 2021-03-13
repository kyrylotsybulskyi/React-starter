import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';
//import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    //children: PropTypes.node,
    //image: PropTypes.string,
  }
  /*static defaultProps = {
    title: 'My first React app',
    image: 'https://i.postimg.cc/MpVBYK1P/space.png',
  }*/
  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>

    );
  }
}

export default App;
