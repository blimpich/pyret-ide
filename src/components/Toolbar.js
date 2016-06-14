import React from "react";
import Radium from "radium";
import StopButton from "stopButton" //??? naming convention?
import styles from "style";

function onClick(events, props, index) {}
//function onChildClick(event, props, index) {}

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={styles.toolbar}>
          <a href="https://code.pyret.org/"><img style={{height: "80%", paddingLeft: 15, paddingRight: 15, paddingTop: 5, display: "block", float: "left"}} src={this.props.logo}/></a>
          <DropDownMenu/>
          <RunButton/>
          <StopButton/>
          <Connect2GDrive/>
      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};
