/*
*
* About selecters
* make by huynq
*/
import rootReducer from "redux/root-reducers";

export const selectAboutStore = ((state: ReturnType<typeof rootReducer>) => state.About)