import React from "react";
import Menu from "react-menus";

//function onClick(events, props, index) {}
//function onChildClick(event, props, index) {}

const toolbarStyle = {color: "white", backgroundColor: "#C0C0C0", width: "100%", height: 40, position: "fixed"};

//var itemProps = {};
//expander: "Sub Menu"

/* const items = [
 *   {
 *     label: "Download this file"
 *   },
 *   {
 *     label: "Documentation"
 *   },
 *   {
 *     label: "TODO: Font"
 *   },
 *   {
 *     label: "Report an Error"
 *   },
 *   {
 *     label: "Discuss Pyret"
 *   },
 *   {
 *     label: "Log Out"
 *   }
 * ]; */

/* class DropDownMenu extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {expanded: false};
 *   }
 *   render() {
 *     return(
 *       <div>
 *       <button onClick={()=>{this.setState({expanded: true});}}>More</button>
 *       {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
 *       </div>
 *     );
 *   }
 * }*/

/* class DropDownMenu extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {expanded: false};
 *   }
 *   render() {
 *     return(
 *       <div>
 *          <button onClick={()=>{this.setState({expanded: true});}}>More</button>
 *          {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
 *       </div>
 *     );
 *   }
 * }*/

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}>

      <a href="https://code.pyret.org/"><img style={{height: "80%", paddingLeft: 15, paddingRight: 15, paddingTop: 5, display: "block", float: "left"}} src={this.props.logo}/></a>
      <button style={{height: "100%", border: "none", fontSize:"15", fontFamily: "sans-serif", width: 194, backgroundColor: "gray", color: "white"}}>Connect to Google Drive</button>
      <button style={{height: "100%", border: "none", fontSize:"15", fontFamily: "sans-serif", width: 75.88, backgroundColor: "gray", color: "white", marginLeft: "3px"}}>More</button>
      <button style={{height: "100%", border: "none", fontSize:"15", fontFamily: "sans-serif", width: 150, float: "right", color: "gray"}}>Stop</button>
      <button style={{height: "100%", border: "none", fontSize:"15", fontFamily: "sans-serif", width: 150, float: "right", backgroundColor: "#317BCF", color: "white"}}>Run</button>

      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};

//<button style={{height: "100%", backgroundColor: "gray", color: "white"}}</button>
//<DropDownMenu/> needs to be placed up in the render function
