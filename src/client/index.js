const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
    alert(event.data);
});
