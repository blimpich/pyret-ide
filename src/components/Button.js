import React from "react";
import Radium from "radium";

class Button extends React.Component {
  render() {
    return (
      <button
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>
    );
  }
}
// You can create your style objects dynamically or share them for
// every instance of the component.
const styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#66b8ff'
    }
  },
  homeLeft: {
    color: '#fff', background: '#808080', fontSize: '18', width: '100', height:'100', marginRight: '3em',
    ':hover': {
      background: '#0074d9'
    }
  },
  homeRight: {
    color: '#fff', background: '#808080', fontSize: '18', width: '100', height:'100', marginLeft: '3em',
    ':hover': {
      background: '#0074d9'
    }
  },
  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};
Button.propTypes = {
  kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
};

export default Radium(Button);