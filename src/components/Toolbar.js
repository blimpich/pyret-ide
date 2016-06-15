import React from "react";
import Radium from "radium";
import Stop from "./Stop";
import GoogleDrive from "./GoogleDrive";
import More from "./More";
import Run from "./Run";
import styles from "./styles";

@Radium
export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={styles.toolbar}>
          <a href="https://code.pyret.org/"><img style={styles.logo} src={this.props.logo}/></a>
          <More/>
          <Run/>
          <Stop/>
          <GoogleDrive/>
      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};
 //would this go here or in Run.js?
