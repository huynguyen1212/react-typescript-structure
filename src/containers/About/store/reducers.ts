/*
*
* About reducers
* make by huynq
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsAbout, StoreAbout } from "./types";

const initState : StoreAbout = { };

const reducersAbout : Reducer<StoreAbout, ActionsAbout> = (state = initState, actions: ActionsAbout) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersAbout;