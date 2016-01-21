import React,{ Component } from "react";

function Tweet(text = "", rep = null) {
  this.text = text;
  this.repId = rep;
};

export default class TweetPost extends Component {
  constructor(props) {
    super(props);
    this.state = {tweet: new Tweet()}
  }

  componentWillReceiveProps(nextProps) {
    const target = nextProps.target;
    If(target != "" && target.get("id_str") != this.state.tweet.repId)(() => {
      this.setState({tweet: new Tweet(`@${target.get("user").get("screen_name")} `, target.get("id_str"))})
    });
  }

  render() {
    return (
      <div>
        <div className="input-field">
        <textarea id="twPost"
                  type="text"
                  value={this.state.tweet.text}
                  onChange={this.changeHandle.bind(this)}
                  className="materialize-textarea"
                  style={{margin: "auto"}}/>
          <label htmlFor="twPost">Tweet</label>
        </div>
        <button className="waves-effect waves-light btn" onClick={ this.buttanHandle.bind(this) }>送信</button>
      </div>
    )
  }

  changeHandle(e) {
    If(e.target.value.length < 140)( () => {
      this.setState({tweet: Object.assign({},this.state.tweet,{text: e.target.value})});
    });
  }

  buttanHandle(e) {
    this.props.tweetPost(this.state.tweet);
    this.setState({tweet: new Tweet()})
  }
}