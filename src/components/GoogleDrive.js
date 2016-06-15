import React from "react";
import Radium from "radium";
import {styles} from "./styles";

//TODO
//so much
//research google APIs

class GoogleDrive extends React.Component {
  render() {
    return(
      <button style={[styles.buttons.base, styles.buttons.googleDrive.connect2]}>Connect to Google Drive</button>
    );
  }
}

export default Radium(GoogleDrive);
