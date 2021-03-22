import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import PropTypes from 'prop-types';
//import { pageContents, listData } from '../../data/dataStore';

class Home extends React.Component {
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
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>

    );
  }
}

export default Home;
