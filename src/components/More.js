import React from "react";
import Menu from "react-menus";
import Radium from "radium";
import styles from "styles";

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
//make work
//make it so that it can collapse back down
@Radium
export default class DropDownMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return(
      <div>
          <button style={[styles.buttons.base, styles.buttons.DropDownMenuButton]} onClick={()=>{this.setState({expanded: true});}}>More</button>
          {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
      </div>
    );
  }
}
