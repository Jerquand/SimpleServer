const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Chinook_Sqlite_AutoIncrementPKs.sqlite');
const query = `SELECT * from Artist LIMIT 100`;
const app = express();
const handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.post('/albums', function(req, res) {
  res.send('You successfully created a POST route!');
});

app.get('/albums', function(req, res) {
  res.send('You successfully created a GET route!');
});

app.put('/albums', function(req, res) {
  res.send('You successfully created a PUT route!');
});

app.delete('/albums', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

app.listen(3000, () => {
  console.log('Simple Server is running on 3000');
});

app.get('/', (request, response) => {
  response.render('home');
});

app.get('about', (request, response) => {
  response.render('about');
});

app.use((request, response) => {
  response.status(404);
  response.render('404');
});
 
db.each(query, (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
