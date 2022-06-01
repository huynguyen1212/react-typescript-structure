/*
 *
 * Home actions
 */

import * as types from './constants';

export const changeTest = (val: boolean) => ({
  type: types.TEST,
  payload: val,
});
