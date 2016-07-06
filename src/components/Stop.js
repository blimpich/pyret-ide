import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import React from "react";
import Radium from "radium";
import Button from "./Button";
import {stop} from "../redux/actionCreators";

export class Stop extends React.Component {
  render() {
    if (this.props.running) {
      return (
        <Button
            kind="stop"
            onClick={this.props.onStop}
            style={{backgroundColor: "#FF0000", color: "white"}}>
            Stop
        </Button>
      );
    } else {
      return (
        <Button  kind="stop">Stop</Button>
      );
    }
  }
}

Stop.propTypes = {
  running: React.PropTypes.bool,
  onStop: React.PropTypes.func
};

export default connect(
  state => ({
    running: ['parsing', 'compiling','executing'].includes(state.runCode.stage),
  }),
  dispatch => bindActionCreators({
    onStop: stop
  }, dispatch)
)(Radium(Stop));
