/*
*
* About actions
* make by huynq
*/
import * as types from './constants';
import { action } from 'typesafe-actions';

export const changeLogin = (val: boolean) => action(
 types.GET,
 val,
);