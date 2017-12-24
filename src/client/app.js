import React from 'react';
import { connect } from 'react-redux';

import DebugView from './components/debug-view';

const mapStateToProps = state => {
  return {
    debug: state && state.debug
  };
};

export class App extends React.PureComponent {
  render() {
    return this.props.debug ?
      (<DebugView />) :
      (<div></div>);
  }
}

export default connect(mapStateToProps)(App);
