import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface HomeStore {
  test: boolean;
  str: string;
}

export type ActionsHome = ActionType<typeof actions>;
