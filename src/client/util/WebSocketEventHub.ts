import Event from '../../events/Event';

const ws = new WebSocket('ws://localhost:3001');

type Subscriber = (e: Event) => void;
class WebSocketEventHub {
    private queue: Event[];
    private ws: WebSocket;
    private ready: boolean;
    private subscribers: { [eventType: string] : Subscriber[] }

    constructor() {
        this.ws = ws;
        this.ready = false;
        this.queue = [];
        this.subscribers = { };

        this.ws.addEventListener('open', () => {
            this.ready = true;
            this.queue.forEach((e: Event) => ws.send(e));
        });

        ws.addEventListener('message', this.process);
    }

    public publish(event: Event) {
        if (this.ready) {
            this.ws.send(JSON.stringify(event));
        }
        else {
            this.queue.unshift(event);
        }
    }

    public subscribe(type: string, fn: Subscriber) {
        if (this.subscribers[type]) {
            this.subscribers[type].unshift(fn);
        }
        else {
            this.subscribers[type] = [ fn ];
        }
    }

    private process(event: MessageEvent) {
        let subscribers = this.subscribers[event.data.type];
        if (subscribers) {
            subscribers.forEach(s => s(event.data));
        }
    }
}

const webSocketEventHub = new WebSocketEventHub();
export default webSocketEventHub;
