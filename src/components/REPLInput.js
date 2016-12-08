import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeREPLCode,
        run,
        getPrevREPLCode,
        getNextREPLCode,
}
from '../redux/actionCreators';
import * as selectors from '../redux/selectors';

const styles = {
  wrapper: {
    margin: 5,
    fontFamily: 'monospace',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  textarea: {
    backgroundColor: '#eee',
    border: 0,
    resize: "vertical",
    flexBasis: '100%',
  },
  inputChevron: {
    paddingRight: 10,
  },
};

export class REPLInput extends React.Component {
  render() {
    if (this.props.isLoadingRuntime) {
      return (null);
    }
    return (
      <div style={styles.wrapper}>
        <span style={styles.inputChevron}>
          {'> '}
        </span>
        <textarea
          style={styles.textarea}
          value={this.props.code}
          onChange={event => {
            this.props.changeREPLCode(event.target.value);
          }}
          onKeyDown={event => {
            if(!(event.shiftKey) && event.key === "Enter") {
              event.preventDefault();
              this.props.onRun(this.props.code);
            }
            if (event.key === "ArrowUp") {
              this.props.prevREPLCode();
            }
            if (event.key === "ArrowDown") {
              this.props.nextREPLCode();
            }
          }}
        />
      </div>
    );
  }
}

REPLInput.propTypes = {
  code: React.PropTypes.string,
  isLoadingRuntime: React.PropTypes.bool,
  changeREPLCode: React.PropTypes.func,
  onRun: React.PropTypes.func,
  prevREPLCode: React.PropTypes.func,
  nextREPLCode: React.PropTypes.func,
};

export default connect(
  state => ({
    code: selectors.getCode(state),
    isLoadingRuntime: selectors.isLoadingRuntime(state),
  }),
  dispatch => bindActionCreators(
    {
      changeREPLCode: changeREPLCode,
      onRun: run,
      prevREPLCode: getPrevREPLCode,
      nextREPLCode: getNextREPLCode,
    }, dispatch)
)(REPLInput);
