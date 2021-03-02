import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero.js"
import PropTypes from 'prop-types';
import Column from "../Column/Column.js"
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,    
    imageText: PropTypes.string,
    animals: PropTypes.string,
    plants: PropTypes.string,
    minerals: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {    
    animals: 'Animals',
    plants: 'Plants',
    minerals: 'Minerals',
    description: settings.defaultListDescription,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageText={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
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