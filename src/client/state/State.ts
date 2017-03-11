type State = {
    playerid: string;
    page: 'login' | 'lobby' | 'host' | 'game';
}

export default State;