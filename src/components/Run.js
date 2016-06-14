import React from "react";
import Radium from "radium";
import styles from "styles";


//TODO
//if clicked this.setState should make running equal to true
//test and (probably) debug gif img within img
@Radium
class RunButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {running: false};
  }
  render() {
    return(
      {this.state.running ? <button style={[styles.buttons.base, styles.buttons.run.running]}><img src={this.props.gif}/>Running...</button> : <button style={[styles.button.base, styles.buttons.run.notRunning]}>Run</button>} 
    );
  }
}
