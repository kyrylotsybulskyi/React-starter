import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.text,
  }
  static defaultProps = {
    title: 'My first React app',
    image: <img className={styles.image} src="https://i.postimg.cc/MpVBYK1P/space.png" alt="cosmos" />,
  }
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>{this.props.title}</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List title={['Things to do', <sup key='1'>soon!</sup>]} image={this.proops.image} >
            <div className={styles.title}>
              {this.props.children}
              
            </div>
          </List>
        </main>
      </div>
    )
  }
}

export default App;
