import React, { Component } from "react";
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6
} from "./components";
import loader from "../../Videos/loader.mp4";
export default class Mobile extends Component {
  state = {
    videosReady: []
  };
  videosHandler = video_id => {
    //check if already in array
    if (this.state.videosReady.includes(video_id)) {
      return false;
    } else {
      const arr = [...this.state.videosReady, video_id];
      this.setState({ videosReady: arr });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: this.state.videosReady.length === 5 ? "none" : "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: 'relative'
          }}
        >
          <video autoPlay muted loop playsInline id="vid">
            <source src={loader} />
          </video>
        </div>
        <div
          style={{
            display: this.state.videosReady.length === 5 ? "block" : "none"
          }}
        >
          <Screen1 videosHandler={this.videosHandler} />
          <Screen2 videosHandler={this.videosHandler} />
          <Screen3 videosHandler={this.videosHandler} />
          <Screen4 videosHandler={this.videosHandler} />
          <Screen5 />
          <Screen6
            videosHandler={this.videosHandler}
            instagram={this.props.instagram}
          />
        </div>
      </React.Fragment>
    );
  }
}