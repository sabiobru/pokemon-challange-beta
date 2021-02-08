const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/pokemon-challange'));

app.get('/*', (reg, res) => {
    res.sendFile(__dirname + '/dist/pokemon-challange/index.html');
});

app.listen(PORT, () => {
    console.log('Iniciado em ' + PORT);
});

