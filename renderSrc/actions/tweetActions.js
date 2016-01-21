export const ADDTWEET = "ADDTWEET";
export const FAV = "FAV";
export const POSTING = "POSTING";
const post = remote.require("./lib/tweet").post;
const favorite = remote.require("./lib/tweet").favorite;
import { fromJS } from "immutable";

export function addTweet(tweet) {

  return {
    type: ADDTWEET,
    tweet: fromJS(tweet)
  }
}

export function postTweet(tweet) {
  return (dispatch) => {
    post(tweetFilter(tweet));
    dispatch(posting());
  }
}

export function fav(tweet) {
  return (dispatch) => {
    favorite(tweet.get("id_str"), tweet.get("favorited"));
    dispatch(toggle(tweet));
  }
}

function toggle(tweet) {
  return {
    type: FAV,
    tweet: tweet
  }
}

function posting() {
  return {
    type: POSTING
  }
}

function tweetFilter(tweet) {
  let {text} = tweet;
  const filterWord = "死"
  const regexp = new RegExp(filterWord + "*");
  text = text.replace("/\うんこ/g","😇");
  return Object.assign({},tweet,{text})
}