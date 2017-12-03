import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('output', 'index.html'));
});

app.use('/static', express.static(path.resolve('output', 'static')));
app.listen(3000);

console.log('mafia server started.');
console.log('load the page in your browser via localhost:3000');
console.log();
