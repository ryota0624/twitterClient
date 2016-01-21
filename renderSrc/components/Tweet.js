import React,{ Component } from "react";
import { fav } from "../actions/tweetActions.js";

export default class Tweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tw = this.props.children;
    const user = tw.get("user");
    const favColor = If(tw.get("favorited"))(()=> "yellow").Else(()=> "");
    return (
      <li className="collection-item avatar" onClick={ this.clickHandle.bind(this) }>
        <img alt="" className="circle" src={user.get("profile_image_url")}/>
        <span className="title">{ user.get("name") }<span style={{color: "gray"}}>{` @${user.get("screen_name")}`}</span></span>
        <p>{ tw.get("text") }</p>
        <br/>
        <p><i onClick={() => this.props.fav(tw)}
              className="material-icons" style={{color: favColor}}>grade</i></p>
      </li>
    )
  }

  clickHandle() {
    this.props.click(this.props.children);
  }
}