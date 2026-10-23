const express = require('express');
const app  = express();

app.get('/', (req, res) => { 
    res.status(200).send({ messages: 'Ola estou funcionando!' });
})

app.get('/Ola', (req, res) => { 
    res.status(200).send({ messages: 'Eu sou a rota Ola' });
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})
