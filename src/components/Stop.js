import React from "react";
import Radium from "radium";
import styles from "./styles";

//TODO
//test
@Radium
export default class Stop extends React.Component {
  render() {
    if (this.state.running) {
      return (
        <button style={[styles.buttons.base, styles.buttons.stop.running]}>
            <img src={this.props.gif}/>
            Stop
        </button>
      );
    } else {
      return (
        <button style={[styles.button.base, styles.buttons.stop.notRunning]}>
            Stop
        </button>
      );
    }
  }
}
