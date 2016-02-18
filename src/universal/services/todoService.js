import { createReducer, createAction } from 'reduxible';
import TodoRepository from '../repositories/TodoRepository';

/* eslint-disable new-cap */
export const action = createAction({
  GET_TODO: () => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const { http } = helpers;
        const todos = await (await TodoRepository(http).findAll()).json();
        return dispatch(action('UPDATE_TODOS')(todos));
      }
    };
  },
  ADD_TODO: (text) => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const user = getState().auth.user || {};
        const todo = {};
        todo[new Date().getTime()] = {
          user,
          text,
          complete: false
        };
        const { http } = helpers;
        const todos = await (await TodoRepository(http).save(todo)).json();
        return dispatch(action('UPDATE_TODOS')(todos));
      }
    };
  },
  TOGGLE_TODO: (id) => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const todo = {};
        const currentTodo = getState().todo.todos[id];
        todo[id] = { complete: !currentTodo.complete };
        const { http } = helpers;
        const todos = await (await TodoRepository(http).save(todo)).json();
        return dispatch(action('UPDATE_TODOS')(todos));
      }
    };
  },
  REMOVE_TODO: (id) => {
    return {
      thunk: async (dispatch, getState, helpers) => {
        const { http } = helpers;
        const todos = await (await TodoRepository(http).remove(id)).json();
        return dispatch(action('UPDATE_TODOS')(todos));
      }
    };
  },
  UPDATE_TODOS: (todos) => {
    return {
      payload: {
        todos
      }
    };
  }
});

const initialState = {
  todos: {}
};

export default createReducer(initialState, [
  {
    types: [ 'UPDATE_TODOS' ],
    reduce: ({ payload }, state) => {
      const { todos } = payload;
      return {
        ...state,
        todos
      };
    }
  }
]);
