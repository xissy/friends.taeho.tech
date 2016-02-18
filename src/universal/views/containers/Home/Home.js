import React, { Component, PropTypes } from 'react';
import { HeaderBar, SeasonList } from '../../components';

export default class Home extends Component {
  static propTypes = {
    content: PropTypes.array,
    loadContent: PropTypes.func
  };

  render() {
    const styles = require('./Home.scss');
    return (
      <div>
        <HeaderBar title="Friends" subTitle="자막 Subtitles" />
        <div className={styles.content}>
          <div className="content">
            <SeasonList />
          </div>
        </div>
      </div>
    );
  }
}
