import { createReducer, createAction } from 'reduxible';
import SubtitlesRepository from '../repositories/SubtitlesRepository';

export const action = createAction({
  LOAD_SUBTITLES: (seasonId, episodeId) => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const { http } = helpers;
        /* eslint-disable new-cap */
        const subtitles = await (await SubtitlesRepository(http).findAllBySeasonIdAndEpisodeId(seasonId, episodeId)).json();
        return dispatch(action('SET_SUBTITLES')(subtitles));
      }
    };
  },
  SET_SUBTITLES: (subtitles) => {
    return {
      payload: {
        subtitles
      }
    };
  }
});

const initialState = {
  subtitles: []
};

export default createReducer(initialState, [
  {
    types: [ 'SET_SUBTITLES' ],
    reduce: ({ payload }, state) => {
      const { subtitles } = payload;
      return {
        ...state,
        subtitles
      };
    }
  }
]);
