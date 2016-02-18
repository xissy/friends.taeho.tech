import { createReducer, createAction } from 'reduxible';
import SeasonsRepository from '../repositories/SeasonsRepository';

export const action = createAction({
  LOAD_SEASONS: () => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const { http } = helpers;
        /* eslint-disable new-cap */
        const seasons = await (await SeasonsRepository(http).findAll()).json();
        return dispatch(action('SET_SEASONS')(seasons));
      }
    };
  },
  SET_SEASONS: (seasons) => {
    return {
      payload: {
        seasons
      }
    };
  }
});

const initialState = {
  seasons: []
};

export default createReducer(initialState, [
  {
    types: [ 'SET_SEASONS' ],
    reduce: ({ payload }, state) => {
      const { seasons } = payload;
      return {
        ...state,
        seasons
      };
    }
  }
]);
