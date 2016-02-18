import Repository from './Repository';

class SubtitlesRepository extends Repository {
  constructor(options) {
    super(options);
    this.namespace = 'subtitles';
  }

  findAllBySeasonIdAndEpisodeId(seasonId, episodeId) {
    return this.client.get(`${this.api()}/seasons/${seasonId}/episodes/${episodeId}`);
  }
}
export default Repository.getInstance(SubtitlesRepository);
