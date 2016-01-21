import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index.js";
import { fromJS,List } from "immutable";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);



function configureStore(initialState){
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

var initState = JSON.parse(clipboard.readText("initial"));
initState = fromJS(initState);
//var init = new List(initState);
var init ={ tweets: initState.reverse()};
const store = configureStore(init);

export default store;