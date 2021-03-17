import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

class Container extends React.Component {

    static propTypes = {

      children: PropTypes.node,

    }
    /*static defaultProps = {
      icon: settings.defaultColumnIcon,
    }*/

    render() {
      const { children } = this.props;
      return (
        <div className={styles.component}>

          {this.props.children}

        </div>

      );
    }
}

export default Container;