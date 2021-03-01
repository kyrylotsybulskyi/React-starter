import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero.js"
import PropTypes from 'prop-types';
import Column from "../Column/Column.js"

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imageText: PropTypes.string,
    animals: PropTypes.string,
    plants: PropTypes.string,
    minerals: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    animals: 'Animals',
    plants: '<column className={styles.title}>Plants</column>',
    minerals: '<column className={styles.title}>Minerals</column>',
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageText={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column name={this.props.animals}/>
          <Column name={this.props.plants}/>
          <Column name={this.props.minerals}/>
            
        </div>
        

      </section>

    )
  }
}

export default List;