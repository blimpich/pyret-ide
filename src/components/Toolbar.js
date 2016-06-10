import React from "react";
import Menu from "react-menus";

//.button {}

//.buttonRun {background-color: #317BCF}

function onClick(events, props, index){}

const toolbarStyle = {color: "white", backgroundColor: "gray", width: "100%", height: 40, position: "fixed"};

const items = [
  {
    label: "Download This File",
    onClick: function(itemProps, index, event) {
      console.log('well,hello')
    }
  }
];

//<Menu items={items} onClick={onClick}/>

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}> 
        <img style={{height: "100%"}} src={this.props.logo}/>
        <button style={{height: "100%"}}>Connect to Google Drive</button>
        <button style={{height: "100%"}}>More</button>
        <Menu items={items} onClick={onClick}/>
        <button style={{height: "100%"}}>Run</button>
        <button style={{height: "100%"}}>Stop</button>
        this is the toolbar!
      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};