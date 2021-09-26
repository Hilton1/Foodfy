const express = require('express');
const data = require('./data');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index', { recipes: data });
});

routes.get('/about', (req, res) => {
  res.render('about');
});

routes.get('/recipes', (req, res) => {
  return res.render('recipes', { recipes: data });
});

routes.get('/recipes/:index', (req, res) => {
  const index = req.params.index;

  const recipe = data[index];
  
  if (!recipe) {
    return res.send('não existe');
  }

  return res.render('recipe', { recipe });
});

routes.use((req, res) => {
  res.status(404).render('not-found');
})

module.exports = routes;