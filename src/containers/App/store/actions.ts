/*
 *
 * App actions
 *
 */
import * as types from './constants';
import { AppLanguage } from './types';
import { action } from 'typesafe-actions';

export const changeLanguage = (val: AppLanguage) => action(types.LANGUAGE, val);

export const changeLoading = (val: boolean) => action(types.LOADING, val);
