'use strict';

let express = require('express');
let app = express();


// Defini localizacao de arquivos estaticos
app.use(express.static('public'));


app.listen(3000, function(){
  console.log('> localhost:3000');
});
