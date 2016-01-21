import { List } from "immutable";
import { ADDTWEET,POSTING,FAV } from "../actions/tweetActions.js";

export default function tweets( state = new List(),action = null) {
  switch (action.type) {
    case ADDTWEET:
      return state.push(action.tweet);
    case FAV:
      var r = state.map((item) => {
      return If(item.get("id_str") === action.tweet.get("id_str"))(() => item.set("favorited", !item.get("favorited"))
      ).Else(() => item);
    });
      return r;
    case POSTING:
    default:
      return state;
  }
}