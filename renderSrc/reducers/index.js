import { combineReducers } from "redux";
import tweets from "./tweetReducer.js"

const rootReducer = combineReducers({
  tweets
});

export default rootReducer;
