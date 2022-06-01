/*
 *
 * App selecters
 *
 */
import rootReducer from "redux/root-reducers";

export const selectAppStore = (state: ReturnType<typeof rootReducer>) =>
  state.App;
