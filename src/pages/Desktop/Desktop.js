import React, { Component } from "react";
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6
} from "./components";
import ReactFullpage from "@fullpage/react-fullpage";
export default class Desktop extends Component {
  render() {
    const params = {
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      navigation: true
    };
    return (
      <ReactFullpage
        {...params}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Screen1/>
              <Screen2 />
              <Screen3 />
              <Screen4 />
              <Screen5 />
              <Screen6 instagram={this.props.instagram}/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}
              // <Screen6  />
