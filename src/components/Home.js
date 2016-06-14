import React from "react";
import Radium from "radium";
import Button from "./Button";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{"text-align": "center"}}>
      <h1 style={{
        textAlign: 'center',
        width: '100%',
        fontFamily: 'monospace',
        fontSize: '26pt',
        display: 'block',
        height: '100px',
        '-webkit-margin-before': '0.67em',
        '-webkit-margin-after': '0.67em',
        '-webkit-margin-start': '0px',
        '-webkit-margin-end': '0px',
        'font-weight': 'bold'

        }}>code.pyret.org</h1>
        <div>
          <a href="https://drive.google.com/drive/"><Button kind="homeLeft">My Programs</Button></a>
          <a href="http://pyret.org"><img style={{width: "200", height: "200", "vertical-align": "middle"}}src={this.props.logo}/></a>
          <a href="https://code.pyret.org/editor"><Button kind="homeRight">Start Coding</Button></a>
        </div>
        <div style={{width: "450", margin: "0px auto", "text-align": "center"}}>
           <p>The <a href="http://www.pyret.org/docs/latest/Getting_Started.html">getting started guide</a> will show you the basics of Pyret.</p>
           <p>For more, <a href="http://papl.cs.brown.edu/2014/">Programming and Programming Languages</a> is a textbook on programming with all its example programs in Pyret.</p>
           <p>Try a few sample programs to see more:</p>
           <a href="/editor#share=0B32bNEogmncOTEJjQ1VicHdlYmc">Sort a list</a><br/>
           <a href="/editor#share=0B32bNEogmncOTktRNDdPcnh0bzQ">Sort a list (with refinement annotations)</a><br/>
           <a href="/editor#share=0B32bNEogmncOWU9OWW5MSFlHSDQ">Compute a derivative</a><br/>
           <a href="/editor#share=0B32bNEogmncOVzhPcEFTS3BRcVU">Draw flags</a><br/>
           <a href="/editor#share=0B32bNEogmncONnZNU2JsUnRVRG8">Land a plane</a><br/>
           <a href="/editor#share=0B32bNEogmncOMTg5T2plV19LX0k">Play 2048</a><br/>
        </div>
    </div>
    );
  } 
}

Home.propTypes = {logo: React.PropTypes.string};
