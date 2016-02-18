import { combineRouteReducers } from 'reduxible';
import home from './homeService';
import seasons from './seasonsService';
import subtitles from './subtitlesService';
import ga from './gaService';

export default combineRouteReducers({
  home,
  seasons,
  subtitles,
  ga
});
