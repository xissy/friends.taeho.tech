import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { action } from '../../../services/subtitlesService';
import { HeaderBar, SentenceList } from '../../components';

@connect(state => ({
  sentences: state.subtitles.subtitles
}), {
  loadSubtitles: action('LOAD_SUBTITLES'),
  setSubtitles: action('SET_SUBTITLES'),
})
export default class Subtitle extends Component {
  static propTypes = {
    loadSubtitles: PropTypes.func.isRequired,
    setSubtitles: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    sentences: PropTypes.array,
  };

  componentDidMount() {
    const { loadSubtitles, setSubtitles } = this.props;
    const { seasonId, episodeId } = this.props.params;
    setSubtitles([]);
    loadSubtitles(seasonId, episodeId);
  }

  render() {
    const { sentences } = this.props;
    const { seasonId, episodeId } = this.props.params;
    const styles = require('./Subtitle.scss');
    return (
      <div className={styles.subtitle}>
        <div className="container">
          <HeaderBar title={`Season ${seasonId}`} subTitle={`Episode ${episodeId}`} />
          <div className={styles.content}>
            <div className="content">
              <SentenceList sentences={sentences} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
