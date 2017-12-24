# mafia-react

### Setup

to get set up you need to install node.  Once that is done then run the
following commands in your terminal from the directory where you want the
project to be.

```
git clone git@github.com:akalman/mafia-react
cd mafia-react
npm install
```


### Running the server

to build and run the server, use the following commands.

```
npm run build
node output/server.js

# to start the server in debug mode, use this command instead
debug=true node output/server.js
```

note that the last line will not finish, you will need to close the server
down when you are done using `Ctrl-C`.

### Testing

while the server is running, navigate to `http://localhost:3000` in your
browser.  You should see an input for sending events to the server.  A list of
example events can be found [in EVENTS.md](src/client/EVENTS.md)
