import React from "react";
import Radium from "radium";
import Button from "./Button";
import Input from "./Input";

//TODO
//research google APIs
//implement correct behavior
export class GoogleDrive extends React.Component {
  constructor(props){
    super(props);
    this.state = {connecting: false};
    this.state = {connected: false};
  }
  render() {
    if (this.state.connected) {
      return (
        <span>
          <Input kind="program" defaultValue="Program Name"></Input>
          <Button kind="save">Save</Button>
        </span>
      );
    }
    if (this.state.connecting) {
      return (
        <Button kind="googleDrive" style={{color: "#33331a"}} onClick={()=>{this.setState({connected: !this.state.connected});}}>Connecting</Button>
      );
    }
    else {
      return (
        <Button kind="googleDrive" onClick={()=>{this.setState({connecting: !this.state.connecting});}}>Connect to Google Drive</Button>
      );
    }
  }
}

export default Radium(GoogleDrive);
