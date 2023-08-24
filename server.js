const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const logger = require('morgan');
const cors = require('cors');

//Definiendo puerto
const port = process.env.PORT || 3000;

//otras configuraciones
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.disable('x-powered-by');

app.set('port', port);

//Escuchando server
server.listen(3000, '192.168.2.192'
|| 'localhost', function () {
   // console.log('APP NodeJS ' + process.pid + ' Inciada...');
   console.log('APP NodeJS ' + port + ' Inciada...');
});


