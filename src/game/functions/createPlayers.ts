import PlayerRef from '../../events/types/PlayerRef';
import Player from '../types/Player';
import Role from '../types/Role';

import Villager from '../roles/Villager';
import MobGrunt from '../roles/MobGrunt';

function shuffle<T>(arr: T[]): T[] {
    let a = arr.slice();
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = a[i - 1];
        a[i - 1] = a[j];
        a[j] = temp;
    }
    return a;
}

function createRoles(players: PlayerRef[]): Role[] {
    let roles = players.map(x => Villager);
    roles[0] = MobGrunt;
    return shuffle(roles);
}

export default function createPlayers(players: PlayerRef[]): Player[] {
    let roles = createRoles(players);
    return players.map((p: PlayerRef, i: number): Player => ({
        playerId: p.playerId,
        name: p.name,
        ready: false,
        state: 'alive',
        role: roles[i]
    }));
}
