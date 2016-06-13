import React from "react";
import Menu from "react-menus";

function onClick(events, props, index) {}
//function onChildClick(event, props, index) {}

const toolbarStyle = {color: "white", backgroundColor: "gray", width: "100%", height: 40, position: "fixed"};

//var itemProps = {};
//expander: "Sub Menu"

const items = [
  {
    label: "More",
    onClick: function(itemProps, index, event) {
      console.log("well, hello");
    }
  },
  {
    label: "Download this file"
  },
  {
    label: "Documentation"
  },
  {
    label: "TODO: Font"
  },
  {
    label: "Report an Error"
  },
  {
    label: "Discuss Pyret"
  },
  {
    label: "Log Out"
  }
];

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return()
  }
}

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}> 
        <img style={{height: "100%"}} src={this.props.logo}/>
        <button style={{height: "100%", backgroundColor: "gray", color: "white"}}>Connect to Google Drive</button>
        {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
        <button style={{height: "100%", float: "right", backgroundColor: "#317BCF", color: "white"}}>Run</button>
        <button style={{height: "100%", float: "right"}}>Stop</button>
      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};