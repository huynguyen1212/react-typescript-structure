/*
 *
 * Home reducers
 *
 */
import { Reducer } from 'redux';
import { ActionsHome, HomeStore } from './types';
import * as types from './constants';
import rootReducer from 'redux/root-reducers';

const initState: HomeStore = {
  test: true,
  str: '',
};

const reducersHome: Reducer<HomeStore, ActionsHome> = (
  state = initState,
  actions: ActionsHome,
) => {
  switch (actions.type) {
    case types.TEST: {
      return {
        ...state,
        test: actions.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersHome;

export const selectHomeStore = (state: ReturnType<typeof rootReducer>) =>
  state.Home;