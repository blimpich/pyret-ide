import React from "react";
import Menu from "react-menus";
import Radium from "radium";
import {styles} from "./styles";

//function onClick(events, props, index) {};
//function onChildClick(event, props, index) {}

const items = [
  {
    label: "Download this file"
  },
  {
    label: "Documentation"
  },
  {
    label: "Font"
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
//make work
//make it so that it can collapse back down

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return(
      <div>
          <button style={[styles.buttons.base, styles.buttons.more]} onClick={()=>{this.setState({expanded: true});}}>More</button>
          {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
      </div>
    );
  }
}

export default Radium(More);
