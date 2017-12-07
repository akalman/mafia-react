### INITIALIZE

use this event before sending any others or to reset the game state.

```
{
  "type": "INITIALIZE"
}
```

### GAME_STARTED

use this event to start a game.

```
{
  "type": "GAME_STARTED",
  "players": [ 1, 2, 3, 4, 5 ]
}
```

##### error: not enough players

```
{
  "type": "GAME_STARTED",
  "players": [ 1, 2, 3, 4 ]
}
```

### PLAYER_READY

use this event to set the ready state of a given player.

```
{
  "type": "PLAYER_READY",
  "sender": 1
}
```

### FORCE_END

use this event to force the game into a finished state.  ignores any current state while doing this.

```
{
  "type": "FORCE_END"
}
```
