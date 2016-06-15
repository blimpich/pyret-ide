import React from "react";
import Radium from "radium";
import Button from "./Button";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{"text-align": "center"}}>
        <div>
          <h1 style={Title}>code.pyret.org</h1>
          <a style={{marginRight: '3em'}} href="https://drive.google.com/drive/"><Button kind="home">My Programs</Button></a>
          <a href="http://pyret.org"><img style={{width: "200", height: "200", "vertical-align": "middle"}}src={this.props.logo}/></a>
          <a style={{marginLeft: '3em'}} href="https://code.pyret.org/editor"><Button kind="home">Start Coding</Button></a>
        </div>
        <div style={Tutorial}>
           <p>The <a href="http://www.pyret.org/docs/latest/Getting_Started.html">getting started guide</a> will show you the basics of Pyret.</p>
           <p>For more, <a href="http://papl.cs.brown.edu/2014/">Programming and Programming Languages</a> is a textbook on programming with all its example programs in Pyret.</p>
           <p>Try a few sample programs to see more:</p>
           <ul style={{listStyleType:"none", padding:'0'}}>
             <li><a href="/editor#share=0B32bNEogmncOTEJjQ1VicHdlYmc">Sort a list</a></li>
             <li><a href="/editor#shzare=0B32bNEogmncOTktRNDdPcnh0bzQ">Sort a list (with refinement annotations)</a></li>
             <li><a href="/editor#share=0B32bNEogmncOWU9OWW5MSFlHSDQ">Compute a derivative</a></li>
             <li><a href="/editor#share=0B32bNEogmncOVzhPcEFTS3BRcVU">Draw flags</a></li>
             <li><a href="/editor#share=0B32bNEogmncONnZNU2JsUnRVRG8">Land a plane</a></li>
             <li><a href="/editor#share=0B32bNEogmncOMTg5T2plV19LX0k">Play 2048</a></li>
           </ul>
        </div>
    </div>
    );
  } 
}

const Title = { fontFamily: 'monospace', fontSize: '26pt', '-webkit-margin-before': '0.67em', 'font-weight': 'bold' };

const Tutorial = { width: "450", margin: "0px auto", "text-align": "center" };

Home.propTypes = {logo: React.PropTypes.string};
