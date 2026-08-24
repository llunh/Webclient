const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

let messages = [];  

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const msg = req.body;
  if (!msg.text || !msg.time) {
    return res.status(400).send('error');
  }
  messages.push(msg);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log('서버 열림, 주소: http://localhost:3000');
});

