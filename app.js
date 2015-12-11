'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/index.js');
let config = require('./config.js');
let mongoose = require('mongoose');


// Defini localizacao de arquivos estaticos
app.use(express.static('public'));


app.listen(3000, function(){
  console.log('> localhost:3000');
});
