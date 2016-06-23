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
    this.state = {saved: false};
  }
  render() {
    if (this.state.connected && this.state.saved) {
      return (
        <span>
          <Input kind="program" defaultValue="Program Name"></Input>
          <Button kind="utility" onClick={()=>{this.setState({saved: true});}}>Save</Button>
          <Button kind="utility">Share</Button>

        </span>
      );
    }
    else if (this.state.connected) {
      return (
        <span>
          <Input kind="program" defaultValue="Program Name"></Input>
          <Button kind="utility" onClick={()=>{this.setState({saved: true});}}>Save</Button>
        </span>
      );
    }
    else if (this.state.connecting) {
      return (
        <Button kind="googleDrive" style={{color: "#33331a"}} onClick={()=>{this.setState({connected: true});}}>Connecting</Button>
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
