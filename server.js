const express = require('express');
const nunjucks = require('nunjucks');

const data = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  res.render('index', { recipes: data });
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.get('/recipes', (req, res) => {
  return res.render('recipes', { recipes: data });
});

server.get('/recipes/:index', (req, res) => {
  const index = req.params.index;

  const recipe = data[index];
  
  if (!recipe) {
    return res.send('não existe');
  }

  return res.render('recipe', { recipe });
});

server.listen('5000', ()=>{
  console.log('Server is running!');
});