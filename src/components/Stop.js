import React from "react";
import Radium from "radium";


//TODO
//test
@Radium
class StopButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      {this.state.running ? <button style={[styles.base, runningStopStyle]}>Stop</button> : <button style={[styles.bases, normalStopStyle]}>Stop</button>}
    );
  }
}
