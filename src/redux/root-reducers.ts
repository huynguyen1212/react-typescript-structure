/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * huynq
 */

import { combineReducers } from "redux";
import App from "containers/App/store/reducers";
import Home from "containers/Home/store/reducers";
import About from "containers/About/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly



//pages
const rootReducer = combineReducers({
  App,
  Home,
  About,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  });

export default rootReducer;
