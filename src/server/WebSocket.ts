import * as WebSocket from 'ws';
import * as http from 'http';
import * as Redux from 'redux';

import PlayerConnected from '../events/PlayerConnected';
import Event from '../events/Event';

export default class WebS {
    private wss: WebSocket.Server;
    private clients: { [playerid: string]: WebSocket } = { };

    constructor(server: http.Server, dispatch: Redux.Dispatch<Event>) {
        this.wss = new WebSocket.Server({ server });
        this.wss.on('connection', ws => {
            let playerid = '' + Math.random();
            let connectEvent: PlayerConnected = { type: 'PlayerConnected', playerid: playerid };
            this.clients[playerid] = ws;
            ws.send(JSON.stringify(connectEvent));

            ws.on('message', message => dispatch(JSON.parse(message)));
        });
    }

    broadcast(playerids: string[], event: Event) {
        playerids
            .map(id => this.clients[id])
            .forEach(ws => ws.send(JSON.stringify(event)));
    }
}
