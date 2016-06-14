import React from "react";
import Menu from "react-menus";

function onClick(events, props, index) {}
//function onChildClick(event, props, index) {}

const toolbarStyle = {color: "white", backgroundColor: "#C0C0C0", width: "100%", height: 40, position: "fixed"};

/* var itemProps = {};
 * expander: "Sub Menu"
 * */
const items = [
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

//TODO
//so much
//research google APIs
class Connect2GDrive extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <button style={{height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 194, backgroundColor: "gray", color: "white"}}>Connect to Google Drive</button>
    );
  }
}

//TODO
//if clicked this.setState should make running equal to true
//test and (probably) debug gif img within img
class RunButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {running: true};
    var normalRunStyle = {height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 150, float: "right", backgroundColor: "#317BCF", color: "white"};
    var runningRunStyle = {height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 150, float: "right", color: "gray"};
  }
  render() {
    return(
      {this.state.running ? <button style={runningRunStyle}><img src={this.props.gif}/>Running...</button> : <button style={normalRunStyle}>Run</button>} 
    );
  }
}

//TODO
//test
class StopButton extends React.Component {
  constructor(props){
    super(props);
    var normalStopStyle = {height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 150, float: "right", color: "gray"};
    var runningStopStyle = {height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 150, float: "right", color: "gray", backgroundColor: "#FF0000"};
  }
  render() {
    return(
      {this.state.running ? <button style={runningStopStyle}>Stop</button> : <button style={normalStopStyle}>Stop</button>}
    );
  }
}

//TODO
//make work
//make it so that it can collapse back down
class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return(
      <div>
          <button style={{height: "100%", border: "none", fontSize:"15px", fontFamily: "sans-serif", width: 75.88, backgroundColor: "gray", color: "white", marginLeft: "3px"}} onClick={()=>{this.setState({expanded: true});}}>More</button>
          {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
      </div>
    );
  }
}

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}>
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

//<button style={{height: "100%", backgroundColor: "gray", color: "white"}}</button>

