import React,{ Component } from "react";
import { connect } from "react-redux";
import TweetList from "../components/TweetList.js";
import TweetPost from "../components/TweetPost.js";
import { postTweet,fav } from "../actions/tweetActions.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repTarget: ""
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <TweetPost tweetPost={ this.postToTweet.bind(this) }
                   target={this.state.repTarget}/>
        <TweetList tweets={ this.props.tweets }
                   setTarget={ this.repTarget.bind(this) }
                   fav={ this.favorite.bind(this) }/>
      </div>
    )
  }
  postToTweet(tweet) {
    this.props.dispatch(postTweet(tweet));
    this.setState({repTarget: ""})
  }
  repTarget(target) {
    this.setState({repTarget: target})
  }
  favorite(target) {
    console.log(target);
    this.props.dispatch(fav(target));
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.reverse()
  };
}

export default connect(mapStateToProps)(App);