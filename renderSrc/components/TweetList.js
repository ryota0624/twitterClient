import React,{ Component } from "react";
import Tweet from "./Tweet.js";

export default class TweetList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.tweets.map( (item) => {
      return <Tweet key={item.get("id")}
                    click={this.clickHandle.bind(this)}
                    fav={this.favHandle.bind(this)}>{ item }</Tweet>
    });
    return (
      <ul className="collection">
        { list }
      </ul>
    )
  }

  favHandle(target) {
    this.props.fav(target);
  }

  clickHandle(tweet) {
    this.props.setTarget(tweet);
  }
}