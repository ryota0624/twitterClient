/* @flow */
"use strict";
window.If = require("ifx");
require("babel-polyfill");
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore.js";
import App from "./container/App.js";
import { addTweet } from "./actions/tweetActions.js";
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ipc.on("tweet", (arg) => {
  var tweet = JSON.parse(arg);
  store.dispatch(addTweet(tweet));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

function testFlow(name: string):string {
  return "ok"
}