import React, { Component, PropTypes } from 'react';

export default class MediumHeaderBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    bgImageUrl: PropTypes.string,
  };

  render() {
    const { title, subTitle } = this.props;
    let { bgImageUrl } = this.props;
    if (!bgImageUrl) {
      bgImageUrl = require('./friends.jpg');
    }
    const styles = require('./HeaderBar.scss');
    const divStyle = {
      backgroundImage: `url(${bgImageUrl})`,
    };
    return (
      <div className={styles.mediumHeaderBar}>
        <div className={styles.bg}>
          <div className={styles.bgImage} style={divStyle}>
          </div>
        </div>

        <div className={styles.mediumContainer}>
          <header>
            <div className={styles.sloganHolder}></div>
            <div className={styles.navHolder}>
              <div className={styles.nav}>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
              </div>
            </div>
          </header>

          <div className={styles.content}>
            <div className={styles.container}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
