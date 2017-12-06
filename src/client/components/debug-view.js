import React from 'react';

import DebugEventSender from './debug-event-sender';
import DebugStateViewer from './debug-state-viewer';

export default class DebugView extends React.PureComponent {
  render() {
    return (
      <div>
        <DebugEventSender />
        <DebugStateViewer />
      </div>
    );
  }
}
