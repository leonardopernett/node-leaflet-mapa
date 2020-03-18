const express = require('express');
const ejs = require('ejs-mate');
const path = require('path');
const app = express();


//settting
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs);
app.set('view engine', 'ejs');


app.use(require('./router/index'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, ()=>console.log('server on port 3000'));