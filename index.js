const express = require('express');

const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
const port = process.env.PORT;
app.get('/nana', (req, res) => {
   res.render('index');
});
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port);
