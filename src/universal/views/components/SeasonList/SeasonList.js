import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { action } from '../../../services/seasonsService';
import { Link } from 'react-router';

@connect(state => ({
  seasons: state.seasons.seasons
}), {
  loadSeasons: action('LOAD_SEASONS')
})
export default class SeasonList extends Component {
  static propTypes = {
    seasons: PropTypes.array,
    loadSeasons: PropTypes.func,
  }

  componentDidMount() {
    const { loadSeasons } = this.props;
    loadSeasons();
  }

  render() {
    const { seasons } = this.props;
    const styles = require('./SeasonList.scss');
    return (
      <div className={styles.seasonList}>
        {seasons && seasons.map((season) => {
          return (
            <div key={season.id}>
              <h2>Season {season.id}</h2>
              <ul>
              {season.episodes.map((episode) => {
                return (
                  <li key={episode.id}>
                    <Link to={`/subtitles/seasons/${season.id}/episodes/${episode.id}`}>
                      <sub>E{episode.id}.</sub> {episode.title}
                    </Link>
                  </li>
                );
              })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
