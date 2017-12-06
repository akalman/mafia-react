import React from 'react';
import { connect } from 'react-redux'

import api from '../api';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export class DebugStateViewer extends React.PureComponent {

  render() {
    return (
      <div>
        <div>Debug State Viewer</div>
        <pre>
          { JSON.stringify(this.props.state, null, 2) }
        </pre>
      </div>
    );
  }

}

export default connect(mapStateToProps)(DebugStateViewer);
